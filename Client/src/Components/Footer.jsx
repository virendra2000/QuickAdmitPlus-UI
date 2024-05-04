const Footer = () => {
    return (
        <>
           <footer className="h-auto w-full px-10 py-10 bg-violet-900 flex flex-col items-center justify-center">
                <div className="footer1 flex flex-col-reverse md:flex-row w-full items-center justify-center">
                    <div className="footerlinks flex flex-col md:flex-row gap-7 w-full md:w-[50%]">
                        <div className="link1 flex flex-col gap-4 w-full">
                            <a href="/" className="text-xl text-white font-bold">Home</a>
                            <a href="/About" className="text-xl text-white font-bold">About Us</a>
                            <a href="/TermsandCondition" className="text-xl text-white font-bold">Terms & Condition</a>
                            <a href="/PrivacyPolicy" className="text-xl text-white font-bold">Privacy Policy</a>
                        </div>
                        <div className="link1 flex flex-col gap-4 w-full">
                            <a href="/" className="text-xl text-white font-bold">For Doctors</a>
                            <a href="/" className="text-xl text-white font-bold">For Hospitals</a>
                            <a href="/PatientLogin" className="text-xl text-white font-bold">For Patient</a>
                        </div>
                    </div>
                    <div className="contactform flex flex-col gap-2 p-5 w-full md:w-[50%]" id="contact">
                        <h2 className="text-3xl font-bold text-white text-center">Contact Us</h2>
                        <form className="p-5 flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="text" name="Fname" placeholder="First Name" className="w-full px-4 py-2 outline-none text-black placeholder-violet-600 font-bold text-lg rounded-md"/>
                                <input type="text" name="Lname" placeholder="Last Name" className="w-full px-4 py-2 text-black outline-none placeholder-violet-600 font-bold text-lg rounded-md"/>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 text-black outline-none placeholder-violet-600 font-bold text-lg rounded-md"/>
                                <input type="text" name="mobileno" placeholder="Mobile Number" className="w-full px-4 py-2 text-black outline-none placeholder-violet-600 font-bold text-lg rounded-md"/>
                            </div>
                            <div className="flex flex-col md:flex-row w-full">
                                <textarea name="mobileno" placeholder="Mobile Number" className="w-full px-4 py-2 text-black outline-none placeholder-violet-600 font-bold text-lg rounded-md"/>
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <button type="submit" className="w-full md:w-[50%] text-center py-3 bg-white font-bold text-md text-violet-600 rounded-md">CONNECT WITH US</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr/>
                <div className="p-5 flex flex-col md:flex-row items-center justify-between w-full">
                    <a href="/" className="flex flex-row items-center">
                        <img src="/logo.png" width={60}/>
                        <h2 className="text-white text-2xl font-bold">QuickAdmit <span className="text-green-400">Plus</span></h2>
                    </a>
                    <h2 className="text-xl font-bold text-white">Copyright © 2024 QuickAdmit Plus</h2>
                </div>
           </footer>
        </>
    )
}
export default Footer