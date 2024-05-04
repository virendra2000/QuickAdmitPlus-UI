import Navbar from './Navbar'
import Footer from './Footer'
import image1 from '../assets/illustrate6.svg'
const AdminLogin = () => {
    return (
        <>
            <Navbar/>
                <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                    <div className='main-content p-5 flex flex-col md:flex-row h-auto items-center justify-center gap-4 bg-violet-600 rounded-lg'>
                        <div className='login-form flex flex-col items-center justify-center w-full md:w-[35%] bg-white rounded-lg'>
                            <h2 className='p-5 text-3xl font-bold text-violet-600'>ADMIN LOGIN</h2>
                            <form className='p-5 flex flex-col gap-2 items-center justify-center w-full'>
                                <div className='input1 w-full'>
                                    <input type="email" name="email" placeholder='Email ID' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold'/>
                                </div>
                                <div className='input2 w-full'>
                                    <input type="password" name="password" placeholder='Password' className='outline-none px-5 py-3 w-full border-2 border-violet-600 text-violet-600 placeholder-violet-600 rounded-md font-bold'/>
                                </div>
                                <div className='input2 w-full flex flex-col items-center'>
                                    <button type="submit" className='bg-violet-600 w-full px-4 py-3 text-white font-bold rounded-md'>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className='image w-[50%]'>
                            <img src={image1} className='w-[500px]'/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
export default AdminLogin