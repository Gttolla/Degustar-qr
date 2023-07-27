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
                        <div className="h-24 w-24 p-2 mr-2 bg-white rounded-full border-[3px] border-primary">
                            <img src={Logo} alt="logo" className="h-full w-full rounded-full"/>
                        </div>

                        <div className="leading-5">
                            <span className="text-black font-titles text-[20px]">Degustar Buffet</span>
                            <br />
                            <span className="">Eventos empresariais</span>
                        </div>
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