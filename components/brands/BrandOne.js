import Image from 'next/image';
import { useEffect, useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import Link from "next/link";

const BrandOne = ({
  title = "Hemos construido soluciones para..",
  subtitle = "top clientes",
  description = "",
  bgColor = "bg-color-white",
  brandData = true,
  sliceNumber=7,
  data = [],
}) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandArray = data ? data.slice(0, sliceNumber) : [];
    setBrands(brandArray);
  }, [data,sliceNumber]);

  return (
    <div className={`axil-brand-area ax-section-gap ${bgColor}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-8 col-12">
            <SectionTitle
              title={title}
              subtitle={subtitle}
              description={description}
              color="extra06-color"
              alignment="left"
            />
          </div>
          <div className="col-xl-8 col-lg-8 mt_md--40 mt_sm--40">
            <div className="axil-brand-logo-wrapper">
              <ul className="brand-list liststyle d-flex flex-wrap justify-content-center">
                {brands?.map((brand, index) => (
                  <li key={`brand-${index}`}>
                    <Link href="#">
                      <a>
                        <Image
                            width={brand.image.width}
                            height={brand.image.height}
                            src={brand.image.src}
                            alt="Brand Logo Images"
                        />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
