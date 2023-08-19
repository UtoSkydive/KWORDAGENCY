import Head from 'next/head';
import {useEffect, useState} from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import VideoPlayer from '../../components/common/VideoPlayer';
import CounterTwo from '../../components/counters/CounterTwo';
import Layout from '../../components/layouts/Layout';
import TeamMember from '../../components/teams/TeamMember';
import TeamData from '../../data/Team.json';
import {flatDeep} from '../../helpers/utilities';
import Image from "next/image";

const Team = () => {
    const [isWindow, setIsWindow] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [activeDepartment, setActiveDepartment] = useState(0);

    const getDepartments = () => {
        let allDepartments = TeamData.map((item) => item.department),
            singleDepartmentArray = flatDeep(allDepartments),
            departments = "";

        departments = singleDepartmentArray.reduce((a, b) => {
            if (a.indexOf(b) < 0) {
                a.push(b);
            }
            return a;
        }, []);

        setDepartments(departments);
    };

    useEffect(() => {
        getDepartments();
        setIsWindow(true);
    }, []);

    return (
        <Layout>
            <Head>
                <title>Team</title>
            </Head>

            <main className="page-wrapper">
                <div className="axil-breadcrumb-area breadcrumb-style-2 team-group-thumb pt--170 pb--70 theme-gradient">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30">
                                <div className="inner">
                                    <h2 className="title">Conoce el talento y la experiencia</h2>
                                    <p>
                                    Haz crecer tu negocio con la ayuda de los expertos.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="thumbnail text-start text-lg-end">
                                    <div className="image-group">
                                        <Image
                                            width={370}
                                            height={466}
                                            className="image-1"
                                            src="/images/slider/white-shape.png"
                                            alt="Slider images"
                                        />
                                    </div>
                                    <div className="shape-group">
                                        <div className="shape shape-1">
                                            <Image
                                                width={190}
                                                height={285}
                                                src="/images/slider/human-1.svg"
                                                alt="Shape Images"
                                            />
                                        </div>
                                        <div className="shape shape-2">
                                            <Image
                                                width={193}
                                                height={319}
                                                src="/images/slider/human-2.svg"
                                                alt="Shape Images"
                                            />
                                        </div>
                                        <div className="shape shape-3">
                                            <Image
                                                width={226}
                                                height={373}
                                                src="/images/slider/human-3.svg"
                                                alt="Shape Images"
                                            />
                                        </div>
                                        <div className="shape shape-4">
                                            <Image
                                                width={274}
                                                height={383}
                                                src="/images/slider/human-4.svg"
                                                alt="Shape Images"
                                                layout="fixed"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CounterTwo/>

                <div className="axil-team-area ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-xl-4">
                                <div className="section-title text-start">
                                    <h2 className="title mb--0">
                                        <span>Nuestro Equipo</span>
                                    </h2>
                                </div>
                            </div>
                         
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className={`tab-pane fade ${
                                    activeDepartment === 0 ? "show active" : ""
                                }`}
                                id="allDepartment"
                                role="tabpanel"
                                aria-labelledby="allDepartment-tab"
                            >
                                <div className="row">
                                    {TeamData?.map((team, teamIndex) => (
                                        <div
                                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt--60 mt_sm--30 mt_md--30"
                                            key={`team-${teamIndex}`}
                                        >
                                            <TeamMember team={team}/>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {departments?.map((department, index) => (
                                <div
                                    key={`${department.replace(" ", "")}-tab`}
                                    className={`tab-pane fade ${
                                        activeDepartment === index + 1 ? "show active" : ""
                                    }`}
                                    id={department.replace(" ", "")}
                                    role="tabpanel"
                                    aria-labelledby={`${department.replace(" ", "")}-tab`}
                                >
                                    <div className="row">
                                        {TeamData?.map((team, teamIndex) => {
                                            if (team.department.includes(department)) {
                                                return (
                                                    <div
                                                        className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt--60 mt_sm--30 mt_md--30"
                                                        key={`team-${teamIndex}`}
                                                    >
                                                        <TeamMember team={team}/>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
            </main>
        </Layout>
    );
};

export default Team;
