

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-slate-700 py-10 bg-gradient-to-r from-slate-50 to-sky-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-8 md:mb-0">
                <h2 className="text-2xl font-bold">Meditechy Africa</h2>
                <p className="mt-2 text-md">© 2024 Meditechy Africa. All rights reserved.</p>
            </div>
            <div className="mb-8 md:mb-0">
                <h2 className="text-2xl font-bold">Quick Links</h2>
                <ul className="mt-2 space-y-2">
                <li><a href="/" className="hover:underline text-lg">Home</a></li>
                <li><a href="/about" className="hover:underline text-lg">About Us</a></li>
                <li><a href="/services" className="hover:underline text-lg">Services</a></li>
                <li><a href="/contact" className="hover:underline text-lg">Contact</a></li>
                </ul>
            </div>
            <div className="mb-8 md:mb-0">
                <h2 className="text-2xl font-bold">Follow Us</h2>
                <ul className="mt-2 flex space-x-4">
                <li>
                    <a href="#" className="hover:underline">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c-5.524 0-10 4.477-10 10 0 4.991 3.656 9.12 8.437 9.878v-6.987h-2.54v-2.891h2.54v-2.151c0-2.512 1.493-3.89 3.776-3.89 1.096 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.773-1.63 1.562v1.821h2.773l-.443 2.891h-2.33v6.987c4.781-.757 8.437-4.886 8.437-9.878 0-5.523-4.476-10-10-10z" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.951.565-2.005.974-3.127 1.195-.897-.956-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.044.765.128 1.124-4.09-.205-7.719-2.165-10.149-5.144-.423.725-.666 1.561-.666 2.457 0 1.697.867 3.192 2.188 4.069-.805-.026-1.564-.248-2.228-.616v.062c0 2.372 1.688 4.348 3.93 4.793-.411.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.417-1.68 1.318-3.809 2.105-6.115 2.105-.397 0-.789-.023-1.176-.068 2.179 1.397 4.768 2.214 7.557 2.214 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.42-.014-.63.961-.695 1.8-1.562 2.46-2.549z" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.994 11.706c0-6.625-5.366-12-12-12-6.625 0-12 5.375-12 12 0 5.991 4.388 10.935 10.125 11.854v-8.367h-2.64v-3.487h2.64v-2.665c0-2.625 1.568-4.063 3.924-4.063 1.14 0 2.108.086 2.392.125v2.775h-1.641c-1.29 0-1.538.614-1.538 1.512v1.982h3.073l-.4 3.487h-2.673v8.367c5.738-.919 10.125-5.862 10.125-11.854z" />
                    </svg>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer
