'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { getURL } from '@/utils/url';
import Image from 'next/image';
import { EPKTheme } from '@/types/themes';
import Link from 'next/link';

// @ts-ignore
import PDFDocument from 'pdfkit/js/pdfkit.standalone'

import SVGtoPDF from 'svg-to-pdfkit'
import blobStream from 'blob-stream'
import { generateEpkSvg } from '@/utils/image_generation';
import { useRouter } from 'next/navigation';

const themes: EPKTheme[] = [
    'tapped',
    'tapped',
    'tapped',
];

const width = 900;
const height = 1200;

export default function Results() {
    const router = useRouter();
    const { user, claim } = useAuth();
    const [error, setError] = useState<boolean>(false);
    const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
    const [objectUrl, setObjectURL] = useState<string | null>(null);

    const pdfHandler = async (themeIndex: number) => {
        if (user === null) {
            return;
        }

        let tmpObjectUrl = '';
        const result = await generateEpkSvg({
            ...user,
            spotifyHandle: '',
            phoneNumber: '',
            height,
            width,
        });

        const doc = new PDFDocument({
            compress: false,
            size: [width, height],
        })
        SVGtoPDF(doc, result, 0, 0, {
            width,
            height,
            preserveAspectRatio: `xMidYMid meet`,
        })
        const stream = doc.pipe(blobStream())
        stream.on('finish', () => {
            const blob = stream.toBlob('application/pdf')
            tmpObjectUrl = URL.createObjectURL(blob)
            setObjectURL(tmpObjectUrl)
            console.log({ tmpObjectUrl })
            router.push(tmpObjectUrl);
        })
        doc.end()
    }

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
                        <>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <Link
                                    href={imageUrls[selectedTheme].url}
                                    download="epk.png"
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-2xl font-bold px-12 py-2 rounded-xl bg-blue-300 text-black hover:scale-105 transform transition-all duration-200 ease-in-out'
                                >
                                    get as png
                                </Link>
                                <button
                                    onClick={() => pdfHandler(selectedTheme)}
                                    className='text-2xl font-bold px-12 py-2 rounded-xl bg-blue-300 text-black hover:scale-105 transform transition-all duration-200 ease-in-out'
                                >
                                    get as pdf
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
