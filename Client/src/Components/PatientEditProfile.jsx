import { useEffect , useState,useCallback } from 'react';
import axios from "axios";
import PatientSidebar from './PatientSidebar';
import PatientSideTopNav from './PatientSideTopNav';
import { useNavigate } from 'react-router-dom';
import Profileimg from '../assets/userprofile.png';
import { STATES } from '../Constants/index';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PatientEditProfile = () => {
    axios.defaults.withCredentials = true;
    const history = useNavigate();
    const [img, setImg] = useState();
    const [selectedImage, setSelectedImage] = useState(Profileimg);
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
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientData({...patientData,[name]: value});
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImg(file);
    };
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

    const updateData = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('patientname', patientData.patientname);
        formData.append('gender', patientData.gender);
        formData.append('mobileno', patientData.mobileno);
        formData.append('bloodgrp', patientData.bloodgrp);
        formData.append('address', patientData.address);
        formData.append('city', patientData.city);
        formData.append('district', patientData.district);
        formData.append('states', patientData.states);
        formData.append('image', img);

        try {
            const res = await axios.post('http://localhost:8000/patientupdatedata', formData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                },
            })

            if(res.status == 201) {
                toast.success('Profile Updated Successfully');
            }else if (res.status !== 201) {
                toast.error('Unable to Update',{
                    position: toast.POSITION.TOP_CENTER
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='h-auto bg-slate-100 dark:bg-slate-800 flex flex-row'>
                <ToastContainer autoClose={1000}/>
                <div className='w-auto h-auto'>
                    <PatientSidebar/>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className='p-0'>
                        <PatientSideTopNav/>
                    </div>
                    <div className='p-10 w-full flex flex-col'>
                        <h1 className='text-4xl font-bold text-black dark:text-white'>Edit Profile</h1>
                        <form className='profile-container flex flex-col lg:flex-row gap-4 items-center justify-center w-[100%]' onSubmit={updateData}>
                            <div className="profileimage p-5  flex flex-col items-center w-full lg:w-[40%]">
                                {selectedImage && (
                                <div className='w-[300px]'>
                                    <img src={selectedImage} className="h-[300px] w-[300px] border-8 border-violet-600  rounded-full"/><br/><br/>
                                </div>
                                )}
                                <label className="p-2 m-2 font-bold cursor-pointer text-lg bg-transparent border-2 border-violet-600 dark:border-white hover:border-none dark:hover:border-none hover:bg-violet-600 dark:hover:bg-white text-violet-600 dark:text-white hover:text-white dark:hover:text-slate-800 rounded-lg">
                                    <input type="file" className="hidden" accept="image/png , image/gif ,  image/jpeg" onChange={handleImageChange}/> Change Photo
                                </label>
                            </div>
                            <div className='profiledetail flex flex-col items-start gap-4 w-full lg:w-[40%]'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Personal Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white'>ID : {patientData.patientid}</span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="patientname" placeholder="Patient Name" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.patientname}
                                    onChange={handleInputChange}/>
                                </span>

                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" list="gender" name="gender" placeholder="Gender" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.gender} onChange={handleInputChange}/>

                                    <datalist id="gender">
                                        <option value="Male"/>
                                        <option value="Female"/>
                                    </datalist>
                                </span>

                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="mobileno" placeholder="Mobile Number" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.mobileno} onChange={handleInputChange}/>
                                </span>

                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" list="bloodgrp" name="bloodgrp" placeholder="Blood Group" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.bloodgrp} onChange={handleInputChange}/>

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
                                </span>
                                
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Address Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <textarea rows="3" name="address" placeholder="Address" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.address} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="city" placeholder="City" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.city} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="district" placeholder="District" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.district} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" list="states" name="states" placeholder="States" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.states} onChange={handleInputChange}/>

                                    {STATES.map((state) => (
                                        <datalist key={state.key} id="states">
                                            <option value={state.name}/>
                                        </datalist>
                                    ))}
                                </span>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Account Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="email" placeholder="States" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={patientData.email} onChange={handleInputChange} disabled/><br/>
                                    Note: Cannot Change Email
                                </span>
                                <button type="submit" className='mx-5 px-4 py-2 font-bold text-lg bg-transparent hover:bg-violet-600 dark:hover:bg-white border-2 border-violet-600 dark:border-white text-violet-600 hover:text-white dark:text-white dark:hover:text-slate-800 rounded-lg'>Update Profile</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PatientEditProfile