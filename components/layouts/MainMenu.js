import Link from 'next/link';
import MainMenuData from '../../data/MainMenu.json';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const MainMenu = () => {
    const { asPath } = useRouter();
    const [filterDataMenu, setFilterData] = useState(MainMenuData);
   
    useEffect(() => {
        if(asPath == '/contact'){
            const filterMainMenu = MainMenuData.filter(item => item.id !== 3 )
            setFilterData(filterMainMenu)
        }
    }, [asPath]);
    
    return (
        <ul className="mainmenu">
            {filterDataMenu?.map((menu, menuIndex) => ( 
                <li
                    className={menu.hasChildren ? "has-dropdown" : ""}
                    key={`menu-item-${menuIndex}`}
                >
                    <Link href={menu.url} className='linkMenuMain'>{menu.title}</Link>
                    {menu.hasChildren && (
                        <ul className="axil-submenu">
                            {menu.clildrens?.map((submenuItem, submenuIndex) => (
                                <li key={`submenu-item-${submenuIndex}`}>
                                    <Link href={submenuItem.url}>{submenuItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MainMenu;
