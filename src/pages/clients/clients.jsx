import Danone from "../../assets/imgs/danone.png"
import Ems from "../../assets/imgs/ems.png"
import Apsen from "../../assets/imgs/apsen.png"
import Crist from "../../assets/imgs/crist.jpg"
import Labor from "../../assets/imgs/labor.jpg"
import Fuji from "../../assets/imgs/fuji.png"
import Rodo from "../../assets/imgs/rodo.png"
import Ouro from "../../assets/imgs/ouro.jpg"
import Gk from "../../assets/imgs/gk.jpg"

function Clients () {
    return (
        <div className="px-6 text-center">
            <div className="my-11">
                <h1 className="mb-4 text-[2rem]">Clientes</h1>
                <p className="font-text">Emocionando pessoas e empresas com experiências gastronômicas inesquecíveis. Conheça nossos protagonistas, e <b>venha fazer parte da nosso história.</b> </p>
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