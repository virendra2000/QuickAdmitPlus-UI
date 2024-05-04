import { useEffect , useState,useCallback } from 'react';
import axios from "axios";
import DoctorSidebar from './DoctorSidebar';
import DoctorSideTopNav from './DoctorSideTopNav';
import { useNavigate } from 'react-router-dom';
import Profileimg from '../assets/userprofile.png';
const DoctorProfile = () => {
    axios.defaults.withCredentials = true;
    const history = useNavigate();
    const [doctorData,setDoctorData] = useState({
        doctorname:'',
        gender:'',
        profession:'',
        mobileno:'',
        hospitalname:'',
        address:'',
        city:'',
        district:'',
        states:'',
        email:'',
    });
    const [selectedImage, setSelectedImage] = useState(Profileimg);
    const callProfilePage = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8000/doctordashboard");
            const data = res.data;
            setDoctorData(data);
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }
        catch(err) {
            console.error(err);
            history('/DoctorLogin');
        }
        try {
            const res = await axios.get("http://localhost:8000/doctorprofileimg", {responseType: 'arraybuffer' });
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
                    <DoctorSidebar/>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className='p-0'>
                        <DoctorSideTopNav/>
                    </div>
                    <div className='p-10 w-full flex flex-col'>
                        <h1 className='text-3xl font-bold text-black dark:text-white'>Profile</h1>
                        <div className='profile-container flex flex-col lg:flex-row flex-wrap gap-2 items-start justify-center w-[100%]'>
                            <div className="profileimage p-5  flex flex-col items-center w-full lg:w-[40%]">
                                <div className='w-[300px]'>
                                    <img src={selectedImage} className="h-[300px] w-[300px] border-8 border-violet-600  rounded-full"/><br/><br/>
                                </div>
                            </div>
                            <div className='profiledetail flex flex-col items-start gap-4 w-full lg:w-[40%]'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Personal Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white'>Name : {doctorData.doctorid}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Name : {doctorData.doctorname}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Gender : {doctorData.gender}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Profession : {doctorData.profession}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Mobile Number : {doctorData.mobileno}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>Hospital Name : {doctorData.hospitalname}</span>

                                <h1 className='text-2xl font-bold text-black dark:text-white'>Address Information</h1>

                                <span className='text-lg font-bold text-black dark:text-white'>Address : {doctorData.address}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>City : {doctorData.city}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>District : {doctorData.district}</span>

                                <span className='text-lg font-bold text-black dark:text-white'>District : {doctorData.states}</span>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Account Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white'>Email : {doctorData.email}</span>
                                <span className='text-lg font-bold text-black dark:text-white'>Password :  
                                    <button type="button" className='mx-5 px-4 py-2 bg-transparent hover:bg-violet-600 dark:hover:bg-white border-2 border-violet-600 dark:border-white text-violet-600 hover:text-white dark:text-white dark:hover:text-slate-800 rounded-lg'>Change Password</button>
                                </span>
                                <a href="/DoctorEditProfile">
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
export default DoctorProfile