import ContactBar from "../../components/contact-bar";
import MobileScren from "../../components/mobile-screen";

function Main (){
    const content =
        <ContactBar />
        
    return( 
        <MobileScren content={content} />
    );  
}

export default Main;