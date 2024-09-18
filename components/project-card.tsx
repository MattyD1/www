import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export type ProjectProps = {
    href: string;
    title: string;
    description: string;
    imgUrl: string;
    current?: boolean;
};

function ProjectCard({
    href,
    title,
    description,
    imgUrl,
    current,
}: ProjectProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col  bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl p-8"
        >
            {/* Image Container */}
            <div className="relative rounded-xl mb-4 shadow-xl w-full h-[240px]">
                <Image
                    fill
                    objectFit="cover"
                    quality={90}
                    src={imgUrl}
                    alt={title}
                    className="rounded-xl bg-cover"
                />
            </div>

            <h3 className="text-slate-700 font-semibold tracking-light text-xl">
                {title}
                {current && (
                    <span className="text-sm bg-green-200 text-green-700 py-1 px-2 ml-2 rounded-md">
                        In Progress
                    </span>
                )}
            </h3>

            <p className="text-slate-500 text-base">{description}</p>
        </Link>
    );
}

export default ProjectCard;
