import React from 'react';

const Banner = () => {


    return (
        <div className=' hero-banner section_px_10px 2xl:px-28 xl:px-28 lg:px-14  w-full  min-h-[calc(100vh-77px)] py-5  justify-center items-center flex shadow-sm'>
            <div className=" hero-banner-inner 2xl:w-7xl xl:w-7xl lg:w-4xl md:w-full border-3 border-blue-50 py-20 2xl:px-28 xl:px-28 lg:px-16 md:px-16 flex justify-center items-center flex-col rounded-3xl bg-gradient-to-b from-white to-[#d6e2f4]">
            <h1 className="2xl:w-4xl xl:w-4xl lg:w-4xl  md:w-96 sm:w-96 xs:w-96 w-full 2xl:text-5xl xl:text-5xl lg:text-5xl sm:text-3xl  xs:text-3xl text-2xl text-center pb-5">Dependable Care, Backed <span>by Trusted Professionals</span>.</h1>
            <p className="2xl:w-4xl  text-center text-base ">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className=" input-inner flex items-center justify-center gap-3 p-6 ">
                      <input id="" type="text" name="" placeholder="Search any doctor..." class="block w-96 bg-white border-1 border-blue-50 py-2 px-4 rounded-full text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                      <a className="btn bg-blue-500 hover:bg-blue-400 rounded-full">Search Now</a>

            </div>
            <div className="banner-img-inner w-96 flex items-center justify-center gap-4">
                <img src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" alt="" className="rounded-2xl" />
                <img src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" alt="" className="rounded-2xl" />
            </div>
            </div>
            
        </div>
    );
};

export default Banner;