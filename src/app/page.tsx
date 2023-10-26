import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1
        className='text-4xl font-extrabold text-center'
      >
        EPK Generator
      </h1>
      <div className="h-8" />
      <Link
        href="/results"
        className='bg-black text-white font-extrabold rounded-full px-4 py-2'
      >
        results
      </Link>
    </main>
  );
}
