import React from "react"
export default function Footer() {
    return (
        <footer className="bg-gray-100 py-12 text-center w-[1440]h-[488]">
            <div className="flex justify-around">
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-left">Bandage</h3>
                </div>
                <div className="flex justify-between mx-2 text-blue-500 ">
                    <a href="#" className="mx-2 text-blue-500 "><img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" width="24" height="24" /></a>
                    <a href="#" className="mx-2 text-blue-500 "><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" width="24" height="24" /></a>
                    <a href="#" className="mx-2 text-blue-500 "><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" width="24" height="24" /></a>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Company Info */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Company Info</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">About Us</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Carrier</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">We are hiring</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
                    </ul>
                </div>
                {/* Legal */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Legal</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">About Us</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Carrier</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">We are hiring</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
                    </ul>
                </div>
                {/* Features */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Features</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Business Marketing</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">User Analytic</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Live Chat</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Unlimited Support</a></li>
                    </ul>
                </div>
                {/* Resources */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Resources</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">IOS & Android</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Watch a Demo</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Customers</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">API</a></li>
                    </ul>
                </div>
                {/* Get in Touch */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
                    <form className="flex justify-center items-center">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-2 border border-gray-300 rounded-l-lg w-60 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>


            <div className="mt-8 text-gray-600 text-sm text-left py-4">
                <p>Made With Love By Finland All Right Reserved</p>
            </div>
        </footer>
    );
}
