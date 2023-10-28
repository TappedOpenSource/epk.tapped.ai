'use client';

import { useAuth } from '@/context/AuthProvider';
import { getURL } from '@/utils/url';
import Image from 'next/image';

export default function Results() {
    const { user } = useAuth();

    if (user === null) {
        return (
            <>
                <div className='min-h-screen flex justify-center items-center'>
                    <p>fetching user...</p>
                </div>
            </>
        );
    }

    console.log({ user });
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
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center"
        >
            <Image
                src={getURL(`/epk?${urlParams}`)}
                alt="EPK"
                width={512}
                height={512}
                priority
            />
        </div>
    );
}
