import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export type ExperienceProps = {
    company: string;
    position?: string;
    description?: string;
    date: string;
    logo: string;
    flag?: Flag;
};

type Flag = {
    label: string;
    backgroundColor: string;
    textColor: string;
};

function JobCard({
    company,
    position,
    description,
    date,
    logo,
    flag,
}: ExperienceProps) {
    return (
        <div className="flex gap-4 py-4">
            <Image
                width={56}
                height={56}
                src={logo}
                alt={`${company} logo`}
                className="w-14 h-14 rounded-lg"
            />
            <div className="flex flex-col col-span-9">
                <p className="text-slate-800 text-xl font-semibold">
                    {company}
                </p>
                <p className="text-slate-700 text-lg">
                    {position}

                    {flag && (
                        <span
                            className={cn(
                                'text-sm  py-1 px-2 ml-2 rounded-md',
                                flag.backgroundColor,
                                flag.textColor
                            )}
                        >
                            {flag.label}
                        </span>
                    )}
                </p>
                {description && (
                    <p className="text-base text-slate-700 mt-2">
                        {description}
                    </p>
                )}
                <div className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {date}
                </div>
            </div>
        </div>
    );
}

export default JobCard;
