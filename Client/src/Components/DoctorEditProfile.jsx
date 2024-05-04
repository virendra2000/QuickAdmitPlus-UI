import { useEffect , useState,useCallback } from 'react';
import axios from "axios";
import DoctorSidebar from './DoctorSidebar';
import DoctorSideTopNav from './DoctorSideTopNav';
import { useNavigate } from 'react-router-dom';
import Profileimg from '../assets/userprofile.png';
import { STATES } from '../Constants/index';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DoctorEditProfile = () => {
    axios.defaults.withCredentials = true;
    const history = useNavigate();
    const [img, setImg] = useState();
    const [selectedImage, setSelectedImage] = useState(Profileimg);
    const [hospitalNames, setHospitalNames] = useState([]);
    const [doctorData,setDoctorData] = useState({
        doctorid:'',
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
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDoctorData({...doctorData,[name]: value});
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImg(file);
    };
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
    useEffect(() => {
        // Fetch hospital names from the backend
        const fetchHospitalNames = async () => {
            try {
                const response = await axios.get('http://localhost:8000/hospitalnames');
                setHospitalNames(response.data);
            } catch (error) {
                console.error('Error fetching hospital names:', error);
            }
        };
    
        fetchHospitalNames();
      }, []);
    const updateData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('doctorname', doctorData.doctorname);
        formData.append('gender', doctorData.gender);
        formData.append('profession', doctorData.profession);
        formData.append('mobileno', doctorData.mobileno);
        formData.append('hospitalname', doctorData.hospitalname);
        formData.append('address', doctorData.address);
        formData.append('city', doctorData.city);
        formData.append('district', doctorData.district);
        formData.append('states', doctorData.states);
        formData.append('image', img);

        try {
            const res = await axios.post('http://localhost:8000/doctorupdatedata', formData,{
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
                    <DoctorSidebar/>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className='p-0'>
                        <DoctorSideTopNav/>
                    </div>
                    <div className='p-10 w-full flex flex-col'>
                        <h1 className='text-3xl font-bold text-black dark:text-white'>Edit Profile</h1>
                        <form className='profile-container flex flex-col lg:flex-row gap-2 items-start justify-center w-[100%]' onSubmit={updateData}>
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
                                
                                <span className='text-lg font-bold text-black dark:text-white'>Name : {doctorData.doctorid}</span>

                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="doctorname" placeholder="Hospital Name" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.doctorname}
                                    onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" list="gender" name="gender" placeholder="Gender" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.gender}
                                    onChange={handleInputChange}/>

                                    <datalist id="gender">
                                        <option value="Male"/>
                                        <option value="Female"/>
                                    </datalist>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" list="profession" name="profession" placeholder="Hospital Profession" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.profession} onChange={handleInputChange}/>

                                    <datalist id="profession">
                                        <option value="MBBS"/>
                                        <option value="MS"/>
                                        <option value="MD"/>
                                        <option value="BAMS"/>
                                    </datalist>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="mobileno" placeholder="Mobile Number" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.mobileno} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <select id="hospital" name="hospitalname" className="px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100 text-violet-600" value={doctorData.hospitalname} onChange={handleInputChange}>
                                        <option value="Select Hospital">Select Hospital</option>
                                            {hospitalNames.map((hospital) => (
                                                <option key={hospital._id} value={hospital.hospitalname}>
                                                    {hospital.hospitalname}
                                                </option>
                                            ))}
                                    </select>
                                    </span>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Address Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <textarea rows="3" name="address" placeholder="Address" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.address} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="city" placeholder="City" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.city} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="district" placeholder="District" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.district} onChange={handleInputChange}/>
                                </span>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" list="states" name="states" placeholder="States" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.states} onChange={handleInputChange}/>

                                    {STATES.map((state) => (
                                        <datalist key={state.key} id="states">
                                            <option value={state.name}/>
                                        </datalist>
                                    ))}
                                </span>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Account Information</h1>
                                <span className='text-lg font-bold text-black dark:text-white w-full'>
                                    <input type="text" name="email" placeholder="Email" className='px-4 py-2 outline-none w-full bg-transparent border-2 border-violet-600 dark:border-slate-100' value={doctorData.email} onChange={handleInputChange} disabled/><br/>
                                    Note: Cannot Change Email
                                </span>
                                <button type="submit" className='mx-5 px-4 py-2 font-bold text-md bg-transparent hover:bg-violet-600 dark:hover:bg-white border-2 border-violet-600 dark:border-white text-violet-600 hover:text-white dark:text-white dark:hover:text-slate-800 rounded-lg'>Update Profile</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DoctorEditProfile