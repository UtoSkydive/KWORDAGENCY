import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SectionTitle from "../components/common/SectionTitle";
import ContactFormThree from "../components/forms/ContactFormThree";
import Layout from "../components/layouts/Layout";
import Image from "next/image";

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contacto</title>
            </Head>

            <Breadcrumb title="Contacto" current="Contacto"/>

            <main className="main-wrapper">
                <div className="axil-contact-area axil-shape-position ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-xl-5 col-12">
                                <div className="contact-form-wrapper">
                                    <div className="axil-contact-form contact-form-style-1">
                                        <h3 className="title">Obtén un presupuesto gratuito de Keystroke ahora.</h3>
                                      {/*<ContactFormThree/>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                                <div className="axil-address-wrapper">
                                    <div
                                        className="axil-address"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Telefono</h4>
                                                <p>
                                                Nuestro servicio de atención al cliente está abierto de lunes a viernes, de 10:00 a. m. a 6:00 p. m
                                                </p>
                                                <p>
                                                    <a className="axil-link" href="tel:1234567890">
                                                        (56) 3012046334
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="axil-address mt--60 mt_sm--30 mt_md--30"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Email</h4>
                                                <p>
                                                Nuestro equipo de soporte se comunicará contigo en un plazo de 48 horas durante el horario comercial estándar
                                                </p>
                                                <p>
                                                    <a
                                                        className="axil-link"
                                                        href="mailto:example@gmail.com"
                                                    >
                                                        example@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-group">
                        <div className="shape shape-01">
                            <i className="icon icon-contact-01"/>
                        </div>
                        <div className="shape shape-02">
                            <i className="icon icon-contact-02"/>
                        </div>
                        <div className="shape shape-03">
                            <i className="icon icon-contact-03"/>
                        </div>
                    </div>
                </div>

                <div className="axil-office-location-area ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title="Nuestras Oficinas"
                                    subtitle="Donde estamos?"
                                    color="extra04-color"
                                    alignment="center"
                                />
                            </div>
                        </div>
                        <div className="row mt--30 " >
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-01.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Colombia</h4>
                                        <p>
                                            Piedecuesta <br/> Santander
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">Ver en Mapa</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-02.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Nevada</h4>
                                        <p>
                                            46 Watsica Creek Suite 071 <br/> United States
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-01.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Columbia</h4>
                                        <p>
                                            7140 Wehner Tunnel <br/> Washington, D.C
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-01.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">New Mexico</h4>
                                        <p>
                                            10 Maggie Valleys , <br/> United States
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
    </div>*/}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Contact;
