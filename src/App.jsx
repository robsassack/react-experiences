import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./cardData";

function App() {
  const cards = cardData.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </>
  );
}

export default App;
