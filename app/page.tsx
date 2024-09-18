import Bleed from '@/components/bleed';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import JobCard, { ExperienceProps } from '@/components/job-card';
import ProjectCard, { ProjectProps } from '@/components/project-card';

const projects: ProjectProps[] = [
    {
        current: true,
        href: 'https://github.com/FlexForge/flex_workout_mobile',
        title: 'Mobile Workout Tracker',
        description:
            'A flexible local-first workout logging app for Android and iOS',
        imgUrl: '/flex.png',
    },
    {
        href: 'https://www.calgarybisons.ca',
        title: 'The Calgary Bisons Site',
        description:
            'A website for the Calgary Bisons organization, powered by an external CMS',
        imgUrl: '/calgary-bisons.png',
    },

    {
        href: 'https://2023.igem.wiki/lethbridge/',
        title: 'uLethbridge iGem Wiki',
        description: 'University of Lethbridge iGem team wiki',
        imgUrl: '/uleth.png',
    },
    {
        href: 'https://github.com/MattyD1/Sandfall',
        title: 'Sandfall – A Physics Simulator',
        description:
            'A falling sand physics simulator based on Cellular Automata concepts',
        imgUrl: '/sandfall.jpg',
    },
];

const experience: ExperienceProps[] = [
    {
        company: 'Arcurve',
        position: 'Software Developer Consultant',
        date: '2023 → Present',
        description:
            'Consulted for Rogers Communications, and T.C. Energy to develop and maintain software solutions.',
        logo: '/arcurve.jpeg',
    },
    {
        company: 'Rogers Communications',
        position: 'Software Developer',
        date: '2024 → Present',
        logo: '/rogers.svg',
        description:
            'Maintained and improved the MyShaw app.  Delivering a smooth, consistent experience to 2M+ users.',
        flag: {
            label: 'Arcurve',
            backgroundColor: 'bg-red-100',
            textColor: 'text-red-700',
        },
    },
    {
        company: 'T.C. Energy',
        position: 'Software Developer',
        date: '2023',
        logo: '/tc.png',
        description:
            'Worked as part of a team to create and deploy an internal tool to collect, organize, and manage data on pipelines.',
        flag: {
            label: 'Arcurve ',
            backgroundColor: 'bg-red-100',
            textColor: 'text-red-700',
        },
    },

    {
        company: 'Pembina Pipeline',
        position: 'Software Developer',
        date: '2022',
        logo: '/pembina.png',
        flag: {
            label: 'Internship',
            backgroundColor: 'bg-yellow-100',
            textColor: 'text-yellow-700',
        },
    },

    {
        company: 'Invico Capital',
        position: 'Software Developer',
        date: '2021',
        logo: '/invico.svg',
        flag: {
            label: 'Internship',
            backgroundColor: 'bg-yellow-100',
            textColor: 'text-yellow-700',
        },
    },
];

export default function Home() {
    return (
        <main className="px-4 md:px-0">
            {/* Introduction */}
            <section className="pb-10 border-b border-slate-300 mb-10">
                <h1 className="font-semibold text-4xl mb-4 text-slate-950">
                    👋 I&apos;m Matt
                    <span className="block text-slate-500 font-normal text-2xl mt-1">
                        A software developer from Canada
                    </span>
                </h1>
                <p className="text-slate-700 text-xl leading-normal">
                    I love skiing, bouldering, and lifting heavy weights. I also
                    develop things, most recently I worked with Rogers to
                    maintain and improve the MyShaw app. Before that I worked
                    with T.C. to create an internal tool to manage oil
                    pipelines.
                </p>
            </section>

            {/* Projects */}
            <section className="mb-20">
                <h2 className="font-semibold text-2xl tracking-tight mb-4">
                    Personal Projects
                </h2>
                <p className="text-slate-700 text-lg">
                    Sometimes I code for fun, here are some of the stuff
                    I&apos;ve made.
                </p>
                <Bleed className="grid md:grid-cols-2 grid-flow-dense gap-8 mt-10">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={`${project.title}-${index}`}
                                {...project}
                            />
                        );
                    })}
                </Bleed>
            </section>

            {/* Experience */}
            <section>
                <h2 className="font-semibold text-2xl tracking-tight mb-4">
                    Experience
                </h2>
                <div className="divide-y divide-slate-200">
                    {experience.map((job, index) => {
                        return (
                            <JobCard key={`${job.company}-${index}`} {...job} />
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
