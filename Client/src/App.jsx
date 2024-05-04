import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import TermsCondition from './Components/TermsConditions';
import PrivacyPolicy from './Components/PrivacyPolicy';
import AdminLogin from './Components/AdminLogin';
import PatientLogin from './Components/PatientLogin'
import PatientRegister from './Components/PatientRegister';
import DoctorLogin from './Components/DoctorLogin';
import DoctorRegister from './Components/DoctorRegister';
import DoctorOTP from './Components/DoctorOTP';
import DoctorDashboard from './Components/DoctorDashboard';
import DoctorLogOut from './Components/DoctorLogOut';
import HospitalLogin from './Components/HospitalLogin';
import HospitalRegister from './Components/HospitalRegister';
import HospitalOTP from './Components/HospitalOTP';
import PatientOTP from './Components/PatientOTP';
import HospitalDashboard from './Components/HospitalDashboard';
import PatientDashboard from './Components/PatientDashboard';
import PatientLogOut from './Components/PatientLogOut';
import PatientProfile from './Components/PatientProfile';
import PatientEditProfile from './Components/PatientEditProfile';
import HospitalLogOut from './Components/HospitalLogOut';
import HospitalProfile from './Components/HospitalProfile';
import HospitalEditProfile from './Components/HospitalEditProfile';
import DoctorProfile from './Components/DoctorProfile';
import DoctorEditProfile from './Components/DoctorEditProfile';
import AdmitPatient from './Components/AdmitPatient';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/TermsandCondition" element={<TermsCondition/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/PatientLogin" element={<PatientLogin/>}/>
        <Route path="/PatientRegister" element={<PatientRegister/>}/>
        <Route path="/DoctorLogin" element={<DoctorLogin/>}/>
        <Route path='/DoctorRegister' element={<DoctorRegister/>}/>
        <Route path='/DoctorOTP' element={<DoctorOTP/>}/>
        <Route path='/DoctorDashboard' element={<DoctorDashboard/>}/>
        <Route path='/DoctorLogOut' element={<DoctorLogOut/>}/>
        <Route path='/DoctorProfile' element={<DoctorProfile/>}/>
        <Route path='/DoctorEditProfile' element={<DoctorEditProfile/>}/>
        <Route path='/HospitalLogin' element={<HospitalLogin/>}/>
        <Route path='/HospitalRegister' element={<HospitalRegister/>}/>
        <Route path='/HospitalOTP' element={<HospitalOTP/>}/>
        <Route path='/HospitalDashboard' element={<HospitalDashboard/>}/>
        <Route path='/HospitalLogOut' element={<HospitalLogOut/>}/>
        <Route path='/HospitalProfile' element={<HospitalProfile/>}/>
        <Route path='/HospitalEditProfile' element={<HospitalEditProfile/>}/>
        <Route path='/PatientOTP' element={<PatientOTP/>}/>
        <Route path='/PatientDashboard' element={<PatientDashboard/>}/>
        <Route path="/PatientLogOut" element={<PatientLogOut/>}/>
        <Route path='/PatientProfile' element={<PatientProfile/>}/>
        <Route path='/PatientEditProfile' element={<PatientEditProfile/>}/>
        <Route path='/AdmitPatient' element={<AdmitPatient/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
