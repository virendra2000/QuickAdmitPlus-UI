import { useEffect , useState } from 'react';
import axios from "axios";
import Profileimg from '../assets/user.png';
const HospitalSideTopNav = () => {
    axios.defaults.withCredentials = true;
    const [selectedImage, setSelectedImage] = useState(Profileimg);
    const callProfilePic = async () => {
        try {
            const res = await axios.get("http://localhost:8000/hospitalprofileimg", {responseType: 'arraybuffer' });
            const blob = new Blob([res.data], {type:'image/jpeg'});
            const imgUrl = URL.createObjectURL(blob);
            setSelectedImage(imgUrl);
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        callProfilePic();
    });
    return (
        <>
            <div className="h-30vh w-[100%] p-2 bg-white dark:bg-slate-700 flex flex-row items-center justify-end md:justify-between shadow-md shadow-gray-500 dark:shadow-none">
                <div className="p-2 hidden md:flex md:flex-row items-center overflow-hidden">
                    <img src="/logo.png" className="w-[60px]"/>
                    <h1 className="text-xl font-bold text-black dark:text-white">QuickAdmit <span className="text-violet-600">Plus</span></h1>
                </div>
                <div className="search px-4 w-[50%] border-[3px] border-slate-500 hidden md:flex md:flex-row items-center justify-center rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-black dark:text-slate-500">
                        <path fill="currentColor" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
                    </svg>
                    <input type="search" placeholder="Search" className="w-full px-4 py-2 outline-none bg-transparent text-black dark:text-white font-bold font-sans"/>
                </div>
                <div className="other px-4 flex flex-row gap-4 items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="text-black dark:text-slate-400 cursor-pointer">
                        <path fill="currentColor" d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"/>
                    </svg>

                    <div className='w-[60px] flex flex-row items-center justify-center'>
                        <img src={selectedImage} className="h-[60px] w-[60px] border-2 border-violet-600  rounded-full"/><br/><br/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HospitalSideTopNav