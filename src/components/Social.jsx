import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials =  [
    {icon:<FaGithub/>,path:'https://github.com/EricRaf124'},
    {icon:<FaLinkedinIn/>,path:'https://www.linkedin.com/in/eric-rafanomezantsoa-145790335'},
    {icon:<FaYoutube/>,path:''},
    {icon:<FaTwitter/>,path:'https://x.com/EricRaf124'},
]

const Social = ({containerStyles,iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item,index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}
export default Social;