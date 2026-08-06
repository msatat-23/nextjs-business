'use client';

import { useQuery } from '@tanstack/react-query';
import {
    fetchPageData,
    type PageApiRecord,
} from '@/lib/api';



export function usePublicPageQuery(slug: string) {
    return useQuery({
        queryKey: ['page', slug],
        queryFn: () => fetchPageData(slug),
        enabled: Boolean(slug),
    });
}




