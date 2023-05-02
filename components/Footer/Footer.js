import React from 'react'

const Footer = () => {
    return (
        <footer class="p-4 bg-seabreeze-500 sm:p-6 dark:bg-gray-800">
            <div class="mx-auto max-w-screen-xl">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="https://flowbite.com" class="flex items-center">
                            <img src="https://ifgsd.com/wp-content/uploads/2017/09/IFGLogo2016_Full_Large_400px.png" class="mr-3 h-8" alt="FlowBite Logo" />
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-0 sm:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                            <ul class="text-gray-600 dark:text-gray-400 text-xs">
                                <li className="mb-4">
                                    <a href="https://flowbite.com" class="hover:underline">Our Story</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Careers</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Culture</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Mission</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Press & Media</h2>
                            <ul class="text-gray-600 dark:text-gray-400 text-xs">
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Blog</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Press Releases</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Advisor Success Stories</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Podcast</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Join Us</h2>
                            <ul class="text-gray-600 dark:text-gray-400 text-xs">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Independent Business Model</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="#" class="hover:underline">Visit Us</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Awards & Recognition</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-600 dark:text-gray-400 text-xs">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Broker Check</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Regulation Best Interest for Investors</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Disclosures</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com" class="hover:underline">Independent Financial Group, LLC</a>. All Rights Reserved. Independent Financial Group, LLC is a member of FINRA / SIPC.
                    </span>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.linkedin.com/company/ifgsd" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5 fill-sunburst-500" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer