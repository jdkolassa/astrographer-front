import React, {useMemo, useState} from 'react';
import Grid from "./Grid";


const Header = styled.header`
  height: 15vh;
  width: 100vw;
  background-color: black;
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin: auto;
    font-weight: bold;
    color: white;
  }
`

const Nav = styled.nav`
  background-color: #cc0099;
  font-weight: bold;
  text-align: center;
  width: 100vw;
  height: 2.5rem;
  padding: 0.25rem;
  & > a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
`

const Main = styled.main`
  background-color: black;
`

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;600&display=swap" rel="stylesheet"/> 
    </Head>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background-color: black;
            color: white;
            font-family: 'Cairo', sans-serif;
          }
          a {
            margin: 0 1rem;
            color: white;
            text-decoration: none;
            font-size: 1rem;
          }
        `}
      />
        <Header>
          <h1>ASTROGRAPHER</h1>
          <Nav>
            <div>
              <Link link="/stars">Home</Link>
              <Link link="/about">About</Link>
            </div>
          </Nav>
        </Header>
        {/* <p>Current page is: {state.router.link}</p> */}
          <Main>
            <Switch>
              <Grid when={data.isHome}/>
              <div when={data.isPage} />
            </Switch>
          </Main>
          
        
    </>
  
  )
}



export default connect(Root);


