
export default function NoPage() {
    return (
    <>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            /> 
            <html class="h-full"></html>
            <body class="h-full"></body>

            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Oops, the page you are trying to reach does not exist.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="main"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Go back home
                </a>
                <a href="contact" className="text-sm font-semibold text-gray-900">
                    Contact support <span aria-hidden="true">&rarr;</span>
                </a>
                </div>
            </div>
            </main>
        </div>
    </>
    )
}