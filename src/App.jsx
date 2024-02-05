import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const person = {
    name: "Gabriel",
    module: "M3",
    age: 28,
  };

  const alertName = () => {
    alert(person.name);
  }
  

  return (
    <>
      <li>
        <h3>{person.name} - {person.module}</h3>
        <p>tenho {person.age} anos</p>
        <button onClick={alertName}>Quem sou eu?</button>
      </li>

      <Header />
      <AboutSection />
      <Footer />
    </>
  )
}

export default App
