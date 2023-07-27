import { FaWhatsapp as Wp } from 'react-icons/fa6'
import { BiEnvelope as Email} from 'react-icons/bi'

function ContactBar (){
    return(
        <header className="bg-primary px-6 py-4">
            <nav className="flex flex-row items-center">

                <span className="text-text font-medium font-titles basis-4/5">Seja bem vindo!</span>
                
                <Wp className="ContactBar-icon" size={25} color="white"/>
                <Email className="ContactBar-icon" size={30} color="white"/>

            </nav>
        </header>
    );
}

export default ContactBar;