import { NavLink } from "react-router-dom";
import { CardBox } from "./styles";
import estrela from "../../assets/images/estrela.svg"

// eslint-disable-next-line react/prop-types
function CardHome({foto, nome, descricao, tipo, nota, destaque}){
    return (
        <>
            <CardBox destaque={destaque}>
                <div className="capa">
                    <img src={foto} alt="sushi" />
                    <div className="info">
                        <span className="destaque">Destaque da semana</span>
                        <span>{tipo}</span>
                    </div>
                </div>
                <div className="descricao">
                    <div className="titulo">
                        <h3>{nome}</h3>
                        <div className="avaliacao">
                            <p>{nota}</p>
                            <img src={estrela} alt="estrela" />
                        </div>
                    </div>
                    <p>{descricao}</p>
                    <NavLink className="button" to="/perfil">Saiba mais</NavLink>
                </div>
            </CardBox>
        </>
    )
}

export default CardHome