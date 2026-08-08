

import { ContactFormData } from '@/types';
import type { HomePageContent } from '@/types/home-page';


export type PageContent = HomePageContent;

const DEFAULT_API_BASE_URL = 'http://localhost:3001/api/v1';

export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL;

export type ApiEnvelope<T> = {
    success: true;
    statusCode: number;
    data: T;
};

export type ApiError = {
    message?: string;
    error?: string;
    statusCode?: number;
};

export interface PageApiRecord {
    id: number;
    slug: string;
    content: PageContent;
    updatedByEmail: string | null;
    createdAt: string;
    updatedAt: string;
}


async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {

    const headers = new Headers(options.headers || {});
    headers.set('Content-Type', 'application/json');



    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers,
    });
    console.log(response)

    if (!response.ok) {
        let payload: ApiError | undefined;
        try {
            payload = (await response.json()) as ApiError;
        } catch {
            payload = undefined;
        }

        const message = payload?.message || payload?.error || 'Request failed.';
        throw new Error(message);
    }

    if (response.status === 204) {
        return undefined as T;
    }

    const envelope = (await response.json()) as ApiEnvelope<T>;
    return envelope.data;
};


export async function fetchPageData(page: string): Promise<PageApiRecord> {
    return apiRequest<PageApiRecord>(`/pages/${page}`);
};

export async function submitContact(
    data: ContactFormData,
) {
    return apiRequest('/contact', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}