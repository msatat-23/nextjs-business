'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import {
    fetchPageData,
} from '@/lib/api';



export function usePageQuery<T>(slug: string) {
    return useSuspenseQuery({
        queryKey: ['page', slug],
        queryFn: () => fetchPageData<T>(slug),
    });
}




