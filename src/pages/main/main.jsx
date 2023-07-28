import { FaWhatsapp as Wp, FaFacebook as Face, FaInstagram as Insta,  } from 'react-icons/fa6'
import { TbWorldWww as Site } from 'react-icons/tb'

import MobileScren from "../../components/mobile-screen";
import TopScreen from "../../components/top-screen";
import ContactBar from "../../components/contact-bar";

import Img from "../../assets/imgs/img.jpg"
import Logo from "../../assets/imgs/logo.jpg"

function Main (){

    const content =
        <div>
            <div className="sticky w-full top-0 z-50">
                <TopScreen />
                <ContactBar />
            </div>

            <div className="h-[396px] w-full relative">
                <div className="w-full h-1/2" id="gradient">
                    <div className="flex items-center mt-4">
                        <div className="h-24 w-24 p-2 mr-2 bg-white rounded-full border-[3px] overflow-hidden border-primary">
                            <img src={Logo} alt="logo" className="h-full w-full"/>
                        </div>

                        <div className="leading-5">
                            <span className="font-titles text-[20px]">Degustar Buffet</span>
                            <br />
                            <span className="text-black text-opacity-50 font-medium font-titles text-[14px]">Eventos empresariais</span>
                        </div>
                    </div>

                    <h1 className="font-text font-bold text-2xl mt-8 mb-3">Elevando o Paladar</h1>
                    <p className="font-text">Descubra o sabor inesquecível com a Degustar Buffet! Criamos experiências gastronômicas extraordinárias para eventos corporativos, com um cardápio personalizado que vai do simples ao refinado. Escolha a Degustar Buffet e eleve o nível do seu próximo evento, onde sabor e emoção se encontram em perfeita harmonia!</p>
                    
                    <div className="flex w-full mt-8 justify-between">
                        <div className="social-icons"><Wp size={30}/></div>
                        <div className="social-icons"><Insta size={30}/></div>
                        <div className="social-icons"><Face size={30}/></div>
                        <div className="social-icons"><Site size={30}/></div>
                    </div>
                </div>

                <img src={Img} alt="img" className="w-full h-full" />
            </div>
        </div>
        


    return( 
        <MobileScren content={content} />
    );  
}

export default Main;