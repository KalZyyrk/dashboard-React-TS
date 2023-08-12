import {useState} from "react";
import { motion} from "framer-motion";
// @ts-ignore
import {UilBars, UilSignOutAlt} from '@iconscout/react-unicons'

// @ts-ignore
import Logo from '../../imgs/logo.png'

import './Sidebar.css'
import {SidebarData} from "../../constants/constants";
import {ISidebarItem} from "../../types/types";

const Sidebar: React.FC = () => {
    const [selected, setSelected] = useState<number>(0);
    const [expanded, setExpanded] = useState<boolean>(true);

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    return (
        <>
            <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={() => setExpanded(!expanded)}>
                <UilBars />
            </div>
            <motion.div className="sidebar" variants={sidebarVariants} animate={window.innerWidth<=763?`${expanded}`:''}>
                <div className="logo">
                    <img src={Logo}/>
                    <span>
                        Sh<span>o</span>ps
                    </span>
                </div>
                <div className="menu">
                    {SidebarData.map((item: ISidebarItem, index: number) => (
                        <div className={selected === index ? "menuItem active" : "menuItem"}>
                            <item.icon/>
                            <span>{item.heading}</span>
                        </div>
                    ))}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Sidebar;