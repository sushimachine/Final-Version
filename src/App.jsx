import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Pages/SignUp'
import LogIn from './Pages/Login'
import Landing from './Pages/Landing'
import ContactUsPage from './Pages/ContactUs';
import FaqPage from './Pages/faq';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/faqs' element={<FaqPage />} />
          <Route path='/home' element={<Landing />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/contactus' element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App