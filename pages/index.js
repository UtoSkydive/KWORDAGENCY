import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import AboutOne from '../components/abouts/AboutOne';
import BlogOne from '../components/blogs/BlogOne';
import BrandOne from '../components/brands/BrandOne';
import CallToActionOne from '../components/call-to-actions/CallToActionOne';
import CounterOne from '../components/counters/CounterOne';
import Layout from '../components/layouts/Layout';
import PortfolioOne from '../components/portfolio/PortfolioOne';
import PricingOne from '../components/pricings/PricingOne';
import ServiceOne from '../components/services/ServiceOne';
import BannerOne from '../components/banners/BannerOne';
import SliderOne from '../components/sliders/SliderOne';
import TeamOne from '../components/teams/TeamOne';
import TestimonialOne from '../components/testimonials/TestimonialOne';
import BrandData from '../data/Brands.json';
import certificatData from '../data/CertificateData.json';
import socialData from '../data/socialNetworkData.json';
import BannerMain from '../components/banners/BannerMain';
import BannerPhoto from '../components/banners/BannerPhoto';



const HomeOne = ({posts}) => {
    return (
        <Layout>
            <Head>
                <title>Kword Agency</title>
            </Head>

            <main className="page-wrapper">

                <BannerMain/>
                {/*<BannerOne />*/}
                
                <BannerPhoto/>
                <ServiceOne/>

                {/*<SliderOne/>*/}

                <BrandOne title={'Plataformas y Certificados'} subtitle={'Certificados'} brandData={false} data ={certificatData} sliceNumber={3}/>

                <AboutOne/>

                {/*<PortfolioOne/>*/}

                

                {/*<TestimonialOne/>*/}

                <BrandOne data={BrandData}/>

                <CounterOne/>

                {/*<BrandOne title={'Redes Sociales'} subtitle={'síguenos'} brandData={false} data ={socialData}/>*/}

                {/*<TeamOne/>*/}

                {/* <PricingOne/>*/} 

                

                {/*<BlogOne posts={posts.slice(0, 2)}/>*/}

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default HomeOne;

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("data/posts"));

    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        const mardownWithMeta = fs.readFileSync(
            path.join("data/posts", filename),
            "utf-8"
        );

        const {data: postdata} = matter(mardownWithMeta);

        return {
            slug,
            date: postdata.publishedAt,
            postdata,
        };
    });

    return {
        props: {
            posts: posts
        },
    };
}
