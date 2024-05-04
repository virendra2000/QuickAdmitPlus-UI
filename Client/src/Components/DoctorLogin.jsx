import Navbar from "./Navbar";
import illustrate13 from "../assets/illustrate13.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const DoctorLogin = () => {
  const history = useNavigate();
  const [doctorData, setDoctorData] = useState({
    email:'',
    password:'',
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
        const res = await axios.post("http://localhost:8000/doctorlogin",dataToSend);
        if(res.status==200) {
            toast.success('Login Successfully & Account Verified');
            setTimeout(() => {
                history("/DoctorDashboard");
            }, 2000);
        }
        else if(res.status == 201) {
            toast.success('Login Successfully');
            setTimeout(() => {
                history(`/DoctorOTP?email=${dataToSend.email}`);
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
      <Navbar />
      <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
        <ToastContainer autoClose={1000} />
        <div className="head-banner flex flex-col md:flex-row p-5 w-full h-auto bg-violet-800 rounded-2xl items-center justify-center">
          <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-lg">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-violet-600">
                Doctor Login
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <input id="username" name="email" type="email" className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Email ID" value={doctorData.email} onChange={handleInputChange} required/>
              </div>
              <div>
                <input id="password" name="password" type="password" className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold" placeholder="Password" value={doctorData.password} onChange={handleInputChange} required/>
              </div>
              <div>
                <Link
                  to="/forgot_password"
                  className="text-sm text-violet-600 hover:text-violet-900 font-bold"
                >
                  Forgot Password?
                </Link>
                <button
                  type="submit"
                  className="w-full mt-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="text-center">
              <p className="mt-2 text-sm text-gray-600">
                Or <br />
                <br /> Don&apos;t have an Account?{" "}
                <Link to="/DoctorRegister">
                  <button className="font-medium text-indigo-600 hover:text-indigo-500">
                    Register
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <img src={illustrate13} className="w-[500px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorLogin;
