import Image from "next/image";

const Logo = ({variant = 'one', fillTextColor = '#1E3868'}) => {
    return (
        <div >
            <Image src="/images/logo/2.png" width={100} height={100} alt="logo" style={{border:'1px solid red'}}/>
        </div>
    )
}

export default Logo;