// lib/lucide-icons.ts

import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function getLucideIcon(
    name?: string,
    size?:number
): LucideIcon | null {
    if (!name) return null;

    const icon = Icons[
        name as keyof typeof Icons
    ];

    if (
        typeof icon === 'object' ||
        typeof icon === 'function'
    ) {
        return icon as LucideIcon;
    }

    return null;
}