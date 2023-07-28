import { FaWhatsapp as Wp } from 'react-icons/fa6'
import { BiEnvelope as Email} from 'react-icons/bi'

function ContactBar (){
    return(
        <header className="bg-primary px-6 py-4">
            <nav className="flex flex-row items-center">

                <span className="text-text font-medium font-titles basis-4/5">Seja bem vindo!</span>
                
                <a href="https://api.whatsapp.com/message/4WMLSCLMQTAVN1?autoload=1&app_absent=0" className="ContactBar-icon"><Wp size={25} color="white"/></a> 
                <a href="mailto:rose@degustarbuffet.com.br"  className="ContactBar-icon"><Email size={30} color="white"/></a>

            </nav>
        </header>
    );
}

export default ContactBar;