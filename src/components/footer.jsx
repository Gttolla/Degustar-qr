import { FaWhatsapp as Wp } from 'react-icons/fa6'
import { BiEnvelope as Email} from 'react-icons/bi'

import Logo from "../assets/imgs/logo.jpg"

function Footer () {
    return(
        <footer className="px-6 py-4 bg-primary font-['Montserrat'] text-[12px] flex">
            
            <div>
                <div className="flex items-center mb-2">
                    <Wp size={20} className="mr-[11px]"/>
                    <p>(11) 987121653</p>
                </div>
                <div className="flex items-center">
                    <Email size={20} className="mr-[11px]"/>
                    <p>rose@degustarbuffet.com.br</p>
                </div>
            </div>

            <div className="border-l-2 pl-4 ml-4 flex items-center">
    
                <img src={Logo} alt="logo" className="rounded-full h-[39px] w-[39px] mr-2"/>

                <div className="leading-3">
                    <span className="font-titles text-[10px]">Degustar Buffet</span>
                    <br />
                    <span className="font-['Montserrat'] text-[8px]">2023</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;