import { CardBoxModal, ModalBackground } from "./styles";
import pizza from "../../assets/images/pizza_modal.svg"
import { useEffect } from "react";
const titulo = "pizza marguerita"
const descricao = "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião."
const quantidade = "de 2 a 3 pessoas"
const preco = "69,90"

// export interface Props{
//     show: boolean,
//     onClose?: (Event: React.MouseEvent<HTMLButtonElement>) => void
// }

function CardaModal({ show, onClose }){
    //função para desativar o scroll quando o modal for aberto
    useEffect(() => {
        if (show) {
            window.scroll({top: 186, behavior: "smooth"})
            document.body.style.overflow = "hidden"; // Desativa o scroll
        } else {
            document.body.style.overflow = "auto"; // Reativa o scroll
        }
    }, [show]);





    return (
        <ModalBackground show={show}>
            <CardBoxModal show={show}>
                <button className="closeButton" onClick={onClose}>&times;</button>
                <img src={pizza} alt="pizza"></img>
                <div className="descricao">
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                    <span>{quantidade}</span>
                    <button>Adicionar ao carrinho - R$ {preco}</button>
                </div>
            </CardBoxModal>
        </ModalBackground>
    )
}

export default CardaModal