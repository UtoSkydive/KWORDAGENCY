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
                    <div className="container" >
                        <div className="contact-form-wrapper">
                            <div className="axil-contact-form contact-form-style-1">
                                <div style={{width:'70%',margin:'0 auto'}}>
                                    <h3 className="title">¿Necesitas ayuda con tus camapañas?</h3>
                                    <ContactFormThree/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-group" >
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
            </main>
        </Layout>
    );
};

export default Contact;
