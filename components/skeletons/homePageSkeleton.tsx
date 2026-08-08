export function HomePageSkeleton() {
    return (
        <div
            className="w-full overflow-x-hidden bg-[#030712] text-[#f9fafb]"
            aria-busy="true"
            aria-label="Loading home page"
        >
            {/* Hero */}
            <section className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 overflow-hidden px-6 py-12 sm:py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                {/* Background glow */}
                <div className="pointer-events-none absolute left-1/2 top-[10%] h-[min(600px,90vw)] w-[min(600px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.12)_0%,rgba(168,85,247,0.06)_50%,rgba(3,7,18,0)_70%)] blur-3xl" />

                {/* Hero content */}
                <div className="relative z-10 flex w-full min-w-0 flex-col gap-5">
                    {/* Eyebrow */}
                    <Skeleton
                        className="h-9 w-64 rounded-full"
                        shimmer
                    />

                    {/* Heading */}
                    <div className="flex flex-col gap-3">
                        <Skeleton className="h-10 w-full max-w-[620px] sm:h-14 lg:h-16" shimmer />
                        <Skeleton className="h-10 w-[82%] max-w-[520px] sm:h-14 lg:h-16" shimmer />
                    </div>

                    {/* Description */}
                    <div className="flex max-w-[580px] flex-col gap-2">
                        <Skeleton className="h-4 w-full" shimmer />
                        <Skeleton className="h-4 w-[94%]" shimmer />
                        <Skeleton className="h-4 w-[72%]" shimmer />
                    </div>

                    {/* Buttons */}
                    <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                        <Skeleton
                            className="h-[50px] w-full rounded-xl sm:w-44"
                            shimmer
                        />
                        <Skeleton
                            className="h-[50px] w-full rounded-xl sm:w-48"
                            shimmer
                        />
                    </div>

                    {/* Trust badges */}
                    <div className="mt-3 flex flex-wrap gap-4 border-t border-white/10 pt-5 sm:gap-6">
                        <Skeleton className="h-5 w-36" shimmer />
                        <Skeleton className="h-5 w-40" shimmer />
                        <Skeleton className="h-5 w-32" shimmer />
                    </div>
                </div>

                {/* Hero dashboard */}
                <HeroDashboardSkeleton />
            </section>

            {/* Stats ticker */}
            <StatsSkeleton />

            {/* Services */}
            <ServicesSkeleton />

            {/* Methodology */}
            <MethodologySkeleton />

            {/* Case studies */}
            <FeaturePanelSkeleton
                imageSide="right"
                rows={3}
            />

            {/* Sector playbooks */}
            <FeaturePanelSkeleton
                imageSide="left"
                rows={4}
            />

            {/* Executive capabilities */}
            <FeaturePanelSkeleton
                imageSide="right"
                rows={3}
                large
            />

            {/* ROI calculator */}
            <RoiSkeleton />

            {/* Roadmap */}
            <RoadmapSkeleton />

            {/* CTA */}
            <CtaSkeleton />
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Base skeleton                                                               */
/* -------------------------------------------------------------------------- */

function Skeleton({
    className = '',
    shimmer = false,
}: {
    className?: string;
    shimmer?: boolean;
}) {
    return (
        <div
            className={[
                'bg-white/[0.07]',
                shimmer
                    ? 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[skeleton-shimmer_1.8s_ease-in-out_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.07] before:to-transparent'
                    : '',
                className,
            ].join(' ')}
        />
    );
}

/* -------------------------------------------------------------------------- */
/* Hero dashboard                                                              */
/* -------------------------------------------------------------------------- */

function HeroDashboardSkeleton() {
    return (
        <div className="relative z-10 w-full">
            {/* AI badge */}
            <Skeleton
                className="mb-4 ml-auto h-8 w-44 rounded-full sm:w-52"
                shimmer
            />

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f19] shadow-[0_25px_60px_rgba(0,0,0,0.75)]">
                {/* Browser header */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#111827]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-white/10" />
                        <span className="h-3 w-3 rounded-full bg-white/10" />
                        <span className="h-3 w-3 rounded-full bg-white/10" />
                    </div>

                    <Skeleton className="h-4 w-40 rounded" shimmer />
                </div>

                <div className="flex flex-col gap-4 p-4 sm:p-5">
                    {/* KPI cards */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-white/10 bg-[#111827]/60 p-3"
                            >
                                <Skeleton className="h-3 w-20 rounded" shimmer />
                                <Skeleton className="mt-2 h-6 w-24 rounded" shimmer />
                                <Skeleton className="mt-2 h-3 w-14 rounded" shimmer />
                            </div>
                        ))}
                    </div>

                    {/* Chart */}
                    <div className="rounded-xl border border-white/10 bg-[#111827]/60 p-4">
                        <div className="flex items-center justify-between gap-3">
                            <Skeleton className="h-4 w-28 rounded" shimmer />

                            <div className="flex gap-1 rounded-lg border border-white/10 bg-[#030712] p-1">
                                {[1, 2, 3, 4].map((item) => (
                                    <Skeleton
                                        key={item}
                                        className="h-6 w-7 rounded"
                                        shimmer
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Fake chart */}
                        <div className="relative mt-4 h-[140px] overflow-hidden">
                            <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-white/[0.05]" />
                            <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/[0.05]" />
                            <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-white/[0.05]" />

                            <div className="absolute inset-x-4 bottom-5 h-[75%]">
                                <div className="absolute bottom-0 left-0 h-[25%] w-[18%] rounded-t-full bg-gradient-to-t from-[#f43f5e]/5 to-[#f43f5e]/20 blur-sm" />
                                <div className="absolute bottom-[25%] left-[15%] h-[20%] w-[20%] rounded-t-full bg-gradient-to-t from-[#f43f5e]/5 to-[#f43f5e]/20 blur-sm" />
                                <div className="absolute bottom-[45%] left-[35%] h-[20%] w-[20%] rounded-t-full bg-gradient-to-t from-[#f43f5e]/5 to-[#f43f5e]/20 blur-sm" />
                                <div className="absolute bottom-[65%] left-[55%] h-[20%] w-[20%] rounded-t-full bg-gradient-to-t from-[#a855f7]/5 to-[#a855f7]/20 blur-sm" />

                                <div className="absolute bottom-[22%] left-0 h-[3px] w-[25%] rotate-[-8deg] rounded-full bg-gradient-to-r from-[#fb7185] to-[#f43f5e]" />
                                <div className="absolute bottom-[40%] left-[20%] h-[3px] w-[25%] rotate-[-12deg] rounded-full bg-gradient-to-r from-[#f43f5e] to-[#e11d48]" />
                                <div className="absolute bottom-[60%] left-[40%] h-[3px] w-[25%] rotate-[-12deg] rounded-full bg-gradient-to-r from-[#e11d48] to-[#a855f7]" />
                                <div className="absolute bottom-[80%] left-[60%] h-[3px] w-[25%] rotate-[-12deg] rounded-full bg-gradient-to-r from-[#a855f7] to-[#c084fc]" />
                            </div>
                        </div>

                        <div className="flex justify-between border-t border-white/5 pt-2">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Skeleton
                                    key={item}
                                    className="h-3 w-8 rounded"
                                    shimmer
                                />
                            ))}
                        </div>
                    </div>

                    {/* Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400/50" />
                            <Skeleton className="h-3 w-40 rounded" shimmer />
                        </div>

                        <Skeleton className="h-3 w-20 rounded" shimmer />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Stats                                                                       */
/* -------------------------------------------------------------------------- */

function StatsSkeleton() {
    return (
        <section className="relative w-full overflow-hidden border-y border-white/10 bg-[#070b14]/90 py-8">
            <div className="flex w-max gap-4 px-6 sm:gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="flex h-[68px] w-[220px] shrink-0 items-center gap-4 rounded-xl border border-white/10 bg-[#0b0f19] px-5 py-3"
                    >
                        <Skeleton className="h-8 w-16 rounded" shimmer />

                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-3 w-28 rounded" shimmer />
                            <Skeleton className="h-3 w-20 rounded" shimmer />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

function ServicesSkeleton() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
            <SectionHeading />

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="flex min-h-[300px] flex-col justify-between rounded-2xl border border-white/10 bg-[#0b0f19] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)] sm:p-8"
                    >
                        <div>
                            <div className="mb-5 flex items-center justify-between">
                                <Skeleton className="h-12 w-12 rounded-xl" shimmer />
                                <Skeleton className="h-6 w-20 rounded-full" shimmer />
                            </div>

                            <Skeleton className="h-6 w-48 rounded" shimmer />

                            <div className="mt-4 flex flex-col gap-2">
                                <Skeleton className="h-3.5 w-full rounded" shimmer />
                                <Skeleton className="h-3.5 w-[90%] rounded" shimmer />
                                <Skeleton className="h-3.5 w-[70%] rounded" shimmer />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4">
                            {[1, 2, 3].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <Skeleton className="h-4 w-4 shrink-0 rounded-full" shimmer />
                                    <Skeleton className="h-3 w-36 rounded" shimmer />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Methodology                                                                 */
/* -------------------------------------------------------------------------- */

function MethodologySkeleton() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f19] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] sm:p-12">
                <SectionHeading />

                {/* Tabs */}
                <div className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-[#111827]/80 p-1.5">
                    {[1, 2, 3, 4].map((item) => (
                        <Skeleton
                            key={item}
                            className="h-10 w-24 rounded-xl"
                            shimmer
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-white/10 bg-[#111827]/60 p-6 md:grid-cols-[1.5fr_1fr] sm:p-10">
                    <div>
                        <Skeleton className="h-7 w-64 rounded" shimmer />

                        <div className="mt-4 flex flex-col gap-2">
                            <Skeleton className="h-4 w-full rounded" shimmer />
                            <Skeleton className="h-4 w-[92%] rounded" shimmer />
                            <Skeleton className="h-4 w-[76%] rounded" shimmer />
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <Skeleton className="h-[18px] w-[18px] shrink-0 rounded-full" shimmer />
                                    <Skeleton className="h-4 w-[75%] rounded" shimmer />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-white/10 bg-[#030712] p-8">
                        <Skeleton className="h-20 w-20 rounded-full" shimmer />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Feature / slider sections                                                   */
/* -------------------------------------------------------------------------- */

function FeaturePanelSkeleton({
    imageSide = 'right',
    rows = 3,
    large = false,
}: {
    imageSide?: 'left' | 'right';
    rows?: number;
    large?: boolean;
}) {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f19] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.65)] sm:p-10 lg:p-12">
                <div
                    className={[
                        'grid grid-cols-1 items-center gap-8 lg:grid-cols-2',
                        imageSide === 'left' ? 'lg:[&>*:first-child]:order-2' : '',
                    ].join(' ')}
                >
                    {/* Content */}
                    <div className="flex flex-col gap-5">
                        <Skeleton className="h-7 w-44 rounded-full" shimmer />

                        <Skeleton
                            className={`h-8 rounded ${large ? 'w-[85%] sm:h-10' : 'w-[78%]'
                                }`}
                            shimmer
                        />

                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-4 w-full rounded" shimmer />
                            <Skeleton className="h-4 w-[92%] rounded" shimmer />
                            <Skeleton className="h-4 w-[72%] rounded" shimmer />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#111827]/60 p-4">
                            <Skeleton className="mb-3 h-3 w-40 rounded" shimmer />

                            <div className="flex flex-col gap-2.5">
                                {Array.from({ length: rows }).map((_, index) => (
                                    <div key={index} className="flex items-center gap-2.5">
                                        <Skeleton
                                            className="h-4 w-4 shrink-0 rounded-full"
                                            shimmer
                                        />
                                        <Skeleton
                                            className="h-3.5 rounded"
                                            shimmer
                                            // Small variation makes the skeleton feel less artificial.
                                            // eslint-disable-next-line react/jsx-no-comment-textnodes
                                            // @ts-ignore
                                            style={{ width: `${72 - index * 8}%` }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Skeleton className="h-12 w-52 rounded-xl" shimmer />
                    </div>

                    {/* Image */}
                    <div
                        className={[
                            'relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]',
                            large
                                ? 'h-[300px] sm:h-[360px]'
                                : 'h-[280px] sm:h-[340px]',
                        ].join(' ')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f43f5e]/10 via-transparent to-[#9333ea]/10" />

                        {/* Fake image composition */}
                        <div className="absolute inset-8 rounded-xl border border-white/10 bg-[#030712]/60">
                            <div className="absolute left-6 right-6 top-6 h-4 rounded bg-white/[0.06]" />
                            <div className="absolute left-6 top-16 h-28 w-[42%] rounded-lg bg-white/[0.05]" />
                            <div className="absolute right-6 top-16 h-28 w-[42%] rounded-lg bg-white/[0.04]" />
                            <div className="absolute bottom-6 left-6 right-6 h-10 rounded-lg bg-gradient-to-r from-[#f43f5e]/10 to-[#9333ea]/10" />
                        </div>

                        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/[0.025] to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* ROI                                                                         */
/* -------------------------------------------------------------------------- */

function RoiSkeleton() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
            <SectionHeading />

            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0b0f19] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:p-10">
                <div className="rounded-xl border border-white/10 bg-[#111827]/80 p-6">
                    <div className="flex items-center justify-between gap-4">
                        <Skeleton className="h-5 w-40 rounded" shimmer />
                        <Skeleton className="h-8 w-28 rounded" shimmer />
                    </div>

                    <Skeleton className="mt-5 h-2 w-full rounded-full" shimmer />

                    <div className="mt-3 flex justify-between">
                        <Skeleton className="h-3 w-12 rounded" shimmer />
                        <Skeleton className="h-3 w-12 rounded" shimmer />
                        <Skeleton className="h-3 w-12 rounded" shimmer />
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="flex flex-col items-center rounded-xl border border-white/10 bg-[#111827]/60 p-5 text-center"
                        >
                            <Skeleton className="h-9 w-28 rounded" shimmer />
                            <Skeleton className="mt-2 h-3 w-24 rounded" shimmer />
                            <Skeleton className="mt-2 h-3 w-20 rounded" shimmer />
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <Skeleton className="h-12 w-48 rounded-xl" shimmer />
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Roadmap                                                                     */
/* -------------------------------------------------------------------------- */

function RoadmapSkeleton() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
            <SectionHeading />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#0b0f19] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                        <Skeleton className="h-10 w-10 rounded-xl" shimmer />
                        <Skeleton className="mt-4 h-5 w-32 rounded" shimmer />

                        <div className="mt-4 flex flex-col gap-2">
                            <Skeleton className="h-3.5 w-full rounded" shimmer />
                            <Skeleton className="h-3.5 w-[90%] rounded" shimmer />
                            <Skeleton className="h-3.5 w-[70%] rounded" shimmer />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* CTA                                                                         */
/* -------------------------------------------------------------------------- */

function CtaSkeleton() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
            <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f19] p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:p-16">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),transparent_60%)]" />

                <Skeleton className="relative h-10 w-[80%] max-w-2xl rounded sm:h-12" shimmer />

                <div className="relative flex w-full max-w-xl flex-col items-center gap-2">
                    <Skeleton className="h-4 w-full rounded" shimmer />
                    <Skeleton className="h-4 w-[88%] rounded" shimmer />
                </div>

                <Skeleton className="relative h-12 w-48 rounded-xl" shimmer />
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Shared section heading                                                     */
/* -------------------------------------------------------------------------- */

function SectionHeading() {
    return (
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <Skeleton
                className="mx-auto h-7 w-36 rounded-full"
                shimmer
            />

            <Skeleton
                className="mx-auto mt-4 h-9 w-[80%] max-w-xl rounded sm:h-11"
                shimmer
            />

            <div className="mx-auto mt-4 flex max-w-2xl flex-col items-center gap-2">
                <Skeleton className="h-4 w-full rounded" shimmer />
                <Skeleton className="h-4 w-[88%] rounded" shimmer />
                <Skeleton className="h-4 w-[62%] rounded" shimmer />
            </div>
        </div>
    );
}