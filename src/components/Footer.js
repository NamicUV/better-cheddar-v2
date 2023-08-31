import logo from '../images/logo.PNG'

const navigation= [
    {name: 'FAQ', href: 'contact'},
    {name: 'Register', href: 'registration'},
    {name: 'Contact Us', href: 'contact'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer(){
    return(
<div className="mx-auto py-10 sm:px-6 bg-gray-800">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start border-b border-gray-200">
                <div className="flex flex-shrink-0 items-center text-white text-3xl">
                  <img
                    className="h-12 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                  <p>Better Cheddar</p>
                </div>
                {/*Here navigation.map will call on the const navigation for information */}
                <div className="absolute inset-y-0 right-0 flex lg:pl-96 items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex space-x-12 sm:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='text-gray-200 text-sm'>
                <p>@Better Cheddar Inc. All Rights Reserved</p>
            </div>
          </div>
    )  
}