import { PerfilContainer } from "./style";
import { Listagem } from "../../styles";
import CardPerfil from "../../components/CardPerfil";
import pizza from "../../assets/images/ladolce_pizza.svg"
import macarrao from "../..//assets/images/lodolce_macarrao.svg"
import Header from "../../components/Header"

const pratos = [
    {
        id: 1,
        foto: pizza,
        nome: 'Pizza Marguerita',
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        nota: 4.2,
        origem: 'japonesa'
    },
    {
        id: 2,
        foto: pizza,
        nome: 'Hioki Sushi',
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        nota: 4.2,
        origem: 'japonesa'
    },
    {
        id: 3,
        foto: pizza,
        nome: 'Hioki Sushi',
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        nota: 4.2,
        origem: 'japonesa'
    },
    {
        id: 4,
        foto: pizza,
        nome: 'Hioki Sushi',
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        nota: 4.2,
        origem: 'japonesa'
    },
    {
        id: 5,
        foto: pizza,
        nome: 'Hioki Sushi',
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        nota: 4.2,
        origem: 'japonesa'
    }
]

function ListagemPerfil() {
    return(
        <PerfilContainer>
            <Header />
            <div className="capa">
                <img src={macarrao} alt="macarrao"></img>
                <div className="capa_titulo">
                    <span>Italiana</span>
                    <h2>La Dolce Vita Trattoria</h2>
                </div>
            </div>
            <div className="container">
                <Listagem>
                {
                    pratos.map( (prato) => (
                        <li key={prato.id}>
                            <CardPerfil 
                                img={prato.foto}
                                titulo={prato.nome}
                                descricao={prato.descricao}
                            />
                        </li>
                    ))
                }
                </Listagem>
            </div>
        </PerfilContainer>
    )
}

export default ListagemPerfil