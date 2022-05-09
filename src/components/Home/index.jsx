import { BsCalendarPlus } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import logo from "../../images/logo-1.png"
import StyledHome from "./styles.js"
import { Reserva } from "../Reserva"
import { Link } from "react-router-dom"
export function Home({ reservas }) {
    return (
        <StyledHome>
            <div className="Header">
                <h3 className="Title">Agendamento das Salas de Coworking </h3>
                <img className="Logo" src={logo}></img>
            </div>
            <div className="body">
                <div className="BodyHome">
                    <div id="BodyTitle">
                        Minhas Reservas
                    </div>
                    {reservas.map((item) => {
                        return <Reserva reserva={item} />


                    })


                    }
                </div>


            </div>
            <div className="footer">
                <Link to="/">
                    <div className="Tab" id="TabHome">



                        <AiOutlineHome size={32} color={'orange'} />
                        <div className="TabText" id="TabHomeText">
                            Tela Inicial
                        </div>


                    </div>

                </Link>
                <Link to="/Form">
                    <div className="Tab"  id="TabForm">

                        <BsCalendarPlus size={30} color={'black'} />
                        <div className="TabText" id="TabCreateText">
                            Agendar
                        </div>
                    </div>
                </Link>
            </div >
        </StyledHome>

    )


}