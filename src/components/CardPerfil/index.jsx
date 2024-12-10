import { useState } from "react";
import { CardBoxPerfil } from "./styles";
import CardaModal from "../CardModal";

// interface Props{
//     img: string,
//     titulo: string,
//     descricao: string
// }

function CardPerfil({img, titulo, descricao}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    return (
        <>  
            <CardBoxPerfil>
                {/* <GlobalCss isModalOpen={isModalOpen} /> */}
                <img src={img} alt={titulo}></img>
                <div className="descricao">
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                    <button  onClick={openModal}>Mais detalhes</button>
                </div>
            </CardBoxPerfil>
            <CardaModal show={isModalOpen} onClose={closeModal}/>
        </>
    )
}

export default CardPerfil