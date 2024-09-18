import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    className?: string;
    children?: React.ReactNode;
};

function Bleed({ className, children }: Props) {
    return (
        <div className={cn('lg:w-[170%] lg:-ml-[35%]', className)}>
            {children}
        </div>
    );
}

export default Bleed;
