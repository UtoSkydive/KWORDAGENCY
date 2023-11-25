import Image from "next/image";
import reactLogo from '/public/images/logo/logo.png'

const Logo = () => {
    return (
        <div >
            <Image src={reactLogo} width={160} height={55} alt="logo" className="logoKword" />
        </div>
    )
}

export default Logo;