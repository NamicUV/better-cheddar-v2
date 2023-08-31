import Header from '../components/Header'
import Footer from '../components/Footer'
import logo2 from '../images/logo2.png'
import { ShieldExclamationIcon } from '@heroicons/react/24/outline'

const links = [
    { name: 'Contact Us', href: 'contact' },
    { name: 'Register', href: 'registration' },
]
const stats = [
    { name: 'Customer Support', value: '24 / 7' },
    { name: 'No Payment Required', value: '$0' },
    { name: 'Registration Difficulty', value: 'Easy' },
    { name: 'Accessibility', value: 'Anywhere' },
]

export default function About() {
    return(
    <>
    <Header />

        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
        >
            <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            />
        </div>
        <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
        >
            <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Here's A Little About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                Our goal has always been to help people make better financial decision based on how much they make. With our Version 2 of Better Cheddar we plan to continue to help those that want to continue making better spending habits.
            </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
                ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
        {/*This Section is for after the first part*/}
        <div className='bg-gray-200 grid lg:grid-cols-2 items-center lg:gap-2 lg:pt-0 lg:pb-10 lg:px-6 sm:grid-cols-1 sm:gap-1 sm:px-0 sm:pb-0'>
          <div className='mx-auto text-lg sm:px-28'>
              <h3 className='font-bold text-black text-4xl underline underline-offset-2 text-center sm:pt-10 lg:pt-0'>New Version</h3>
              <p className='pt-3 text-gray-800 text-xl'>We're Back!! Welcome to the second version of Better Cheddar. Expect everything from the first version except better and easier to use. </p>
          </div>
          <div>
              <img
                src={logo2}
                alt=""
                className='sm:pt-10'
              />
          </div>
        </div>
        {/*This is last section*/}
        <div className='bg-gray-200 lg:pt-5 sm:pt-5 pb-20'>
          <div className='flex justify-center'>
          <ShieldExclamationIcon className='block h-14 w-14'/>
          </div>
          <div className='flex justify-center text-3xl text-center'>
            <p className='font-bold'>All About Upgrades</p>
          </div>
          <div className='flex justify-center text-xl lg:px-96 sm:px-28 text-center'>
            <p className='lg:px-26 sm:px-0'>Better Cheddar is changing for the better. We strive to upgrade our website to meet both aesthetic and function demands. </p>
          </div>
        </div>
        <Footer />
    </>
    )
}