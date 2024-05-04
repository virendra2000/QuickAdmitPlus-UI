import { useEffect , useState,useCallback } from 'react';
import axios from "axios";
import HospitalSideTopNav from './HospitalSideTopNav';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HospitalSidebar from './HospitalSidebar';
const HospitalDashboard = () => {
    axios.defaults.withCredentials = true;
    const history = useNavigate();
    const [hospitalData,setHospitalData] = useState({
        hospitalname: '',
        email: '',
    });
    const [greeting, setGreeting] = useState('');
    const callDashboardPage = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8000/hospitaldashboard");
            const data = res.data;
            setHospitalData(data);
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
            else {
                toast.info(`Welcome ${data.hospitalname}`);
            }
        }
        catch(err) {
            console.error(err);
            history('/HospitalLogin');
        }
    },[history]);
    useEffect(() => {
        callDashboardPage();
    },[callDashboardPage]);

    useEffect(() => {
        // Get current hour
        const currentHour = new Date().getHours();

        // Define greeting based on the time of the day
        if (currentHour >= 5 && currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);
    return (
        <>
            <div className='h-auto md:h-[100vh] bg-slate-100 dark:bg-slate-800 flex flex-row'>
                <ToastContainer autoClose={1000} />
                <div className='w-auto h-auto'>
                    <HospitalSidebar/>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className='p-0'>
                        <HospitalSideTopNav/>
                    </div>
                    <div className='p-5 w-full'>
                        <h1 className='text-2xl text-black dark:text-white font-bold'>{greeting} ,<br/><span className='text-4xl text-violet-400'>{hospitalData.hospitalname}</span></h1>

                        <div className="px-3 py-5 dashboard-cards-container flex flex-row flex-wrap gap-4 items-center justify-center">
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Total Doctors</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div>
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Total Patients</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div>
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Total Prescriptions</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div>
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Total Appointments</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div>
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Total Revenue</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div>
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Total Reports</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div>
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Active Patients</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div>
                            <div className='card flex flex-col p-5 bg-white dark:bg-slate-700 w-[48%] md:w-[24%] rounded-md shadow-lg shadow-gray-500 dark:shadow-black'>
                                <h1 className='text-2xl font-bold text-black dark:text-white'>Inactive Patients</h1>
                                <span className='py-2 text-4xl font-bold text-black dark:text-white'>0</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HospitalDashboard;