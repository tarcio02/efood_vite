import { styled } from "styled-components";
import { cores } from "../../styles";

export const PerfilContainer = styled.div`

.capa{
    height: 280px;
    position: relative;

    img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .capa_titulo{
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: space-between;
        height: 100%;
        padding: 24px 0;
        left: 172px;
        top: 0;
        color: ${cores.branco1};
        z-index: 10;

        span{
            font-weight: 100;
            font-size: 32px;
        }

        h2{
            font-weight: 900;
            font-size: 32px;
        }
    }
}

.capa::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor preta com 50% de opacidade */

}


`