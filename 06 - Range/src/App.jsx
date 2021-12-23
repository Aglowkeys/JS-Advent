import { useState } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';

function App() {

  const [numero, setNumero] = useState(0)

  return (
    <div className="App">
      <p className = 'precio'>${numero}</p>
      <Input
      setNumero={setNumero}
      />
      <Button/>
    </div>
  )
}

export default App
