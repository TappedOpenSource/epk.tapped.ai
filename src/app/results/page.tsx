'use client';

import { UserModel } from '@/types/user_model';
import { getCurrentUser } from '@/utils/database';
import { getURL } from '@/utils/url';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Results() {
    const [user, setUser] = useState<UserModel | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
        }

        fetchUser();
    }, []);

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
