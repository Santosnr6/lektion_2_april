import GeneratorForm from '../../components/generatorForm/GeneratorForm';
import './teamGeneratorPage.css';
import { useState } from 'react';
import pokemonObjects from '../../assets/pokemons.js';
import PokemonCard from '../../components/pokemonCard/PokemonCard';

function TeamGeneratorPage() {
  const [formInput, setFormInput] = useState('');
  const [formAmount, setFormAmount] = useState(1);
  const [pokemonList, setPokemonList] = useState([...pokemonObjects]);
  const [generatedPokemons, setGeneratedPokemons] = useState([]);

  const handleInput = (event) => {
    setFormInput(event.target.value);
  }

  const handleAmount = (event) => {
    setFormAmount(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setGeneratedPokemons([]);

    if(formInput === '') {
      const pokemonListCopy = [...pokemonList];
      for(let i = 0; i < formAmount; i++) {
        const generatedPokemon = pokemonListCopy.splice(Math.floor(Math.random() * pokemonListCopy.length), 1);
        setGeneratedPokemons(g => [...g, generatedPokemon[0]]);
      }
    }
  }

  return (
    <section className="generator-page">
      <h1 className="generator-heading">Team Generator</h1>
      <GeneratorForm 
        handleInput={ handleInput }
        handleAmount={ handleAmount }
        handleSubmit={ handleSubmit }
      />
      <section className="generator-grid">
        {
          generatedPokemons.map((pokemon, index) =>{
            return <PokemonCard 
                       pokemon={ pokemon }
                       key={ index }
                   />
          })  
        }
      </section>
    </section>
  )
}

export default TeamGeneratorPage;
