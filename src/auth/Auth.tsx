import React, { Component } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'

const AuthLayout = () => {
    return (
        <div
        className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
        style={{
          // backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
          backgroundImage: `url(/media/images/14.png)`,
        }}
      >
        {/* begin::Content */}
        <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
          {/* begin::Logo */}
          <a href='/' className='mb-12'>
            <img
              alt='logo'
              // src={toAbsoluteUrl('/media/logos/zap-logo.svg')}
              src='/media/svg/lolly.jpg'
              className='theme-light-show h-45px'
            ></img>
          </a>
          {/* end::Logo */}
          {/* begin::Wrapper */}
          <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Content */}
        {/* begin::Footer */}
        <div className='d-flex flex-center flex-column-auto p-10'>
          <div className='d-flex align-items-center fw-semibold fs-6'>
            <a href='/' className='text-muted text-hover-primary px-2'>
              About
            </a>
  
            <a href='/' className='text-muted text-hover-primary px-2'>
              Contact
            </a>
  
            <a href='/' className='text-muted text-hover-primary px-2'>
              Contact Us
            </a>
          </div>
        </div>
        
        {/* end::Footer */}
      </div>
      )
}


const Auth = () => {
    <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='sihnin' element={<Register />} />
      {/* <Route path='forgot-password' element={<ForgotPassword />} /> */}
      <Route index element={<Login />} />
    </Route>
  </Routes>
}

export {Auth}