import { useEffect,useCallback } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from '../assets/illustrate8.svg'
const HospitalLogOut = () => {
    axios.defaults.withCredentials = true;
    const history = useNavigate();
    const callLogoutPage = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8000/hospitallogout");
            if (res.status == 200) {
                setTimeout(() => {
                    history('/HospitalLogin');
                }, 5000);
            }
            else {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }
        catch(err) {
            console.log(err);
            history('/HospitalDashboard');
        }
    },[history])
    useEffect(() => {
        callLogoutPage();
    },[callLogoutPage]);
    return (
        <>
            <Navbar/>
            <div className="px-10 py-8 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                <div className="h-auto flex flex-col items-center justify-center p-5 rounded-xl">
                    <img src={img1} alt="logoutimg" className="w-[500px]"/>
                    <h1 className="text-2xl font-bold text-violet-600 dark:text-white">Hospital Logout Successfully !! Thankyou !! Visit Again</h1>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default HospitalLogOut