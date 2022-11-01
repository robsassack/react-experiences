import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./cardData";

function App() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        image={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        loc={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  );
}

export default App;
