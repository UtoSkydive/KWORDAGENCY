import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerPhoto = () => {
    return (
        <div className="axil-slider-area axil-slide-activation" style={{display:'flex',justifyContent:'center'}}>
            <div className="row m-5 w-75" >
                <div className="col-sm">
                    <Image
                        width={480}
                        height={480}
                        src="/images/others/pic.png"
                        alt="founder Image"
                    />
                </div>
                <div className="col-sm" style={{display: "flex",alignItems: "center", justifyContent:"center",justifyItems:'center'}}>
                    <div>
                        <h3>¿Necesitas Vender en Internet?</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                        <Link href="/contact">
                            <button type="button" className="btn btn-primary">Contactanos</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerPhoto


// <div
// style={{ background: "#FFF", height: '70vh', display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
// <div className="container" style={{ width: '70%' }}>
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
//         <div className="col-lg-6 col-12">
//             <Image
//                 width={460}
//                 height={420}
//                 src="/images/others/pic.png"
//                 alt="Keystoke Images"
//             />
//         </div>
//         <div className="col-lg-7 col-12">
//             <h3>What is Lorem Ipsum?</h3>
//             <p style={{ textAlign: 'justify' }}>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
//             <Link href="/contact">
//                 <a className="axil-button btn-large btn-transparent"
//                     data-aos="aos-fade-in-up"
//                     data-aos-duration="1000"
//                     data-aos-delay="400"
//                     style={{ border: "2px solid white" }}
//                 >

//                     <span className="button-text" style={{ color: "#1E3868" }}>Contacto</span>
//                     <span className="button-icon" style={{ coloe: "#1E3868" }} />
//                 </a>
//             </Link>
//         </div>
//     </div>
// </div>
// </div>
