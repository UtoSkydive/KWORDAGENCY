import Link from 'next/link';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';

const CallToActionOne = () => {
    // theme-gradient
    return (
        <div className="axil-call-to-action-area shape-position ax-section-gap ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="axil-call-to-action">
                            <SectionTitle
                                title="¿Necesitas ayuda con tus campañas?"
                                subtitle="Trabajemos juntos"
                                color="extra04-color"
                                alignment="center"
                            />
                            <div className="text-center">
                                <Link
                                    className="axil-button"
                                    data-hover="Learn More"
                                    href={`/contact`}
                                >
                                    <a className="axil-button btn-large btn-transparent" >
                                        <span className="button-text">Contáctanos</span>
                                        <span className="button-icon" />
                                    </a>
                                </Link>

                                <div className="callto-action">
                                    <span className="text">
                                        O llamanos
                                    </span>
                                    <span style={{
                                        display: "flex",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}>
                                        <i className="fal fa-phone-alt" />
                                        <a href="tel:+57 3183806240">3183806240</a>
                                        <Image
                                            width={40}
                                            height={40}
                                            src="/images/flat/colombia.png"
                                            alt="founder Image"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-01">
                    <i className="icon icon-shape-14" />
                </div>
                <div className="shape shape-02">
                    <i className="icon icon-shape-09" />
                </div>
                <div className="shape shape-03">
                    <i className="icon icon-shape-10" />
                </div>
                <div className="shape shape-04">
                    <i className="icon icon-shape-11" />
                </div>
            </div>
        </div>
    );
};

export default CallToActionOne;
