import React from 'react';
import { CgFacebook } from "react-icons/cg";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcStart } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import Logo from '../asset/Images/cropped-Organic.png';


function Nav() {
    const socialIcons = [
        {
            icon: <FaXTwitter />,
            link: "https://x.com/"
        },
        {
            icon: <CgFacebook />,
            link: 'https://facebook.com'
        },
        {
            icon: <FcStart />,
            link: "https://youtube.com"
        },
        {
            icon: < FaPinterestP />,
            link: "https://in.pinterest.com/"
        }
    ]
    return (
        <div className='primary-nav'>
            <img src={Logo} alt="" />
            <div className="mail-info">
                <a href="mailto:info@organicbasket.com">
                    <div className="mail-border">
                        <IoIosMail style={{ transform: 'rotate(-45deg)', color: 'green', height: '20px', width: '20px' }} />
                    </div>
                </a>
                <div className="mail-text">
                    <h4>Email Address</h4>
                    <p>info@organicbasket.com</p>
                </div>
            </div>
            <hr className='nav-hr' />
            <div className="mail-info">
                <a href="tel:+000012321545648">
                    <div className="mail-border">
                        <TbPhoneCall style={{ transform: 'rotate(-45deg)', color: 'green', height: '20px', width: '20px' }} />
                    </div>
                </a>
                <div className="mail-text">
                    <h4>24/7 In Touch</h4>
                    <p>000012321545648</p>
                </div>
            </div>
            <hr className='nav-hr' />
            <div className="nav-icons">
                {
                    socialIcons.map((item, index) => {
                        return (<a href={item.link} key={index}>{item.icon}</a>)
                    })
                }
            </div>
        </div>
    )
}


export default Nav
