import Link from 'next/link'  
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center md:items-start justify-center px-4 md:p-24">
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
          create an electronic press kit and get booked for live performances just like the pros
        </h2>
        <div className='h-8' />
        <Link
          href="/login?returnUrl=/epk_form"
          className='bg-blue-700 text-white font-extrabold px-4 py-2 rounded-full'>
            get started
        </Link>
      </main>
      <section>
        <div className='relative flex flex-col justify-center items-center p-24'>
          <Image
            src="/images/diagram.png"
            alt="diagram of epk generator"
            fill={true}
            // layout='responsive'
            objectFit='contain'
          />
        </div>
      </section>
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
