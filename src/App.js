import React, { useState, useRef } from "react";
import "./App.css";
import "./assets/imagenes/facebook.png";
import Calculo from "./components/Calculo";
import Resultado from "./components/Resultado";



function App() {
  const [resultado, setResultado] = useState(0);
  const [calculo, setCalculo] = useState("");
  const sumaRef = useRef();
  const restaRef = useRef();
  const multiplicacionRef = useRef();
  const divisionRef = useRef();

  const Suma = () => {
    const inputValue = sumaRef.current.value;
    setResultado((anterior) => {
      return (anterior += parseInt(inputValue));
    });
    setCalculo(`numero de la suma: ${sumaRef.current.value}`);
    sumaRef.current.value = 0;
  };

  const Resta = () => {
    const inputValue = restaRef.current.value;
    setResultado((anterior) => {
      return (anterior -= parseInt(inputValue));
    });
    setCalculo(`numero de la resta: ${restaRef.current.value}`);
    restaRef.current.value = 0;
  };

  const Multiplicacion = () => {
    const inputValue = multiplicacionRef.current.value;
    setResultado((anterior) => {
      return (anterior *= parseInt(inputValue));
    });
    setCalculo(`numero de la multiplicacion: ${multiplicacionRef.current.value}`);
    multiplicacionRef.current.value = 0;
  };

  const Division = () => {
    const inputValue = divisionRef.current.value;
    setResultado((anterior) => {
      return (anterior /= parseInt(inputValue));
    });
    setCalculo(`numero de la Division : ${divisionRef.current.value}`);
    divisionRef.current.value = 0;
  };

  //https://picsum.photos/200/300

  //use state
  const [contador, setContador] = useState(0);

  return (
    <>
      <div className="App">
        <Resultado resultado={resultado} calculo={calculo} />

        <Calculo
          resultadoRef={sumaRef}
          calculo={{ calculo: Suma, name: "Suma" }}
        />
        <Calculo
          resultadoRef={restaRef}
          calculo={{ calculo: Resta, name: "Resta" }}
        />

        <Calculo
          resultadoRef={multiplicacionRef}
          calculo={{ calculo: Multiplicacion, name: "Multiplicar" }}
        />

        <Calculo
          totalRef={divisionRef}
          calculo={{ calculo: Division, name: "Division" }}
        />
      </div>
    </>
  );
}

export default App;
