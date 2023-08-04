import { Link } from 'react-router-dom';

import Msg from '../../components/msg';
import Slider from '../../components/slider';

import { FaWhatsapp as Wp, FaFacebook as Face, FaInstagram as Insta, } from 'react-icons/fa6'
import { TbWorldWww as Site } from 'react-icons/tb'

import Logo from "../../assets/imgs/logo.jpg"
import Events from "../../assets/imgs/events.jpg"
import Clients from "../../assets/imgs/clients/clients.jpg"

function Main() {
    return (
        <div>
            <div className="relative" id="image-gradient">

                <Slider />

                <div id="gradient">
                    <div className="flex items-center">
                        <div className="h-24 w-24 p-2 mr-2 bg-white rounded-full border-[3px] overflow-hidden border-primary">
                            <img src={Logo} alt="logo" className="h-full w-full" />
                        </div>

                        <div className="leading-5">
                            <span className="font-titles text-[20px]">Degustar Buffet</span>
                            <br />
                            <span className="text-black text-opacity-50 font-medium font-titles text-[14px]">Eventos empresariais</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="px-6 pt-8">
                <h1 className="mb-3">Elevando o Paladar</h1>
                <p className="font-text">Descubra o sabor inesquecível com a Degustar Buffet! Criamos experiências gastronômicas extraordinárias para eventos corporativos, com um cardápio personalizado que vai do simples ao refinado. Escolha a Degustar Buffet e eleve o nível do seu próximo evento, onde sabor e emoção se encontram em perfeita harmonia!</p>

                <div className="flex w-full my-9 justify-between flex-wrap gap-2">
                    <a href="https://api.whatsapp.com/message/4WMLSCLMQTAVN1?autoload=1&app_absent=0" className="social-icons"><Wp size={30} /></a>
                    <a href="https://www.instagram.com/degustar.buffet/" className="social-icons"><Insta size={30} /></a>
                    <a href="https://m.facebook.com/degustarbuffetoficial" className="social-icons"><Face size={30} /></a>
                    <a href="https://www.degustarbuffet.com.br" className="social-icons"><Site size={30} /></a>
                </div>

                <h1>Confira nosso <br /> trabalho!</h1>

                <Link to='/clientes'>
                    <div className="page-block mt-7 mb-8">
                        <img src={Clients} alt="clientes" />
                        <div className="page-block-title">
                            <span className="font-titles">Nossos Clientes</span>
                        </div>
                    </div>
                </Link>

                <Link to='/eventos'>
                    <div className="page-block">
                        <img src={Events} alt="eventos" />
                        <div className='page-block-title'>
                            <span className="font-titles">Eventos</span>
                        </div>
                    </div>
                </Link>
            </div>

            <Msg />
        </div>


    );
}

export default Main;