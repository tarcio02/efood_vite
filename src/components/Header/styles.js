import styled from 'styled-components'
import vector from '../../assets/images/Vector.svg'
import { cores } from '../../styles'

export const HeaderBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${vector});
    height: 186px;
    padding:40px 172px;

    img{
        width: 120px;
        height: 56px;
    }

    .span{
        font-weight: 900;
        font-size: 18px;
        width: 240px;
        cursor: pointer;
        text-decoration: none;
        color: ${cores.vermelho};
    }
`
