import Body from "../components/Body/index.tsx";
import Header from "../components/Header/index.tsx";
import Hero from "../components/Hero/index.tsx";
import { GlobalStyle } from '../styles.ts'
import styled from "styled-components";

const House = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 98.96vw;
`

function Home() {
    return (
      <House>
        <GlobalStyle />
        <Header/>
        <Hero/>
        <Body/>
      </House>
    )
  }
  
  export default Home;