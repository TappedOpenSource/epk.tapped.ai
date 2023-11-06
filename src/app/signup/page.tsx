import Link from "next/link";

export default function SignUp() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <p className="text-center">
                    you must be a subsriber to the label to create an EPK. 
                </p> 
                <p>
                    apply to join our record label
                </p>
                <div className="h-4" />
                <Link
                    href="https://tapped.ai"
                    className='bg-blue-700 text-white font-extrabold px-4 py-2 rounded-full'
                >
                    sign up
                </Link>
            </div>
        </>
    );
}