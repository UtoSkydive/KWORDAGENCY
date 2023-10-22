import Link from 'next/link'
import React from 'react'

const BannerMain = () => {
    return (
        <div className="axil-slider-area axil-slide-activation">
            <div
                 style={{ background: "#1E3868", height:'85vh',display:'flex',justifyItems:'center',alignItems:'center'}}>
                <div className="container">
                    <div className="row" >
                       
                                <h3
                                    className="axil-display-1"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    style={{ color: "white",textAlign:'center'}}
                                >

                                    ¡Hola somos Kword Agency!
                                </h3>
                                <p
                                    className="subtitle-3"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                    style={{ color: "white" ,textAlign:'center'}}
                                >
                                    <span style={{ background: "#4ABCC9" }}>Escalamos las ventas</span> de tu empresa con anucnios en Facebook, Instagram y Google
                                </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerMain
