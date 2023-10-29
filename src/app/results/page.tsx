'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { getURL } from '@/utils/url';
import Image from 'next/image';
import { EPKTheme } from '@/types/themes';
import Link from 'next/link';

const themes: EPKTheme[] = [
    'tapped',
    'tapped',
    'tapped',
];

export default function Results() {
    const { user, claim } = useAuth();
    const [error, setError] = useState<boolean>(false);
    const [selectedTheme, setSelectedTheme] = useState<number | null>(null);

    if (error) {
        return (
            <>
                <div className='min-h-screen flex justify-center items-center'>
                    <p>There was an error generating your EPK. Please try again later.</p>
                </div>
            </>
        );
    }

    if (user === null) {
        return (
            <>
                <div className='min-h-screen flex justify-center items-center'>
                    <p>fetching user...</p>
                </div>
            </>
        );
    }

    console.debug({ user, claim });
    const userString = JSON.stringify({
        ...user,
        appleMusicHandle: '',
        phoneNumber: '',
    });
    // const urlParams = Object.entries(user).map(([key, val]) => {
    //     const value = encodeURIComponent(val);
    //     return `${key}=${value}`;
    // }).join('&');
    const imageUrls = themes.map((theme) => {
        const urlParams = new URLSearchParams({
            user: userString,
            theme,
        }).toString();
        return {
            theme,
            url: getURL(`/epk?${urlParams}`),
        };
    })
    return (
        <>
            <div
                className="min-h-screen flex flex-col md:flex-row justify-center"
            >
                <div className='flex flex-col items-center'>
                    <div className="h-12" />
                    <h1 className='text-4xl font-extrabold'>pick your style</h1>
                    <div className='flex flex-row'>
                        {imageUrls.map(({ url }, index) => (
                            <div
                                key={index}
                                onClick={() => { setSelectedTheme(index) }}
                                className={`m-6 rounded-xl ${(selectedTheme === index) && 'border-4 border-white'}`}
                            >
                                <Image
                                    src={url}
                                    alt="EPK"
                                    width={512}
                                    height={512}
                                    priority
                                    onError={(e) => { setError(true) }}
                                    className='rounded-lg'
                                />
                            </div>
                        ),
                        )}
                    </div>
                    {selectedTheme !== null && (
                        <Link
                            href={imageUrls[selectedTheme].url}
                            download="epk.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            download
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
