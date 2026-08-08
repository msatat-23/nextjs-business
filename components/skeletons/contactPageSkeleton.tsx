

function Skeleton({
    className = '',
    shimmer = true,
}: {
    className?: string;
    shimmer?: boolean;
}) {
    return (
        <div
            className={[
                'bg-white/[0.07]',
                shimmer
                    ? 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[contact-skeleton-shimmer_1.8s_ease-in-out_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.07] before:to-transparent'
                    : '',
                className,
            ].join(' ')}
        />
    );
}

/**
 * Contact page Suspense fallback.
 *
 * Mirrors:
 * - ContactHero height
 * - Hero content positioning
 * - Form overlap (-mt-60)
 * - Form card dimensions
 * - 2-column desktop form / 1-column mobile
 */
export function ContactPageSkeleton() {
    return (
        <main
            className="min-h-[90vh] w-full overflow-x-hidden bg-[#030712] pb-24 text-[#f9fafb]"
            aria-busy="true"
            aria-label="Loading contact page"
        >
            <ContactHeroSkeleton />

            <ContactFormSkeleton />
        </main>
    );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function ContactHeroSkeleton() {
    return (
        <section className="relative flex h-[380px] w-full items-center justify-center overflow-hidden border-b border-white/10 bg-[#030712] text-center">
            {/* Simulated background image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#030712] to-[#0f0714] opacity-80" />

            {/* Rose / purple glow — matches the actual hero */}
            <div className="pointer-events-none absolute left-1/2 top-[20%] h-[300px] w-[600px] max-w-[100vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.16)_0%,rgba(168,85,247,0.08)_50%,rgba(3,7,18,0)_70%)] blur-2xl" />

            {/* Very subtle image-like texture */}
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-white/[0.02] blur-3xl" />
                <div className="absolute right-[15%] bottom-[10%] h-52 w-52 rounded-full bg-purple-500/[0.03] blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6">
                {/* Badge */}
                <Skeleton
                    className="mb-5 h-8 w-48 rounded-full"
                />

                {/* Heading */}
                <div className="flex w-full flex-col items-center gap-3">
                    <Skeleton
                        className="h-10 w-[85%] max-w-[560px] rounded-lg sm:h-14"
                    />

                    <Skeleton
                        className="h-10 w-[55%] max-w-[340px] rounded-lg sm:h-14"
                    />
                </div>

                {/* Description */}
                <div className="mt-5 flex w-full max-w-2xl flex-col items-center gap-2">
                    <Skeleton className="h-4 w-full max-w-[620px] rounded" />
                    <Skeleton className="h-4 w-[82%] max-w-[500px] rounded" />
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Contact form                                                               */
/* -------------------------------------------------------------------------- */

function ContactFormSkeleton() {
    return (
        <section className="relative z-20 mx-auto -mt-[60px] w-full max-w-3xl px-6">
            <div className="rounded-2xl border border-white/10 bg-[#0b0f19] p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_30px_rgba(244,63,94,0.12)] backdrop-blur-md sm:p-12">
                {/* Form heading */}
                <div className="mb-10 flex flex-col items-center">
                    <Skeleton
                        className="h-8 w-[65%] max-w-[360px] rounded-lg sm:h-9"
                    />

                    <div className="mt-3 flex w-full max-w-xl flex-col items-center gap-2">
                        <Skeleton className="h-4 w-full rounded" />
                        <Skeleton className="h-4 w-[78%] rounded" />
                    </div>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <ContactFieldSkeleton />
                    <ContactFieldSkeleton />

                    <ContactFieldSkeleton />
                    <ContactFieldSkeleton />

                    {/* Submit */}
                    <div className="col-span-1 mt-1 sm:col-span-2">
                        <Skeleton className="h-[58px] w-full rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Input skeleton                                                             */
/* -------------------------------------------------------------------------- */

function ContactFieldSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            {/* Label */}
            <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-3.5 w-24 rounded" />
                <Skeleton className="h-3 w-2 rounded" />
            </div>

            {/* Input */}
            <Skeleton className="h-[49px] w-full rounded-xl" />
        </div>
    );
}

