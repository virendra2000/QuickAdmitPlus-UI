import img2 from '../assets/illustrate2.svg'
import img3 from '../assets/illustrate3.svg'
import img4 from '../assets/illustrate4.svg'
import Navbar from './Navbar'
import Footer from './Footer'
const About = () => {
    return (
        <>
            <Navbar/>
            <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
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
            </div>
            <Footer/>
        </>
    )
}
export default About