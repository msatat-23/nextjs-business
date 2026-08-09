function Skeleton({
    className = '',
    shimmer = true,
    style,
}: {
    className?: string;
    shimmer?: boolean;
    style?: React.CSSProperties;
}) {
    return (
        <div
            className={[
                'bg-white/[0.07]',
                shimmer
                    ? 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[footer-skeleton-shimmer_1.8s_ease-in-out_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.07] before:to-transparent'
                    : '',
                className,
            ].join(' ')}
            style={style}
        />
    );
}

/**
 * Footer Suspense fallback skeleton.
 *
 * Mirrors the footer structure with:
 * - Brand section
 * - Navigation links
 * - Contact information
 * - Newsletter form
 * - Copyright footer
 */
export function FooterSkeleton() {
    return (
        <footer
            className="bg-[#030712] text-gray-400 border-t border-white/10 pt-16 pb-8 px-6 font-sans"
            aria-busy="true"
            aria-label="Loading footer"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">
                {/* Brand section */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-9 h-9 rounded-xl shrink-0" />
                        <Skeleton className="h-5 w-48 rounded" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-3.5 w-full rounded" />
                        <Skeleton className="h-3.5 w-[92%] rounded" />
                        <Skeleton className="h-3.5 w-[85%] rounded" />
                    </div>
                </div>

                {/* Navigation section */}
                <div>
                    <Skeleton className="h-4 w-28 rounded mb-4" />
                    <div className="flex flex-col gap-3">
                        <Skeleton className="h-3.5 w-16 rounded" />
                        <Skeleton className="h-3.5 w-20 rounded" />
                    </div>
                </div>

                {/* Contact section */}
                <div>
                    <Skeleton className="h-4 w-32 rounded mb-4" />
                    <div className="flex flex-col gap-3">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <Skeleton className="h-4 w-4 rounded-full shrink-0" />
                                <Skeleton
                                    className="h-3 rounded"
                                    style={{ width: `${Math.max(55, 75 - item * 8)}%` }}
                                />
                            </div>
                        ))}
                    </div>
                    <Skeleton className="mt-4 h-[40px] w-52 rounded-lg" />
                </div>

                {/* Newsletter section */}
                <div>
                    <Skeleton className="h-4 w-44 rounded mb-2" />
                    <div className="flex flex-col gap-2 mb-3">
                        <Skeleton className="h-3 w-full rounded" />
                        <Skeleton className="h-3 w-[90%] rounded" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-[42px] w-full rounded-xl" />
                        <Skeleton className="h-[42px] w-full rounded-xl" />
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
                <Skeleton className="h-3.5 w-64 rounded" />
                <Skeleton className="h-3.5 w-56 rounded" />
            </div>
        </footer>
    );
}
