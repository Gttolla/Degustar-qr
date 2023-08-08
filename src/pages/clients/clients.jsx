import Danone from "../../assets/imgs/clients/danone.png"
import Ems from "../../assets/imgs/clients/ems.png"
import Apsen from "../../assets/imgs/clients/apsen.png"
import Crist from "../../assets/imgs/clients/crist.jpg"
import Labor from "../../assets/imgs/clients/labor.jpg"
import Fuji from "../../assets/imgs/clients/fuji.png"
import Rodo from "../../assets/imgs/clients/rodo.png"
import Ouro from "../../assets/imgs/clients/ouro.jpg"
import Gk from "../../assets/imgs/clients/gk.jpg"

function Clients () {
    return (
        <div className="px-6 pt-11 text-center">
            <div className="mb-11">
                <h1 className="title mb-4">Clientes</h1>
                <p className="font-text">
                    Conheça os <b>"clientes-chave"</b> que confiam em nós para resolver seus desafios. 
                    <b> Junte-se a eles</b> e experimente soluções reais através dos nossos buffets.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-between gap-7">
                <div className="client-block"><img src={Danone} alt="client" /></div>
                <div className="client-block"><img src={Ems} alt="client" /></div>
                <div className="client-block"><img src={Fuji} alt="client" /></div>
                <div className="client-block"><img src={Apsen} alt="client" /></div>
                <div className="client-block"><img src={Rodo} alt="client" /></div>
                <div className="client-block"><img src={Crist} alt="client" /></div>
                <div className="client-block"><img src={Labor} alt="client" /></div>
                <div className="client-block"><img src={Ouro} alt="client" /></div>
                <div className="client-block"><img src={Gk} alt="client" /></div>
            </div>
        </div>
    );
}

export default Clients;