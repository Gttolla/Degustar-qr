import ContactBar from "./contact-bar";
import TopScreen from "./top-screen";
import Footer from  "./footer"

function MobileScren (props){
    return(
        <div id="container">
            <div className="mobile">
                <div className="overflow-auto" id="screen">
                    <div className="sticky w-full top-0 z-50">
                        <TopScreen />
                        <ContactBar/>
                    </div>

                    {props.content}

                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MobileScren;