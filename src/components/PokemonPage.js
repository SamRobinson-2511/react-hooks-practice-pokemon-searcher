import React, { useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ poke }) {
  


  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(r=>r.json())
    .then(setPoke)
    }, [])
    
    


    
 
  
 


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection />
    </Container>
  );
}

export default PokemonPage;
