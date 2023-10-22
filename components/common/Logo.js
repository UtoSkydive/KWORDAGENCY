import Image from "next/image";
import reactLogo from '/public/images/logo/full.png'

const Logo = () => {
    return (
        <div >
            <Image src={reactLogo} width={300} height={108} alt="logo" className="logoKword" />
        </div>
    )
}

export default Logo;