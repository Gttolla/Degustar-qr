import Event from "../../assets/imgs/events/event1.jpg"
import Event1 from "../../assets/imgs/events/event2.jpg"
import Event2 from "../../assets/imgs/events/event3.jpg"
import Event3 from "../../assets/imgs/events/event4.jpg"
import Event4 from "../../assets/imgs/events/event5.jpg"
import Event5 from "../../assets/imgs/events/event6.jpg"
import Event6 from "../../assets/imgs/events/event7.jpg"
import Event7 from "../../assets/imgs/events/event8.jpg"
import Event8 from "../../assets/imgs/events/event9.jpg"
import Event9 from "../../assets/imgs/events/event10.jpg"
import Event10 from "../../assets/imgs/events/event11.jpg"


function Events () {
    return(
        <div className="pt-11 pb-2 px-6 text-center">
            <h1 className="title">Galeria de <br/> enventos</h1>

            <div className="flex flex-col object-cover object-center gap-6 mt-8">
                <img src={Event} alt="event-img" />
                <img src={Event1} alt="event-img" />
                <img src={Event2} alt="event-img" />
                <img src={Event3} alt="event-img" />
                <img src={Event4} alt="event-img" />
                <img src={Event5} alt="event-img" />
                <img src={Event6} alt="event-img" />
                <img src={Event7} alt="event-img" />
                <img src={Event8} alt="event-img" />
                <img src={Event9} alt="event-img" />
                <img src={Event10} alt="event-img" />
            </div>
        </div>
    );
}

export default Events;