import styled, { keyframes } from "styled-components";
import { cores } from "../../styles";
// import { Props } from "./index"

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    } 
    to{
        opacity: 0;
    }
`

export const ModalBackground = styled.div`
    display: ${(props) => (props.show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    z-index: 100;
`

export const CardBoxModal = styled.div`
    position: fixed;
    display: flex;
    top: 320px;
    gap: 16px;
    padding: 16px;
    z-index: 101;
    width: calc(100vw - 344px);
    color: ${cores.branco1};
    background-color: ${cores.vermelho};
    animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.3s ease-out;

    .closeButton {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        background-color: transparent;
        border: none;
        font-size: 32px;
        color: ${cores.branco1};
        cursor: pointer;
}

    img{
        width: 280px;
    }

    .descricao{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        line-height: 22px;

        h3{
            font-weight: 900;
            font-size: 18px;
        }

        p{
            font-weight: 400;
            font-size: 14px;
        }

        button{
            font-weight: 700;
            font-size: 14px;
            background-color: ${cores.pessego};
            color: ${cores.vermelho};
            border: none;
            cursor: pointer;
            width: 216px;
            height: 24px;
        }
    }
`

