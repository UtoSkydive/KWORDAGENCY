import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../common/Logo';
import FooterMenu from '../../data/FooterMenu.json';
import Image from 'next/image'

const Footer = ({ footerSetting = {} }) => {
    function changeBackground(e) {
        e.target.style.color = '#4ABCC9';
      }
    function resetBackground(e) {
        e.target.style.color = 'white';
      }

    return (
        <footer className='axil-footer footer-default'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1e3868" fillOpacity="1" d="M0,64L34.3,85.3C68.6,107,137,149,206,170.7C274.3,192,343,192,411,181.3C480,171,549,149,617,165.3C685.7,181,754,235,823,256C891.4,277,960,267,1029,272C1097.1,277,1166,299,1234,272C1302.9,245,1371,171,1406,133.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
            <div className='bg_image--2' style={{background:'#1E3868'}}>
                <div className="ft-social-icon-wrapper ax-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="ft-social-share d-flex justify-content-center liststyle flex-wrap">
                                    {FooterMenu.social?.map((socialItem, index) => (
                                        <li key={`social-${index}`}>
                                            <a href={socialItem.url} target="_blank" rel="noreferrer" style={{fontSize:'32px'}}  onMouseOver={changeBackground} onMouseLeave={resetBackground} >
                                                <i className={`fab ${socialItem.icon}`  } style={{color:'#fff'}} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget-item axil-border-right">

                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-sm">
                            <Image
                                src="/images/logo/logofin.png"
                                width={350}
                                height={350}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="col-sm" style={{display: "flex",alignItems: "center", justifyContent:"center"}}>
                            <div>
                                <h2 style={{color:"white"}}>Contáctanos!</h2>
                                <p style={{color:"white"}} >
                                    Escríbenos por Whatsap
                                </p>
                                <div className="axil-newsletter">
                                    <a className="axil-button" style={{background:'#25d366'}} href="whatsapp://send?abid=+573154754597&text=Hello%2C%20World!" target="blank">
                                        <span className="button-text " style={{color:'white'}}>Whatsap</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright copyright-default">
                    <div className="container">
                        <div className="row row--0 ptb--20 axil-basic-thine-line" style={{color:"#FFF"}}>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="inner text-center text-md-start" >
                                    <p style={{color:"#FFF"}}>© 2023. All rights reserved by Kword Agency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
