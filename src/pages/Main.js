import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main() {
    return(
    <>
    <Header />
    <div className='bg-gray-200'>
      <div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className=""
        />
      </div>
      <h2 className='font-bold text-center text-5xl py-5'>Ready For Version 2?</h2>
      <div className='grid lg:grid-cols-2 items-center lg:gap-2 lg:pt-0 lg:pb-10 lg:px-6 sm:grid-cols-1 sm:gap-1 sm:px-0 sm:pb-0 '>
        <div>
          <img
            src=''
            alt='left'
            className=''
          />
        </div>
        <div>
          <h3 className='text-4xl text-center font-bold'>Better Navigation</h3>
          <p className='text-center px-40'>Navigating through your profile is now simpler our updated page information</p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 items-center lg:gap-2 lg:pt-0 lg:pb-10 lg:px-6 sm:grid-cols-1 sm:gap-1 sm:px-0 sm:pb-0 '>
        <div>
          <h3 className='text-4xl text-center font-bold'>Updated Look</h3>
          <p className='text-center px-40'>An updated webpage style enhances user experience and gives us a professional look</p>
        </div>
        <div>
          <img
            src=''
            alt='right'
            className=''
          />
        </div>
      </div>
      <div className='grid lg:grid-cols-2 items-center lg:gap-2 lg:pt-0 lg:pb-10 lg:px-6 sm:grid-cols-1 sm:gap-1 sm:px-0 sm:pb-0 '>
        <div>
          <img
            src=''
            alt='left'
            className=''
          />
        </div>
        <div>
          <h3 className='text-4xl text-center font-bold'>As Simple As Ever</h3>
          <p className='text-center px-40'>Though you may see some changes to the website, our goal of being simple to use stays strong</p>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
    )
}
