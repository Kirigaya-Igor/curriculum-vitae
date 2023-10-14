import { ReactNode } from 'react';

export interface ITitle {
    children?: ReactNode;

    isSmall?: boolean;
    id?: string;
    scrollMargin?: number;
}
