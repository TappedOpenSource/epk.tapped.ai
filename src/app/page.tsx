import Link from 'next/link'  
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-start justify-center p-24">
        {/* Nav Bar */}
        <h1
          className='uppercase text-3xl md:text-9xl font-black w-3/4'
        >
          your {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-300">
            electronic press kit
          </span>
        </h1>
        <h2 className='text-xl text-thin'>
          create an electronic press kit and get booked for live performances just like the pros
        </h2>
        <div className='h-8' />
        <Link
          href="/login?returnUrl=/results"
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
