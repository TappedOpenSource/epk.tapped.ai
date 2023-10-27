'use client';

import { UserModel } from '@/types/user_model';
import { getURL } from '@/utils/url';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Results() {

    const [user, setUser] = useState<UserModel | null>(null);
    useEffect(() => {
        console.log('get logged in user data')
    }, []);

    const imageUrl = getURL('/epk');

    if (user === null) {
        return (
            <>
                <div className='min-h-screen flex justify-center items-center'>
                    <p>loading...</p>
                </div>
            </>
        );
    }

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center"
        >
            <Image 
                src={imageUrl}
                alt="EPK"
                width={1024}
                height={1024}
                priority
            />
        </div>
    );
}
