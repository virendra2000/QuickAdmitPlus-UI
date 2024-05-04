import Navbar from "./Navbar"
import Footer from "./Footer"
const TermsCondition = () => {
    return (
        <>
            <Navbar/>
            <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                <h2 className="text-4xl font-bold text-violet-600 dark:text-white">Terms & Condition</h2>

                <ul className="px-10 py-8">
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">1. Acceptance of Terms :<br/></h1>
                        <p className="py-5 text-lg">By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the website.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">2. Use of Website :<br/></h1>
                        <p className="py-5 text-lg">You may use this website for lawful purposes only. You agree not to engage in any activity that may interfere with the operation of the website or infringe upon the rights of others.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">3. Intellectual Property Rights :<br/></h1>
                        <p className="py-5 text-lg">All content and materials on this website, including but not limited to text, graphics, logos, and images, are the property of QuickAdmit Plus and are protected by copyright and other intellectual property laws.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">4. User Accounts :<br/></h1>
                        <p className="py-5 text-lg">If you create an account on this website, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">5. Privacy Policy :<br/></h1>
                        <p className="py-5 text-lg">Your use of this website is subject to our Privacy Policy, which governs how we collect, use, and protect your personal information. Please review our Privacy Policy <a href="/" className="text-violet-700">here</a>.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">6. Disclaimer of Warranties :<br/></h1>
                        <p className="py-5 text-lg">This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. QuickAdmit Plus makes no warranties or representations about the accuracy or completeness of the content on this website.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">7. Limitation of Liability :<br/></h1>
                        <p className="py-5 text-lg">In no event shall QuickAdmit Plus be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">8. Changes to Terms and Conditions :<br/></h1>
                        <p className="py-5 text-lg">QuickAdmit Plus reserves the right to update or modify these Terms and Conditions at any time without prior notice. By continuing to use this website after such changes, you agree to be bound by the updated terms.</p>
                    </li>
                    <li className="text-black dark:text-white">
                        <h1 className="font-bold text-2xl text-violet-600 dark:text-white">9. Contact Information :<br/></h1>
                        <p className="py-5 text-lg">If you have any questions or concerns about these Terms and Conditions, please contact us through Contact Form given in footer section .</p>
                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}
export default TermsCondition