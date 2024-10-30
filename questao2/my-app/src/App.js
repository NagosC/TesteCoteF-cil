import './App.css';
import {useState} from 'react'

function App() {

  const [mensagem, setMensagem] = useState('');

  const handleClick = () => {
    setMensagem('Enviado com sucesso!')
  }

  
  return (
    <div className="App">
      <header className="App-header">
          <button 
           className= "Button1" 
           title= "Enviar"
           onClick = {handleClick}
          >
            Enviar
          </button>  
        {mensagem && <p className='Mensagem'>{mensagem}</p>}
      </header>
    </div>
  );
}

export default App;
