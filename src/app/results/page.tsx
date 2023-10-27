import { getURL } from '@/utils/url';
import Image from 'next/image';

export default function Results() {
    const imageUrl = getURL('/epk');
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
