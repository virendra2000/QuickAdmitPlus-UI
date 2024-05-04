import { useState } from "react";
import useDarkMode from "./useDarkMode";
const PatientSidebar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className={`h-full px-2 py-5 bg-white dark:bg-slate-700 shadow-lg  shadow-gray-500 dark:shadow-none ${menuOpen ? 'w-[35vh] absolute md:relative' : 'w-[10vh]'}`}>
                <div className="p-2 flex flex-row items-center">
                    <img 
                        src="menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        onClick={toggleMenu}
                        className="cursor-pointer dark:invert"
                    />
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientDashboard" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Dashboard</span>
                    </a>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientDashboard" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Appointments</span>
                    </a>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientDashboard" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12zM13 4l5 5h-5V4zM7 8h3v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Medical Report</span>
                    </a>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientDashboard" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M8.434 20.566c1.335 0 2.591-.52 3.535-1.464l7.134-7.133a5.008 5.008 0 0 0-.001-7.072 4.969 4.969 0 0 0-3.536-1.463c-1.335 0-2.59.52-3.534 1.464l-7.134 7.133a5.01 5.01 0 0 0-.001 7.072 4.971 4.971 0 0 0 3.537 1.463zm5.011-14.254a2.979 2.979 0 0 1 2.12-.878c.802 0 1.556.312 2.122.878a3.004 3.004 0 0 1 .001 4.243l-2.893 2.892-4.242-4.244 2.892-2.891z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Prescriptions</span>
                    </a>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientDashboard" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.516 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Chats</span>
                    </a>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientDashboard" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v2h20V6c0-1.103-.897-2-2-2zM2 18c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6H2v6zm3-3h6v2H5v-2z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Billing</span>
                    </a>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientDashboard" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z"/><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Feedback</span>
                    </a>
                </div>
                <div className="p-2 w-full flex flex-row items-center overflow-hidden">
                    {colorTheme === "light" ? (
                        <svg
                        onClick={() => setTheme("light")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-violet-600 dark:text-slate-500 block cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                        ) : (
                        <svg
                            onClick={() => setTheme("dark")}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-violet-600 dark:text-slate-500 block cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    )}
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Theme</span>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientProfile" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Profile</span>
                    </a>
                </div>
                <div className="p-2 w-full overflow-hidden">
                    <a href="/PatientLogOut" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-violet-600 dark:text-slate-500 cursor-pointer">
                            <path fill="currentColor" d="M18 2H6a1 1 0 0 0-1 1v9l5-4v3h6v2h-6v3l-5-4v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                        </svg>
                        <span className={`px-4 text-md font-bold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-600 ${menuOpen ? 'block' : 'hidden'}`}>Log Out</span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default PatientSidebar;