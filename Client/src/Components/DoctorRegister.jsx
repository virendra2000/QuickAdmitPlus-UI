import Navbar from "./Navbar";
import illustrate14 from "../assets/illustrate14.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react'
import { STATES } from '../Constants/index'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const DoctorRegister = () => {
  const history = useNavigate();
  axios.defaults.withCredentials = true;
  const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
  const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * (10 ** length));
  }
  const generateUserID = () => {
    const userType = '203';
    const currentYear = new Date().getFullYear();
    const randomNumber = generateRandomNumber(6); // Generate a random 6-digit number
    return `${currentYear}${userType}${randomNumber}`;
  }
  const [hospitalNames, setHospitalNames] = useState([]);
  const [doctorData, setDoctorData] = useState({
    doctorid:generateUserID(),
    doctorname:'',
    gender:'',
    profession:'',
    mobileno:'',
    hospitalname:'',
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
    setDoctorData({...doctorData,[name]: value});
  };
  const handleSubmit = async (e) => {
    let dataToSend;
    e.preventDefault();
    dataToSend = doctorData;
    try {
        const res = await axios.post("http://localhost:8000/doctorregister",dataToSend);
        if(res.status==201) {
            toast.success('Doctor Registered Successfully');
            setTimeout(() => {
                history("/DoctorLogin");
            }, 2000);
        }
        else {
            toast.error('Registration Failed');
        }
    } catch (error) {
        console.log(error);
    }
  };
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
  return (
    <>
      <Navbar />
      <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
        <ToastContainer autoClose={1000} />
        <div className="head-banner flex flex-col md:flex-row p-5 w-full h-auto bg-violet-800 rounded-2xl items-center justify-center">
          <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-violet-600">
                  Doctor Register
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-row space-x-3">
                  <input id="doctorName" name="doctorname" type="text" className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Doctor Name" value={doctorData.doctorname} onChange={handleInputChange} required/>
                  
                  <input id="gender" name="gender" type="text" className="p-3 block w-full border-2 dark:border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Gender" value={doctorData.gender} onChange={handleInputChange} required/>
                </div>
                <div className="flex flex-row space-x-3">
                  <input type="text" list="profession" name="profession" className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Profession" value={doctorData.profession} onChange={handleInputChange} required/>
                  <datalist id="profession">
                    <option value="MBBS">
                      Bachelor of Medicine, Bachelor of Surgery - MBBS
                    </option>
                    <option value="MS">Master of Surgery - MS</option>
                    <option value="MD">Doctor of Medicine - MD</option>
                    <option value="BAMS">
                      Bachelor of Ayurvedic Medicine and Surgery - BAMS
                    </option>
                  </datalist>

                  <input id="phone" name="mobileno" type="text" className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Mobile No." value={doctorData.mobileno} onChange={handleInputChange} required/>
                </div>
                <div className="flex flex-row space-x-3">
                  {/* <input id="HospitalName" list="hospital" name="hospitalname" type="text" className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Hospital Name" value={doctorData.hospitalname} onChange={handleInputChange} required/> */}

                    <select id="hospital" name="hospitalname" className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" value={doctorData.hospitalname} onChange={handleInputChange}>
                    <option value="Select Hospital">Select Hospital</option>
                    {hospitalNames.map((hospital) => (
                        <option key={hospital._id} value={hospital.hospitalname}>
                          {hospital.hospitalname}
                        </option>
                    ))}
                    </select>
                  <input id="city" name="city" type="text" className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="City" value={doctorData.city} onChange={handleInputChange} required/>
                </div>
                <div className="flex flex-row space-x-3">
                  <input id="district" name="district" type="text" className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="District" value={doctorData.district} onChange={handleInputChange} required/>

                  <input id="states" list="states" name="states" type="text" className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="States" value={doctorData.states} onChange={handleInputChange} required/>

                    {STATES.map((state) => (
                      <datalist key={state.key} id="states">
                        <option value={state.name}/>
                      </datalist>
                    ))}
                </div>
                <div>
                  <input id="email" name="email" type="email" className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Email ID" value={doctorData.email} onChange={handleInputChange}/>
                </div>
                <div>
                  <input id="password" name="password" type="password" autoComplete="password" className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Create Password" value={doctorData.password} onChange={handleInputChange} required/>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/DoctorLogin">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Log in
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <img src={illustrate14} className="w-[500px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DoctorRegister