'use client';

import {
    getCountries,
    getCountryCallingCode,
    parsePhoneNumber,
} from 'react-phone-number-input';
import type { Country } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import { getExampleNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';
import { Check, ChevronDown, Search } from 'lucide-react';
import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import type { ChangeEvent } from 'react';

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    id?: string;
    required?: boolean;
    'aria-label'?: string;
}

interface CountryOption {
    code: Country;
    name: string;
    callingCode: string;
}

function getFlagEmoji(countryCode: string) {
    return countryCode
        .toUpperCase()
        .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397),
        );
}

function getNationalNumber(
    value: string,
    fallbackCountry: Country,
): string {
    if (!value) return '';

    try {
        const parsed = parsePhoneNumber(value);

        if (parsed) {
            return parsed.nationalNumber;
        }
    } catch {
        // Fall back to digits below.
    }

    const digits = value.replace(/\D/g, '');
    const callingCode = getCountryCallingCode(fallbackCountry);

    return digits.startsWith(callingCode)
        ? digits.slice(callingCode.length)
        : digits;
}

function detectCountry(value: string): Country | undefined {
    if (!value?.startsWith('+')) return undefined;

    try {
        return parsePhoneNumber(value)?.country;
    } catch {
        return undefined;
    }
}

function getCountryPlaceholder(country: Country): string {
    try {
        return (
            getExampleNumber(country, examples)?.formatNational() ?? ''
        );
    } catch {
        return '';
    }
}

