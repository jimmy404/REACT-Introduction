import React from 'react';

import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = (
    <div>
      <h2>Hola soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
    );
  return presentacion;
}

function App() {
  var nombre="Jimmy";
  return (
    <div className="App">
      <header className="App-header">
            {HolaMundo(nombre, 30)}
        <section className="componentes">
          <MiComponente />
        </section>
      </header>
    </div>
  );
}

export default App;
