import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"

export const cores = {
  //usado em botões e nos textos
  vermelho: '#E66767',
  //usado no backgraund dos cards
  branco1: '#FFFFFF',
  //usado no background do body
  branco2: '#FFF8F2',
  //usado no backgroud dos header e rodapé
  pessego: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body{
    background-color: ${cores.branco2};
    color: ${cores.vermelho};
  }
`
export const Listagem =styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 56px;
  list-style-type: none;
  background-color: ${cores.branco2};
  padding: 40px 172px;
`
