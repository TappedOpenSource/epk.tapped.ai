import { logout } from "@/utils/auth";

export default function Loading() {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <p>loading...</p>
                <div className="h-4" />
                <button
                    onClick={() => logout()}
                    className='text-gray-500 px-4 py-2'
                >
                    logout
                </button>
            </div>
        </>
    );
}