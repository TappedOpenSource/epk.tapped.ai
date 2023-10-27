import Link from 'next/link'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Nav Bar */}
      <h1
        className='text-4xl font-extrabold text-center'
      >
        present yourself like a professional
      </h1>
      <h2>
        build an electronic press kit and get booked for live performances
      </h2>
      <div className='h-8' />
      <Link 
        href="https://tapped.ai"
        className='bg-blue-500 text-white font-extrabold px-4 py-2 rounded-full'>
        get started
      </Link>
    </main>
    <section>
      <div className='flex flex-col md:flex-row justify-around p-24'>
        <div>
          testimonial from Niral
        </div>
        <div>
          image of Nirals EPK
        </div>
      </div>
    </section>
    </>
  );
}
