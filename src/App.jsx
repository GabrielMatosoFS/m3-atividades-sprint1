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
        <p>Tenho: {person.age} anos</p>
        <button onClick={alertName}>Quem sou eu?</button>
      </li>
    </>
  )
}

export default App
