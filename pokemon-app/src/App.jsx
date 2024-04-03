import './app.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PokedexPage from './pages/pokedexPage/PokedexPage';
import TeamGeneratorPage from './pages/teamGeneratorPage/TeamGeneratorPage';

function App() {
  

  return (
    <div className="app">
      <Header />
      {/* <PokedexPage /> */}
      <TeamGeneratorPage />
      <Footer />
    </div>
  )
}

export default App
