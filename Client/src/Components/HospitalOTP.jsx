import Navbar from "./Navbar";
import illustrate15 from "../assets/illustrate15.svg";
import Footer from "./Footer";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom';
const HospitalOTP = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailadd = queryParams.get('email');
    console.log(emailadd);
    const history = useNavigate();
    axios.defaults.withCredentials = true;
    const [hospitalData, setHospitalData] = useState({
        email: emailadd,
        code:'',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHospitalData({...hospitalData,[name]: value});
    };
    const handleSubmit = async (e) => {
        let dataToSend;
        e.preventDefault();
        dataToSend = hospitalData;
        try {
            const res = await axios.post("http://localhost:8000/hospitalotp",dataToSend) ;
            if(res.status==201) {
                toast.success('Account Verified Successfully');
                setTimeout(() => {
                    history("/HospitalDashboard");
                }, 2000);
            }
            else {
                toast.error('Verification Failed');
            }
        } catch (error) {
            console.log(error);
        }
      };
    return (
        <>
            <Navbar />
            <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                <ToastContainer autoClose={1000} />
                <div className="head-banner flex flex-col md:flex-row p-5 w-full h-auto bg-violet-800 rounded-2xl items-center justify-center">
                    <div className="max-w-md mx-auto mt-5 mb-5 p-4 bg-gray-100 rounded-md">
                        <h2 className="mb-3 text-center text-3xl font-extrabold text-violet-600">
                            Verify Your Account
                        </h2>
                        <p className="mb-4">
                            An OTP has been sent to your email address. Please check your email and enter the OTP below.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input className="p-3 mb-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" type="text" name="code" placeholder="OTP" value={hospitalData.code} onChange={handleInputChange} required/>
              
                            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Verify Account</button>
                        </form>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col items-center">
                        <img src={illustrate15} className="w-[500px]" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default HospitalOTP