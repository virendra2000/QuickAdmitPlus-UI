import Navbar from "./Navbar"
import img1 from '../assets/illustrate1.svg'
import img2 from '../assets/illustrate2.svg'
import img3 from '../assets/illustrate3.svg'
import img4 from '../assets/illustrate4.svg'
import img5 from '../assets/illustrate5.svg'
import Footer from './Footer'
const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                <div className="head-banner flex flex-col md:flex-row p-5 w-full h-auto bg-violet-800 rounded-2xl">
                    <div className="w-full md:w-[50%] flex flex-col items-start justify-center">
                        <h1 className="px-3 text-3xl font-bold text-white">Empowering Healthcare Solutions</h1>
                        <p className="px-3 py-5 text-lg text-justify font-bold text-white">At QuickAdmit Plus, we are revolutionizing healthcare with innovative solutions. Explore our services and join us in shaping the future of healthcare today</p>

                        <button className="mx-3 px-10 py-3 bg-white font-bold text-md text-violet-600 rounded-md">Join Us</button>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col items-center">
                        <img src={img1} className="w-[500px]"/>
                    </div>
                </div>
                <div className="head-footer px-5 py-10 flex flex-col items-center justify-center w-full" id="about">
                    <h3 className="text-lg font-bold text-green-500">EXPLORING THE HORIZON OF HEALTHCARE FUTURE</h3>
                    <h2 className="py-5 text-4xl font-bold text-slate-800 dark:text-white">What do you get with a health account?</h2>

                    <div className="head-footer-container p-5 flex flex-col md:flex-row gap-4 items-center justify-center w-full">
                        <div className="card p-5 h-auto bg-blue-400 w-full md:w-[30%] rounded-xl">
                            <h2 className="text-4xl font-bold text-black">A smart <br/>health locker</h2>
                            <p className="text-xl py-5 font-serif">to organise all your medical records</p>
                            <button className="px-10 py-4 bg-white font-bold text-md text-violet-600 rounded-md">UPLOAD A RECORD</button>
                            <img src={img2} className="w-[300px]"/>
                        </div>
                        <div className="card p-5 h-auto bg-green-300 w-full md:w-[30%] rounded-xl">
                            <h2 className="text-4xl font-bold text-black">Automated<br/>health profile</h2>
                            <p className="text-xl py-5 font-serif">so you make better health decisions</p>
                            <button className="px-10 py-4 bg-white font-bold text-md text-violet-600 rounded-md">CONNECT WITH DOCTORS</button>
                            <img src={img3} className="w-[300px]"/>
                        </div>
                    </div>
                </div>
                <div className="head-banner flex flex-col md:flex-row p-5 w-full h-auto bg-slate-800 dark:bg-slate-100 rounded-2xl">
                    <div className="w-full md:w-[50%] flex flex-col items-start justify-center">
                        <h3 className="px-3 text-2xl font-bold text-green-500 dark:text-violet-600">JOIN THE HEALTHCARE REVOLUTION IN INDIA</h3>
                        <h2 className="px-3 py-3 text-4xl font-bold text-white dark:text-black">Forging Ahead in India Healthcare Transformation</h2>
                        <p className="px-3 py-5 text-xl text-justify font-bold text-slate-300 dark:text-slate-600">At QuickAdmit Plus, we are revolutionizing healthcare with innovative solutions. Explore our services and join us in shaping the future of healthcare today</p>

                        <button className="mx-3 px-10 py-3 bg-white dark:bg-slate-800 font-bold text-md text-violet-600 dark:text-white rounded-md">CREATE QUICKADMIT PLUS ACCOUNT</button>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col items-center">
                        <img src={img4} className="w-[500px]"/>
                    </div>
                </div>

                <div className="head-footer px-5 py-10 flex flex-col items-center justify-center w-full">
                    <h3 className="text-lg font-bold text-green-500">YOUR SMART HEALTH LOCKER</h3>
                    <h2 className="py-5 text-4xl font-bold text-slate-800 dark:text-white">Never lose a medical record again</h2>
                    <p className="py-2 text-xl text-slate-100">Store, search and organise all medical records as per your convenience</p>
                    <div className="head-footer-container p-5 flex flex-col md:flex-row gap-4 items-center justify-center w-full">
                        <div className="card p-7 h-auto w-full md:w-[50%] flex flex-col gap-4 rounded-xl">
                            <div className="flex flex-row gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-600 dark:text-white" width="120" height="120" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"/></svg>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold text-violet-600 dark:text-white">Store</h2>
                                    <p className="py-2 text-xl text-justify text-black dark:text-white">QuickAdmit Plus integrated approach allows you to fetch medical records from hospitals, labs, doctors and even your email using facial recognition technique !</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-600 dark:text-white" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold text-violet-600 dark:text-white">Search</h2>
                                    <p className="py-2 text-xl text-justify text-black dark:text-white">Search records using vitals name, diseases & more</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-600 dark:text-white" width="70" height="70" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zM4 18V8h16l.001 10H4z"/><path fill="currentColor" d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"/></svg>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold text-violet-600 dark:text-white">Organise</h2>
                                    <p className="py-2 text-xl text-justify text-black dark:text-white">Auto organise your medical records into Labs, prescription, Scans & more</p>
                                </div>
                            </div>
                        </div>
                        <div className="card p-5 h-auto w-full md:w-[50%]">
                            <img src={img5} className="w-[500px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Home