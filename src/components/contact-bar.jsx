import { FaWhatsapp as Wp } from 'react-icons/fa6'
import { BiEnvelope as Email} from 'react-icons/bi'

function ContactBar (){
    return(
        <header className="bg-primary px-6 py-4">
            <nav className="flex items-center justify-between">

                <span className="text-text font-medium font-titles">Seja bem vindo!</span>
                
                <ul className="m-0 p-0 flex gap-4 items-center" id="contact-icons">
                    <li>
                        <a href="https://api.whatsapp.com/message/4WMLSCLMQTAVN1?autoload=1&app_absent=0"><Wp size={25} color="white"/></a> 
                    </li>
                    <div className=" h-6 border bg-text"></div>     
                    <li>
                        <a href="mailto:rose@degustarbuffet.com.br"><Email size={30} color="white"/></a>
                    </li>
                </ul>
            
            </nav>
        </header>
    );
}

export default ContactBar;