import Navbar from './Navbar'
import Footer from './Footer'
import image1 from '../assets/illustrate7.svg'
import { useState } from 'react'
import { STATES } from '../Constants/index'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const PatientRegister = () => {
    const history = useNavigate();
    axios.defaults.withCredentials = true;
    const generateRandomCode = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };
    const generateRandomNumber = (length) => {
        return Math.floor(Math.random() * (10 ** length));
    }
    const generateUserID = () => {
        const userType = '201';
        const currentYear = new Date().getFullYear();
        const randomNumber = generateRandomNumber(6); // Generate a random 6-digit number
    
        return `${currentYear}${userType}${randomNumber}`;
    }
    const [patientData, setPatientData] = useState({
        patientid:generateUserID(),
        patientname: '',
        gender:'',
        mobileno:'',
        bloodgrp:'',
        city:'',
        district:'',
        states:'',
        email:'',
        password:'',
        code:generateRandomCode(),
        status:'Pending',
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
            const res = await axios.post("http://localhost:8000/patientregister",dataToSend);
            if(res.status==201) {
                toast.success('Registered Successfully');
                setTimeout(() => {
                    history("/PatientLogin");
                }, 2000);
            }
            else {
                toast.error('Registration Failed');
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
                            <h2 className='p-5 text-3xl font-bold text-violet-600'>PATIENT REGISTER</h2>
                            <form className='p-5 flex flex-col gap-2 items-center justify-center w-full' onSubmit={handleSubmit}>
                                <div className='input1 flex flex-col md:flex-row gap-2 w-full'>
                                    <input type="text" name="patientname" placeholder='Patient Name' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.patientname} onChange={handleInputChange}/>
                                </div>
                                <div className='input1 flex flex-col md:flex-row gap-2 w-full'>
                                    <input type="text" list="gender" name="gender" placeholder='Gender' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.gender} onChange={handleInputChange}/>
                                    <datalist id="gender">
                                        <option value="Male"/>
                                        <option value="Female"/>
                                    </datalist>

                                    <input type="text" name="mobileno" placeholder='Mobile Number' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' onChange={handleInputChange}/>
                                </div>
                                <div className='input1 flex flex-col md:flex-row gap-2 w-full'>
                                    <input type="text" list="bloodgrp" name="bloodgrp" placeholder='Blood Group' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.bloodgrp} onChange={handleInputChange}/>
                                    <datalist id="bloodgrp">
                                        <option value="O Positive"/>
                                        <option value="O Negative"/>
                                        <option value="A Positive"/>
                                        <option value="A Negative"/>
                                        <option value="B Positive"/>
                                        <option value="B Negative"/>
                                        <option value="AB Positive"/>
                                        <option value="AB Negative"/>
                                    </datalist>
                                    <input type="text" name="city" placeholder='City' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.city} onChange={handleInputChange}/>
                                </div>
                                <div className='input1 flex flex-col md:flex-row gap-2 w-full'>
                                    <input type="text" name="district" placeholder='District' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.district} onChange={handleInputChange}/>
                                    <input type="text" list="states" name="states" placeholder='State' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.states} onChange={handleInputChange}/>
                                    {STATES.map((state) => (
                                        <datalist key={state.key} id="states">
                                            <option value={state.name}/>
                                        </datalist>
                                    ))}
                                </div>
                                <div className='input1 w-full'>
                                    <input type="email" name="email" placeholder='Email ID' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.email} onChange={handleInputChange} />
                                </div>
                                <div className='input2 w-full'>
                                    <input type="password" name="password" placeholder='Create Password' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold' value={patientData.password} onChange={handleInputChange}/>
                                </div>
                                <div className='input3 w-full'>
                                    <a href="/">
                                        <span className='font-bold text-lg text-violet-500'>Forgot Password ?</span>
                                    </a>
                                </div>
                                <div className='input4 w-full flex flex-col items-center'>
                                    <button type="submit" className='bg-violet-600 w-full px-4 py-3 text-white font-bold rounded-md'>Register</button>
                                </div>
                                <div className='input3 w-full flex flex-col items-center'>
                                    <a href="/PatientLogin" className='font-bold text-lg text-center'>Already have an Account ? <span className='font-bold text-lg text-violet-500'>Login</span>
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
export default PatientRegister