export function PhoneInput({
    value,
    onChange,
    placeholder = '555 019 2834',
    id = 'phone',
    required = false,
    'aria-label': ariaLabel,
}: PhoneInputProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [country, setCountry] = useState<Country>('US');
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const countries = useMemo<CountryOption[]>(
        () =>
            getCountries()
                .map((code) => ({
                    code,
                    name: en[code] || code,
                    callingCode: getCountryCallingCode(code),
                }))
                .sort((a, b) => a.name.localeCompare(b.name)),
        [],
    );

    const selectedCountry = countries.find(
        (item) => item.code === country,
    );

    const nationalNumber = getNationalNumber(value, country);

    const countryPlaceholder =
        getCountryPlaceholder(country) || placeholder;

    const filteredCountries = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return countries;

        return countries.filter(
            (item) =>
                item.name.toLowerCase().includes(query) ||
                item.code.toLowerCase().includes(query) ||
                item.callingCode.includes(query),
        );
    }, [countries, search]);

    useEffect(() => {
        const detectedCountry = detectCountry(value);

        if (detectedCountry && detectedCountry !== country) {
            setCountry(detectedCountry);
        }
    }, [value, country]);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(
                    event.target as Node,
                )
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener(
            'mousedown',
            handleClickOutside,
        );

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
            );
        };
    }, [isOpen]);

    const handleCountryChange = (nextCountry: Country) => {
        const nextCallingCode =
            getCountryCallingCode(nextCountry);

        const currentNationalNumber = getNationalNumber(
            value,
            country,
        );

        setCountry(nextCountry);
        setIsOpen(false);
        setSearch('');

        onChange(
            currentNationalNumber
                ? `+${nextCallingCode}${currentNationalNumber}`
                : '',
        );
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const digits = event.target.value.replace(/\D/g, '');

        if (!digits) {
            onChange('');
            return;
        }

        const callingCode = getCountryCallingCode(country);

        onChange(`+${callingCode}${digits}`);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full"
        >
            <div
                className="
                    flex min-h-[52px] w-full overflow-visible
                    rounded-xl border border-white/[0.10]
                    bg-[#0f172a]/80 transition-all duration-200
                    hover:border-white/[0.16]
                    focus-within:border-[#f43f5e]
                    focus-within:bg-[#111827]
                    focus-within:ring-4
                    focus-within:ring-[#f43f5e]/10
                "
            >
                <button
                    type="button"
                    aria-label="Select country"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                    className="
                        flex h-[50px] w-[92px] shrink-0
                        items-center justify-center gap-1.5
                        border-r border-white/[0.08]
                        bg-transparent px-2 outline-none
                        transition-colors
                        hover:bg-white/[0.05]
                        active:bg-white/[0.08]
                    "
                >
                    <span
                        className="
                            shrink-0 text-[12px] font-bold
                            uppercase leading-none
                            tracking-[0.04em] text-gray-200
                        "
                    >
                        {country}
                    </span>

                    <span
                        className="
                            shrink-0 text-[12px] font-medium
                            leading-none text-gray-400
                        "
                    >
                        +{selectedCountry?.callingCode}
                    </span>

                    <ChevronDown
                        size={15}
                        strokeWidth={2.5}
                        aria-hidden="true"
                        className={`
                            shrink-0 text-gray-400
                            transition-transform duration-200
                            ${isOpen
                                ? 'rotate-180 text-white'
                                : ''
                            }
                        `}
                    />
                </button>

                <div className="min-w-0 flex-1">
                    <input
                        id={id}
                        name={id}
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        value={nationalNumber}
                        onChange={handleInputChange}
                        placeholder={countryPlaceholder}
                        required={required}
                        aria-label={
                            ariaLabel || 'Phone number'
                        }
                        className="
                            h-[50px] w-full min-w-0 border-0
                            bg-transparent px-4 text-[15px]
                            font-medium tracking-[0.01em]
                            text-white outline-none
                            placeholder:text-gray-600
                        "
                    />
                </div>
            </div>

            {isOpen && (
                <div
                    role="listbox"
                    aria-label="Countries"
                    className="
                        absolute left-0 top-[calc(100%+8px)]
                        z-[200] w-[min(360px,calc(100vw-3rem))]
                        overflow-hidden rounded-2xl
                        border border-white/[0.10]
                        bg-[#0b1120]
                        shadow-[0_25px_70px_rgba(0,0,0,0.55)]
                        ring-1 ring-black/30
                    "
                >
                    <div
                        className="
                            border-b border-white/[0.08] p-3
                        "
                    >
                        <div className="relative">
                            <Search
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute left-3.5 top-1/2
                                    -translate-y-1/2
                                    text-gray-500
                                "
                            />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                autoFocus
                                placeholder="Search country or code..."
                                aria-label="Search countries"
                                className="
                                    h-10 w-full rounded-lg
                                    border border-white/[0.08]
                                    bg-white/[0.04]
                                    pl-10 pr-3 text-sm
                                    text-white outline-none
                                    placeholder:text-gray-600
                                    focus:border-[#f43f5e]/60
                                    focus:bg-white/[0.06]
                                "
                            />
                        </div>
                    </div>

                    <div
                        className="
                            max-h-[300px] overflow-y-auto p-1.5
                            [scrollbar-width:thin]
                            [scrollbar-color:rgba(255,255,255,0.15)_transparent]
                        "
                    >
                        {filteredCountries.length === 0 ? (
                            <div className="px-4 py-8 text-center">
                                <p className="text-sm font-medium text-gray-400">
                                    No countries found
                                </p>

                                <p className="mt-1 text-xs text-gray-600">
                                    Try another country or calling code.
                                </p>
                            </div>
                        ) : (
                            filteredCountries.map((item) => {
                                const isSelected =
                                    item.code === country;

                                return (
                                    <button
                                        key={item.code}
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        onClick={() =>
                                            handleCountryChange(
                                                item.code,
                                            )
                                        }
                                        className={`
                                            group flex w-full
                                            items-center gap-3
                                            rounded-xl px-3 py-2.5
                                            text-left transition-all
                                            duration-150
                                            ${isSelected
                                                ? 'bg-[#f43f5e]/10'
                                                : 'hover:bg-white/[0.05]'
                                            }
                                        `}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="
                                                flex h-9 w-9 shrink-0
                                                items-center justify-center
                                                rounded-lg bg-white/[0.05]
                                                text-xl
                                            "
                                        >
                                            {getFlagEmoji(item.code)}
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span
                                                className={`
                                                    block truncate text-sm
                                                    font-semibold
                                                    ${isSelected
                                                        ? 'text-white'
                                                        : 'text-gray-300 group-hover:text-white'
                                                    }
                                                `}
                                            >
                                                {item.name}
                                            </span>

                                            <span
                                                className="
                                                    mt-0.5 block text-xs
                                                    uppercase text-gray-600
                                                "
                                            >
                                                {item.code}
                                            </span>
                                        </span>

                                        <span
                                            className="
                                                shrink-0 text-sm
                                                font-medium tabular-nums
                                                text-gray-400
                                            "
                                        >
                                            +{item.callingCode}
                                        </span>

                                        {isSelected && (
                                            <Check
                                                size={16}
                                                strokeWidth={2.5}
                                                aria-hidden="true"
                                                className="
                                                    shrink-0 text-[#fb7185]
                                                "
                                            />
                                        )}
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}