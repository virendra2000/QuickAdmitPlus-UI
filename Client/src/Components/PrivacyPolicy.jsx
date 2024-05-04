import Navbar from "./Navbar"
import Footer from "./Footer"
const PrivacyPolicy = () => {
    return (
        <>
            <Navbar/>
            <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                <h2 className="text-4xl font-bold text-violet-600 dark:text-white">Privacy & Policy</h2>
                <p className="py-5 text-lg text-black dark:text-white">QuickAdmit Plus Team(&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the QuickAdmit Plus.<br/>
                This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.<br/>
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
                <ul className="px-10 py-8">
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">Information Collection and Use<br/></h1>
                        <p className="py-5 text-lg">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">Types of Data Collected<br/></h1>
                        <p className="py-5 text-lg">
                            Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
                            <ul className="list-disc px-5">
                                <li>Email Address</li>
                                <li>First name and Last name</li>
                                <li>Phone Number</li>
                                <li>Address, State, Province, ZIP/Postal code, City</li>
                                <li>Blood Group</li>
                                <li>Other Medical Records</li>
                                <li>Cookies and Usage Data</li>
                            </ul>
                        </p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">Use of Data<br/></h1>
                        <p className="py-5 text-lg">We use the collected data for various purposes:<br/>
                            <ul className="list-disc px-5">
                                <li>To provide and maintain the Service</li>
                                <li>To notify you about changes to our Service</li>
                                <li>To provide customer care and support</li>
                                <li>To monitor the usage of the Service</li>
                                <li>To detect, prevent and address technical issues</li>
                            </ul></p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">Transfer of Data<br/></h1>
                        <p className="py-5 text-lg">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">Your Consent<br/></h1>
                        <p className="py-5 text-lg">By using our Service, you consent to the collection and use of information in accordance with this Privacy Policy.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">Changes to This Privacy Policy<br/></h1>
                        <p className="py-5 text-lg">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">Contact Us<br/></h1>
                        <p className="py-5 text-lg">
                        If you have any questions about this Privacy Policy, please contact us by filling Contact Form which is in footer section of website.
                        </p>
                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}
export default PrivacyPolicy