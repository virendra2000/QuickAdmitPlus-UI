import { useEffect , useState,useCallback } from 'react';
import axios from "axios";
import PatientSidebar from './PatientSidebar';
import PatientSideTopNav from './PatientSideTopNav';
import { useNavigate } from 'react-router-dom';
import Profileimg from '../assets/userprofile.png';
const PatientProfile = () => {
    axios.defaults.withCredentials = true;
    const history = useNavigate();
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
    });
    const [selectedImage, setSelectedImage] = useState(Profileimg);
    const callProfilePage = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8000/patientdashboard");
            const data = res.data;
            setPatientData(data);
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }
        catch(err) {
            console.error(err);
            history('/PatientLogin');
        }
        try {
            const res = await axios.get("http://localhost:8000/patientprofileimg", {responseType: 'arraybuffer' });
            const blob = new Blob([res.data], {type:'image/jpeg'});
            const imgUrl = URL.createObjectURL(blob);
            setSelectedImage(imgUrl);
        }
        catch (error) {
            console.log(error);
        }
    },[history]);
    useEffect(() => {
        callProfilePage();
    },[callProfilePage]);
    return (
        <>
            <div className='h-auto bg-slate-100 dark:bg-slate-800 flex flex-row'>
                <div className='w-auto h-auto'>
                    <PatientSidebar/>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className='p-0'>
                        <PatientSideTopNav/>
                    </div>
                    <div className='p-10 w-full flex flex-col'>
                        <h1 className='text-4xl font-bold text-black dark:text-white'>Profile</h1>
                        <div className='profile-container flex flex-col lg:flex-row flex-wrap gap-2 items-center justify-center w-[100%]'>
                            <div className="profileimage p-5  flex flex-col items-center w-full lg:w-[40%]">
                                <div className='w-[300px]'>
                                    <img src={selectedImage} className="h-[300px] w-[300px] border-8 border-violet-600  rounded-full"/><br/><br/>
                                </div>
                            </div>
                            <div className='profiledetail flex flex-col items-start gap-4 w-full lg:w-[40%]'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Personal Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white'>ID : {patientData.patientid}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Name : {patientData.patientname}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Gender : {patientData.gender}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Mobile Number : {patientData.mobileno}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Blood Group : {patientData.bloodgrp}</span>
                                
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Address Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white'>Address : {patientData.address}</span>
                                <span className='text-lg font-bold text-black dark:text-white'>City : {patientData.city}</span>
                                <span className='text-lg font-bold text-black dark:text-white'>District : {patientData.district}</span>
                                <span className='text-lg font-bold text-black dark:text-white'>States : {patientData.states}</span>
                                
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Account Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white'>Email : {patientData.email}</span>
                                <span className='text-lg font-bold text-black dark:text-white'>Password :  
                                 <button type="button" className='mx-5 px-4 py-2 bg-transparent hover:bg-violet-600 dark:hover:bg-white border-2 border-violet-600 dark:border-white text-violet-600 hover:text-white dark:text-white dark:hover:text-slate-800 rounded-lg'>Change Password</button>
                                </span>
                                <a href="/PatientEditProfile">
                                    <button type="button" className='mx-5 px-4 py-2 font-bold text-lg bg-transparent hover:bg-violet-600 dark:hover:bg-white border-2 border-violet-600 dark:border-white text-violet-600 hover:text-white dark:text-white dark:hover:text-slate-800 rounded-lg'>Edit Profile</button>
                                </a>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default PatientProfile