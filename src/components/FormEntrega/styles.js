import styled from "styled-components";
import { cores } from "../../styles";

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    color: ${cores.pessego};

    h3{
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 16px;
    }

    label{
        font-size: 14px;
        font-weight: 700;
    }

    input{
        height: 32px;
        width: 100%;
        color: #4B4B4B;
        background-color: ${cores.pessego};
        border: none;
        font-size: 14px;
        font-weight: 700;
        padding: 8px;
    }

    input:focus {
        outline: none;
        border: none;
}

    .form{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .number{
        display: flex;
        gap: 32px;

        .num input{
            margin-top: 8px;
        }
    }

    .btn {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 24px;

        .button{
            height: 24px;
            color: ${cores.vermelho};
            background-color: ${cores.pessego};
            border: none;
            cursor: pointer;
        }
    }
`