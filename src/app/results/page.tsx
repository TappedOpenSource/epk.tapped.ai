import Image from 'next/image';


export default function Results() {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center"
        >
            <Image 
                src={`/epk`}
                alt="EPK"
                width={256}
                height={256}
            />
        </div>
    );
}
