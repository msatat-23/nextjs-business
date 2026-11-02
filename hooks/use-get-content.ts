'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchContentData } from '@/lib/api';

export function useContentQuery<T>(slug: string) {
    return useSuspenseQuery({
        queryKey: ['content', slug],
        queryFn: () => fetchContentData<T>(slug),
    });
}
