import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Open_Sans } from 'next/font/google';
import { baseUrl } from './sitemap';
import { Analytics } from '@vercel/analytics/react';

const openSans = Open_Sans({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Matt Dunn',
        template: '%s | Software Developer',
    },
    description:
        'Matt Dunn is a software developer based in Canada, working of something to do with code.',
    openGraph: {
        title: 'Matt Dunn | Software Developer',
        description:
            'Matt Dunn is a software developer based in Canada, working of something to do with code.',
        url: baseUrl,
        siteName: 'Matt Dunn | Software Developer',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${openSans.className} antialiased`}>
                <div className="max-w-2xl lg:max-w-xl mx-auto">
                    <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
                        <Link href="/">
                            <h1 className="text-base font-mono font-semibold text-slate-950">
                                matt{' '}
                            </h1>
                        </Link>
                        <nav className="flex gap-4">
                            <Link
                                href="https://github.com/MattyD1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-950 text-sm tracking-tighter font-mono font-semibold"
                            >
                                <Icons.github className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/matt-dunn-67172b208/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-950 text-sm tracking-tighter font-mono font-semibold"
                            >
                                <Icons.linkedin className="h-4 w-4" />
                            </Link>
                        </nav>
                    </header>
                    {children}
                    <footer className="flex flex-col gap-2 px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight  ">
                        <div className="flex justify-between">
                            <p>Matt Dunn</p>
                            <p>
                                <Link
                                    href="https://github.com/MattyD1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source
                                </Link>
                            </p>
                        </div>
                        <p>Inpiration for site → @alexjpate </p>
                    </footer>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
