import React, {Componet} from 'react'
import './App.css';
import ContadorValor from './components/ContadorValor';

class App  extends Componet {
  render(){
    return (
      <div className="App">
        <ContadorValor contador={1111} />
      </div>
    );
  }
  
}

export default App;
