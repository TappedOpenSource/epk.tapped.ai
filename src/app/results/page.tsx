'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { getURL } from '@/utils/url';
import Image from 'next/image';

export default function Results() {
    const { user, claim } = useAuth();
    const [error, setError] = useState<boolean>(false);

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

    console.log({ user, claim });
    const userString = JSON.stringify({
        ...user,
        appleMusicHandle: '',
        phoneNumber: '',
    });
    // const urlParams = Object.entries(user).map(([key, val]) => {
    //     const value = encodeURIComponent(val);
    //     return `${key}=${value}`;
    // }).join('&');
    const urlParams = new URLSearchParams({
        user: userString,
        theme: 'tapped',
    }).toString();
    const url = getURL(`/epk?${urlParams}`);
    console.log({ url });
    return (
        <>
            <div
                className="min-h-screen flex flex-col md:flex-row justify-center"
            >
                <div className='flex flex-col items-center'>
                    <div className="h-12" />
                    <h1 className='text-4xl font-extrabold'>pick your style</h1>
                    <div className='flex flex-row'>
                        <div className='p-6'>
                            <Image
                                src={url}
                                alt="EPK"
                                width={512}
                                height={512}
                                priority
                                onError={(e) => { setError(true) }}
                                className='rounded-xl'
                            />
                        </div>
                        <div className='p-6'>
                            <Image
                                src={url}
                                alt="EPK"
                                width={512}
                                height={512}
                                priority
                                onError={(e) => { setError(true) }}
                                className='rounded-xl'
                            />
                        </div>
                        <div className='p-6'>
                            <Image
                                src={url}
                                alt="EPK"
                                width={512}
                                height={512}
                                priority
                                onError={(e) => { setError(true) }}
                                className='rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
