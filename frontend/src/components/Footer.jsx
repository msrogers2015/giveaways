import React from 'react';

import { useNavigate } from "react-router-dom";

function Footer() {
  const nav = useNavigate()

  return (
    <div className="container-fluid stem-banner-bg">
      <div className="container">
        <div className="row text-center align-content-center footer-height">
          <div className="col-12 col-md-4" ><a href="https://ko-fi.com/freestudydev" target="_blank" className='btn'><h5>Share a Coffee</h5></a></div>
          <div className="col-12 col-md-4" ><a onClick={() => {nav('/privacy'); window.scroll(0,0)}} className='btn'><h5>Privacy Policy</h5></a></div>
          <div className="col-12 col-md-4" ><a onClick={() => {nav('/tos'); window.scroll(0,0)}} className='btn'><h5>Terms of Service</h5></a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer;