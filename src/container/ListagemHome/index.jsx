import {  HomeContainer } from "./styles";
import { Listagem } from "../../styles";
import CardHome from "../../components/CardHome";
import hioki from "../../assets/images/hioki_sushi.svg"
import logo from "../../assets/images/logo.svg"
import macarrao from "../../assets/images/lodolce_macarrao.svg"

function ListagemHome() {

    const pratos = [
        {
            id: 1,
            foto: hioki,
            nome: 'Hioki Sushi',
            descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
            nota: 4.2,
            origem: 'japonesa',
            destaque: true
        },
        {
            id: 2,
            foto: macarrao,
            nome: 'La Dolce',
            descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            nota: 4.9,
            origem: 'Italiana',
            destaque: true
        },
        {
            id: 3,
            foto: macarrao,
            nome: 'La Dolce',
            descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            nota: 4.6,
            origem: 'Italiana',
            destaque: false
        },
        {
            id: 4,
            foto: macarrao,
            nome: 'La Dolce',
            descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            nota: 4.6,
            origem: 'Italiana',
            destaque: false
        },
        {
            id: 5,
            foto: macarrao,
            nome: 'La Dolce',
            descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            nota: 4.6,
            origem: 'Italiana',
            destaque: true
        }
    ]

return (
    <HomeContainer>
        <div className="topo">
            <img src={logo} alt="efood" ></img>
            <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </div>
        <Listagem>
            {
                pratos.map( (prato) => (
                    <li key={prato.id}>
                        <CardHome 
                            foto={prato.foto}
                            nome={prato.nome}
                            descricao={prato.descricao}
                            tipo={prato.origem}
                            nota={prato.nota}
                            destaque={prato.destaque}
                        />
                    </li>
                ))
            }
        </Listagem>
    </HomeContainer>
)
}

export default ListagemHome