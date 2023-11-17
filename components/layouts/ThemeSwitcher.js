import Image from 'next/image';
import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        // setDarkMode((prev) => !prev);

        // if (darkMode) {
        //     window.localStorage.setItem('theme', 'light');
        // } else {
        //     window.localStorage.setItem('theme', 'dark');
        // }
    };

    // useEffect(() => {
    //     const body = document.querySelector('body'),
    //         theme = window.localStorage.getItem('theme');

    //     if (theme === 'dark') {
    //         setDarkMode(true);
    //         body.classList.add('active-dark-mode');
    //         body.classList.remove('active-light-mode');
    //     } else {
    //         setDarkMode(false);
    //         body.classList.add('active-light-mode');
    //         body.classList.remove('active-dark-mode');
    //     }
    // }, [darkMode]);

    return (
        <div  className='my_switcher'>
        <a  href="https://wa.me/message/LTCNZ2HVXPKGA1" target="blank">
            <button
                type="button"

                style={{
                    position: 'fixed',
                    width: '60px',
                    height: '60px',
                    bottom: '60px',
                    left: '40px',
                    backgroundColor: '#25d366',
                    color: '#FFF',
                    borderRadius: '50px',
                    textAlign: 'center',
                    fontSize: '30px',
                    boxShadow: '2px 2px 3px #999',
                    zIndex: '1300',
                }}
                onClick={() => toggleTheme()}
            >
                <WhatsAppIcon />
            </button>
        </a>
        </div>
    );
};

export default ThemeSwitcher;
