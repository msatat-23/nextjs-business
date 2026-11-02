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
                    ? 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[header-skeleton-shimmer_1.8s_ease-in-out_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.07] before:to-transparent'
                    : '',
                className,
            ].join(' ')}
        />
    );
}

/**
 * Header Suspense fallback skeleton.
 *
 * Mirrors the header structure with:
 * - Logo and brand
 * - Navigation pills
 * - Call-to-action button
 * - Mobile menu toggle
 */
export function HeaderSkeleton() {
    return (
        <header
            className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/92 border-b border-white/10 transition-all duration-300"
            aria-busy="true"
            aria-label="Loading header"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
                {/* Logo section */}
                <div className="flex items-center gap-3.5">
                    <Skeleton className="w-9.5 h-9.5 rounded-xl shrink-0" />
                    <div className="flex flex-col gap-1.5">
                        <Skeleton className="h-5 w-48 rounded" />
                        <Skeleton className="h-2.5 w-36 rounded" />
                    </div>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden lg:flex items-center gap-1.5 bg-[#111827]/80 px-2 py-1.5 rounded-full border border-white/10">
                    {[1, 2, 3, 4].map((item) => (
                        <Skeleton
                            key={item}
                            className="h-[38px] w-20 rounded-full"
                        />
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Desktop CTA button */}
                    <Skeleton className="hidden sm:flex h-[40px] w-44 rounded-lg" />

                    {/* Mobile menu toggle */}
                    <Skeleton className="flex lg:hidden h-[44px] w-[44px] rounded-lg" />
                </div>
            </div>
        </header>
    );
}
