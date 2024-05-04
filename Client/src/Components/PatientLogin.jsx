import Navbar from './Navbar'
import Footer from './Footer'
import image1 from '../assets/illustrate6.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const PatientLogin = () => {
    const history = useNavigate();
    const [patientData, setPatientData] = useState({
        email:'',
        password:'',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientData({...patientData,[name]: value});
      };
      const handleSubmit = async (e) => {
        let dataToSend;
        e.preventDefault();
        dataToSend = patientData;
        try {
            const res = await axios.post("http://localhost:8000/patientlogin",dataToSend);
            if(res.status==200) {
                toast.success('Login Successfully & Account Verified');
                setTimeout(() => {
                    history("/PatientDashboard");
                }, 2000);
            }
            else if(res.status == 201) {
                toast.success('Login Successfully');
                setTimeout(() => {
                    history(`/PatientOTP?email=${dataToSend.email}`);
                    console.log("Email Send to OTP Page")
                }, 2000);
            }
            else {
                toast.error('Login Failed');
            }
        } catch (error) {
            console.log(error);
        }
      };
    return (
        <>
            <Navbar/>
                <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                    <ToastContainer autoClose={1000} />
                    <div className='main-content p-5 flex flex-col md:flex-row h-auto items-center justify-center gap-4 bg-violet-600 rounded-lg'>
                        <div className='login-form flex flex-col items-center justify-center w-full md:w-[35%] bg-white rounded-lg'>
                            <h2 className='p-5 text-3xl font-bold text-violet-600'>PATIENT LOGIN</h2>
                            <form className='p-5 flex flex-col gap-2 items-center justify-center w-full' onSubmit={handleSubmit}>
                                <div className='input1 w-full'>
                                    <input type="email" name="email" placeholder='Email ID' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.email} onChange={handleInputChange}/>
                                </div>
                                <div className='input2 w-full'>
                                    <input type="password" name="password" placeholder='Password' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.password} onChange={handleInputChange}/>
                                </div>
                                <div className='input3 w-full'>
                                    <a href="/">
                                        <span className='font-bold text-lg text-violet-500'>Forgot Password ?</span>
                                    </a>
                                </div>
                                <div className='input4 w-full flex flex-col items-center'>
                                    <button type="submit" className='bg-violet-600 w-full px-4 py-3 text-white font-bold rounded-md'>Login</button>
                                </div>
                                <div className='input3 w-full flex flex-col items-center'>
                                    <a href="/PatientRegister" className='font-bold text-lg text-center'>Don&apos;t have an account ? <span className='font-bold text-lg text-violet-500'>Register</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div className='image w-[50%]'>
                            <img src={image1} className='w-[500px]'/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
export default PatientLogin