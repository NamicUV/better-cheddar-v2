
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import PrivacyPolicy from '../modals/privacyPolicy'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <Header />
    <div>
    {/*This section covers the FAQ section of the page*/} 
    <section className="lg:pt-32 sm:pt-16 bg-white overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8">
        <h2 className="font-heading sm:text-5xl lg:text-6xl tracking-tighter">Frequently Asked Questions:</h2>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="flex flex-wrap -m-1.5">
          <div className="w-full p-1.5 border-2 border-gray-900 p-4">
            <h4 className='text-xl font-bold'>Q. Do I need to register a new account even if I already had one for the old version?</h4>
            <p>A. Yes, unfortuanatley we were not able to transfer the database from the first version to this new one.</p>
          </div>
          <div className="w-full p-1.5 border-2 border-gray-900 p-4">
            <h4 className='text-xl font-bold'>Q. Will the new version work the same as the older version?</h4>
            <p>A. Yes and NO, it will in some ways function the same as the first version but we have changed the designs and updated some of the features from the previous version.</p>
          </div>
          <div className="w-full p-1.5 border-2 border-gray-900 p-4">
            <h4 className='text-xl font-bold'>Q. Filler</h4>
            <p>A. Filler</p>
          </div>
          <div className="w-full p-1.5 border-2 border-gray-900 p-4">
            <h4 className='text-xl font-bold'>Q. Filler </h4>
            <p>A. Filler</p>
          </div>
          <div className='invisible'>Empty</div>
        </div>
      </div>
    </div>
  </div>
</section>




    {/*This Section covers the contact us portion of the page*/}
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Our Team</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Type your information below and send us a message of what we can help you with.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <p as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch className="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our{' '}
              <button className="font-semibold text-indigo-600" onClick={() => {setOpen(true)}}>
                privacy&nbsp;policy
              </button>
            </Switch>
          </p>
        </div>
        {open && <PrivacyPolicy closeModal={setOpen}/>}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Message Us
          </button>
        </div>
      </form>
    </div>
    </div>
    <Footer />
    </>
  )
}