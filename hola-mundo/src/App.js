import logo from "./logo.svg";
import "./App.css";
import Greeting from "./pure/greeting";
import GreetingF from "./pure/greetingF";
import Contacto from "./pure/contacto";
import ComponenteA from "./pure/componenteA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}

        {/* <Greeting name="user"></Greeting> */}
        {/* <GreetingF name="Miguel"></GreetingF> */}
        <ComponenteA
          nombre="user"
          apellido="user"
          email="user.name@gmail.com"
          conectado={false}
        ></ComponenteA>
      </header>
    </div>
  );
}

export default App;
