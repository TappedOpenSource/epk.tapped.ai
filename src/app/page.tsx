import Link from 'next/link'
import Image from 'next/image';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="h-[95vh] flex flex-col items-center md:items-start justify-center px-4 md:px-24">
        {/* Nav Bar */}
        <h1
          className='uppercase text-center md:text-start text-4xl md:text-9xl font-black w-3/4'
        >
          your {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-300">
            electronic press kit
          </span>
        </h1>
        <h2 className='text-lg md:text-xl text-extrathin text-center md:text-start'>
          create an electronic press kit using just your{' '}
          <Link
            href="https://tapped.ai"
            className='underline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300'
          >
            Tapped
          </Link>
          {' '}profile
        </h2>
        <div className='h-8' />
        <Link
          href="/login?returnUrl=/epk_form"
          className='bg-blue-700 text-white font-extrabold px-4 py-2 rounded-full'>
          get started
        </Link>
      </main>
      <section>
        <div className='flex flex-col md:flex-row justify-around p-24'>
          <div>
            instagram testimonial from Niral
          </div>
          <div>
            image of Nirals EPK
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col md:flex-row justify-around p-24'>
          <div>
            image of ffeel&apos;s EPK
          </div>
          <div>
            instagram testimonial from ffeel
          </div>
        </div>
      </section>
    </>
  );
}
