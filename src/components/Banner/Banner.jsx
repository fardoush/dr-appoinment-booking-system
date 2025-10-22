import React from 'react';

const Banner = () => {
    return (
        <div className='w-full mx-auto px-20 min-h-[calc(100vh-77px)] py-5  justify-center items-center flex shadow-sm'>
            <div className="border-3 border-blue-50 py-20 px-28 flex justify-center items-center flex-col rounded-3xl bg-gradient-to-b from-white to-[#d6e2f4]
">
            <h1 className=" w-4xl text-5xl text-center pb-5">Dependable Care, Backed by Trusted Professionals.</h1>
            <p className="w-4xl text-center text-base ">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className="flex items-center justify-center gap-3 p-6 ">
                      <input id="" type="text" name="" placeholder="Search any doctor..." class="block w-96 bg-white border-1 border-blue-50 py-2 px-4 rounded-full text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                      <a className="btn bg-blue-500 hover:bg-blue-400 rounded-full">Search Now</a>

            </div>
            <div className="w-96 flex items-center justify-center gap-4">
                <img src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" alt="" className="rounded-2xl" />
                <img src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" alt="" className="rounded-2xl" />
            </div>
            </div>
            
        </div>
    );
};

export default Banner;