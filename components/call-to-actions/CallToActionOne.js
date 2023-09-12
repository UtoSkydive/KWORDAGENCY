import SectionTitle from '../common/SectionTitle';

const CallToActionOne = () => {
    // theme-gradient
    return (
        <div className="axil-call-to-action-area shape-position ax-section-gap ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="axil-call-to-action">
                            <SectionTitle
                                title="¿Necesitas un proyecto exitoso?"
                                subtitle="Trabajemos juntos"
                                color="extra04-color"
                                alignment="center"
                            />
                            <div className="text-center">
                                <a className="axil-button btn-large btn-transparent" href="#">
                                    <span className="button-text">Cotiza Tu proyecto</span>
                                    <span className="button-icon"/>
                                </a>
                                <div className="callto-action">
                                    <span className="text">
                                     O llamanos
                                    </span>
                                    <span>
                                      <i className="fal fa-phone-alt"/>
                                      <a href="tel:(57) 3012046334">(57) 3012046334</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-01">
                    <i className="icon icon-shape-14"/>
                </div>
                <div className="shape shape-02">
                    <i className="icon icon-shape-09"/>
                </div>
                <div className="shape shape-03">
                    <i className="icon icon-shape-10"/>
                </div>
                <div className="shape shape-04">
                    <i className="icon icon-shape-11"/>
                </div>
            </div>
        </div>
    );
};

export default CallToActionOne;
