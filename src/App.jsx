import { StudentCard } from "./components/StudentCard";

function App() {
   return (
      <>
         <StudentCard name="Alex" age={33} country="Brasil" />
         <StudentCard name="Otavio" age={25} country="Brasil" />
         <StudentCard name="Lara" age={28} country="Portugal" />
      </>
   );
}

export default App;
