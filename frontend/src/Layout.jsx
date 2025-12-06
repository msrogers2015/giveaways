import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function PageLayout() {

  return (
    <>
      <div className='stem-banner'></div>
      <Outlet />
      <Footer />
    </>
  )
}

export default PageLayout;