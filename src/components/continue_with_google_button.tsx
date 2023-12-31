import {
  loginWithGoogle,
  type LoginResult
} from '@/utils/auth';

export default function ContinueWithGoogleButton({ onClick }: {
  onClick: (loginResult: LoginResult) => void,
}) {
  const handleLogin = async () => {
    // e.preventDefault();
    try {
      const response = await loginWithGoogle();
      onClick(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogin}
      type="button"
      className="flex flex-row justify-center text-black bg-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 text-center rounded-full text-sm px-5 py-2.5 inline-flex items-center mr-2 mb-2"
    >
      <svg
        className="ml-1 mr-2 h-4 w-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        ></path>
      </svg>
      <p className='font-bold'>
        continue with google
      </p>
    </button>
  );
};
