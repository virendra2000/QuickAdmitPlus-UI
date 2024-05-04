import { useEffect , useState,useCallback } from 'react';
import axios from "axios";
import HospitalSidebar from './HospitalSidebar';
import HospitalSideTopNav from './HospitalSideTopNav';
import { useNavigate } from 'react-router-dom';
import Profileimg from '../assets/userprofile.png';
import { STATES } from '../Constants/index';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HospitalEditProfile = () => {
    axios.defaults.withCredentials = true;
    const history = useNavigate();
    const [img, setImg] = useState();
    const [selectedImage, setSelectedImage] = useState(Profileimg);
    const [hospitalData,setHospitalData] = useState({
        hospitalid:'',
        hospitalname: '',
        address:'',
        city:'',
        district:'',
        states:'',
        hospitaltype:'',
        mobileno:'',
        email:'',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHospitalData({...hospitalData,[name]: value});
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImg(file);
    };
    const callProfilePage = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8000/hospitaldashboard");
            const data = res.data;
            setHospitalData(data);
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }
        catch(err) {
            console.error(err);
            history('/HospitalLogin');
        }
        try {
            const res = await axios.get("http://localhost:8000/hospitalprofileimg", {responseType: 'arraybuffer' });
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
        formData.append('hospitalname', hospitalData.hospitalname);
        formData.append('address', hospitalData.address);
        formData.append('city', hospitalData.city);
        formData.append('district', hospitalData.district);
        formData.append('states', hospitalData.states);
        formData.append('hospitaltype', hospitalData.hospitaltype);
        formData.append('mobileno', hospitalData.mobileno);
        formData.append('image', img);

        try {
            const res = await axios.post('http://localhost:8000/hospitalupdatedata', formData,{
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
                    <HospitalSidebar/>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className='p-0'>
                        <HospitalSideTopNav/>
                    </div>
                    <div className='p-10 w-full flex flex-col'>
                        <h1 className='text-4xl font-bold text-black dark:text-white'>Edit Profile</h1>
                        <form className='profile-container flex flex-col lg:flex-row gap-2 items-center justify-center w-[100%]' onSubmit={updateData}>
                            <div className="profileimage p-5  flex flex-col items-center w-full lg:w-[40%]">
                                {selectedImage && (
                                    <div className='w-[400px]'>
                                        <img src={selectedImage} className="h-[400px] w-[400px] border-8 border-violet-600  rounded-full"/><br/><br/>
                                    </div>
                                )}
                                <label className="p-2 m-2 font-bold cursor-pointer text-lg bg-transparent border-2 border-violet-600 dark:border-white hover:border-none dark:hover:border-none hover:bg-violet-600 dark:hover:bg-white text-violet-600 dark:text-white hover:text-white dark:hover:text-slate-800 rounded-lg">
                                    <input type="file" className="hidden" accept="image/png , image/gif ,  image/jpeg" onChange={handleImageChange}/> Change Photo
                                </label>
                            </div>
                            <div className='profiledetail flex flex-col items-start gap-4 w-full lg:w-[40%]'>
                                <span className='text-lg font-bold text-black dark:text-white'>ID : {hospitalData.hospitalid}</span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="hospitalname" placeholder="Hospital Name" className='px-4 py-3 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={hospitalData.hospitalname}
                                    onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <textarea type="text" name="address" placeholder="Address" className='px-4 py-3 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={hospitalData.address} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="city" placeholder="City" className='px-4 py-3 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={hospitalData.city} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="district" placeholder="District" className='px-4 py-3 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={hospitalData.district} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" list="states" name="states" placeholder="States" className='px-4 py-3 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={hospitalData.states} onChange={handleInputChange}/>

                                    {STATES.map((state) => (
                                        <datalist key={state.key} id="states">
                                            <option value={state.name}/>
                                        </datalist>
                                    ))}
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="mobileno" placeholder="Mobile Number" className='px-4 py-3 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={hospitalData.mobileno} onChange={handleInputChange}/>
                                </span>
                                <br/><br/>
                                <h1 className='text-lg font-bold text-black dark:text-white'>Account Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="email" placeholder="States" className='px-4 py-3 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={hospitalData.email} onChange={handleInputChange} disabled/><br/>
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
export default HospitalEditProfile