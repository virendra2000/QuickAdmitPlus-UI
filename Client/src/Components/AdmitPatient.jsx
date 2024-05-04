import { useState,useEffect,useCallback } from 'react';
import axios from "axios";
import HospitalSideTopNav from './HospitalSideTopNav';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HospitalSidebar from './HospitalSidebar';
const AdmitPatient = () => {
    const history = useNavigate();
    axios.defaults.withCredentials = true;
    const [patientData,setPatientData] = useState({
        patientid:'',
        patientname: '',
        gender:'',
        mobileno:'',
        bloodgrp:'',
        address:'',
        city:'',
        district:'',
        states:'',
        email:'',
        hospitalname:'',
        country:'India',
    });
    const callDashboardPage = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8000/hospitaldashboard");
            const data = res.data;
            patientData.hospitalname = data.hospitalname;
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }
        catch(err) {
            console.error(err);
            history('/HospitalLogin');
        }
    },[patientData,history]);
    useEffect(() => {
        callDashboardPage();
    },[callDashboardPage]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientData({...patientData,[name]: value});
    };
    const handleFetch = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Call fetchPatientInfo with the current patientId state
        try {
            const response = await axios.get(`http://localhost:8000/patient-info/${patientData.patientid}`);
            setPatientData(response.data); // Assuming the response.data contains patient information
        } catch (error) {
            console.error('Error fetching patient info:', error);
        }
    };
    const handleSubmit = async (e) => {
        let dataToSend;
        e.preventDefault();
        dataToSend = patientData;
        try {
            const res = await axios.post("http://localhost:8000/patientadmit",dataToSend);
            if(res.status==201) {
                toast.success('Admitted Successfully');
            }
            else {
                toast.error('Admission Failed');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className='h-auto bg-slate-100 dark:bg-slate-800 flex flex-row'>
                <ToastContainer autoClose={1000} />
                <div className='w-auto h-auto'>
                    <HospitalSidebar/>
                </div>
                <div className='w-full h-auto flex flex-col'>
                    <div className='p-0'>
                        <HospitalSideTopNav/>
                    </div>
                    <div className='p-5 h-auto'>
                        <form onSubmit={handleFetch}>
                            <div className='flex flex-col gap-2'>
                                <input type="text" name="patientid" placeholder="Patient ID" className='px-4 py-2 outline-none w-full md:w-[30%] bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.patientid}
                                onChange={handleInputChange}/>

                                <button type="submit" className='mx-5 w-[30%] md:w-[15%] px-4 py-2 font-bold text-lg bg-transparent hover:bg-violet-600 dark:hover:bg-white border-2 border-violet-600 dark:border-white text-violet-600 hover:text-white dark:text-white dark:hover:text-slate-800 rounded-md'>Fetch Data</button>
                            </div>
                        </form>

                        <br/>
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-xl text-black dark:text-white font-bold'>Personal Information</h1>
                            <br/>
                            <label className='text-lg text-black dark:text-white font-bold'>PATIENT ID : {patientData.patientid}</label>
                            <br/><br/>
                            <div className='flex flex-row gap-4 flex-wrap'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Patient Name</label>
                                    <input type="text" name="patientname" placeholder="Patient Name" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.patientname} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Gender</label>
                                    <input type="text" name="gender" placeholder="Gender" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.gender} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Mobile No.</label>
                                    <input type="text" name="mobileno" placeholder="Mobile Number" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.mobileno} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Blood Group</label>
                                    <input type="text" name="bloodgrp" placeholder="Blood Group" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.bloodgrp} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Email</label>
                                    <input type="text" name="email" placeholder="Email" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.email} onChange={handleInputChange}/>
                                </div>
                            </div><br/>
                            <h1 className='text-xl text-black dark:text-white font-bold'>Address Information</h1><br/>
                            <div className='flex flex-row gap-4 flex-wrap'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Address</label>
                                    <textarea rows="3" name="address" placeholder="Address" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.address} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>City</label>
                                    <input type="text" name="city" placeholder="City" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.city} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>District</label>
                                    <input type="text" name="district" placeholder="District" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.district} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>States</label>
                                    <input type="text" name="states" placeholder="States" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.states} onChange={handleInputChange}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Country</label>
                                    <input type="text" name="country" placeholder="Country" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.country} onChange={handleInputChange}/>
                                </div>
                            </div><br/>
                            <h1 className='text-xl text-black dark:text-white font-bold'>Admission Info</h1><br/>
                            <div className='flex flex-row gap-4 flex-wrap'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md text-black dark:text-white font-bold'>Admission In</label>
                                    <input type="text" name="hospitalname" placeholder="Hospital Name" className='px-4 py-2 outline-none bg-transparent border-2 border-violet-600 dark:border-slate-100 text-black dark:text-white' value={patientData.hospitalname} onChange={handleInputChange}/>
                                </div>
                            </div><br/>
                            <button type="submit" className='mx-5 w-[30%] md:w-[15%] px-4 py-2 font-bold text-lg bg-transparent hover:bg-violet-600 dark:hover:bg-white border-2 border-violet-600 dark:border-white text-violet-600 hover:text-white dark:text-white dark:hover:text-slate-800 rounded-md'>Admit Patient</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdmitPatient