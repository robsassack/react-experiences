import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        image="katie-zaferes.png"
        status="SOLD OUT"
        rating={5.0}
        reviewCount={6}
        loc="USA"
        desc="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  )
}

export default App;
