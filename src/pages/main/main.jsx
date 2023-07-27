import MobileScren from "../../components/mobile-screen";
import Img from "../../assets/imgs/img.jpg"
import TopScreen from "../../components/top-screen";
import ContactBar from "../../components/contact-bar";

function Main (){

    const content =
        <div>
            <div className="sticky w-full top-0 z-50">
                <TopScreen />
                <ContactBar />
            </div>

            <div className="h-[396px] w-full relative">
                <div className="w-full h-2/4" id="background"></div>
                <img src={Img} alt="img" className="w-full h-full" />
            </div>
        </div>
        


    return( 
        <MobileScren content={content} />
    );  
}

export default Main;