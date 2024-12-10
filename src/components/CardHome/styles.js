import styled from "styled-components";
import { cores } from "../../styles";

export const CardBox = styled.div`
    // estilização do container principal
    display: grid;
    background-color: ${cores.branco1};
    border: 1px solid ${cores.vermelho} ;

    //estilizaçã da capa do card
    .capa{
        position: relative;
        height: 217px;

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    //texto de sobreposição da capa
    .info{
        position: absolute;
        display: flex;
        gap: 8px;
        top: 16px;
        right: 16px;
        color: ${cores.pessego};

        .destaque{
            display: ${(props) => (props.destaque ? 'flex' : 'none')};
        }

            span{
                padding: 8px;
                font-size: 12px;
                font-weight: 700;
                background-color: ${cores.vermelho};
            }
        }

//estilização da parte de descrição do pedido
    .descricao{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 188px;
        padding: 8px;

        .titulo{
            display: flex;
            justify-content: space-between;
            align-items: start;
            height: 21px;

        .avaliacao{
            display: flex;
            justify-items: center;
            gap: 4px;

            p{
                font-size: 18px;
                font-weight: 700;
            }
        }
    }

        p{
            text-align: start;
            line-height:22px;
        }

        .button{
            background-color: ${cores.vermelho};
            color: ${cores.pessego};
            border: none;
            width: 96px;
            padding: 8px;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
            font-weight: 700;
        } 
}
` 