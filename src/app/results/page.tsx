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
    const urlParams = new URLSearchParams({
        ...user,
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
