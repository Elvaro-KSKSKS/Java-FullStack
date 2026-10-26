import { useState } from 'react'

const imcResultTable = [
  { intervalLimit: 17, situation: 'Muito abaixo do peso' },
  { intervalLimit: 18.49, situation: 'Abaixo do peso' },
  { intervalLimit: 24.99, situation: 'Peso normal' },
  { intervalLimit: 29.99, situation: 'Acima do peso' },
  { intervalLimit: 34.99, situation: 'Obesidade I' },
  { intervalLimit: 39.99, situation: 'Obesidade II' },
  { intervalLimit: Infinity, situation: 'Obesidade III' }
];

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const index = weight && height ? weight / (height * height) : 0;

  const situation = imcResultTable.find(item => index <= item.intervalLimit).situation;

  const renderResult = () => {
    return (
      <>
        <p>Resultado: {index}</p>
        <p>Situação: {situation}</p>
      </>
    );
  };

  return (
    <>
      <h3>Calculadora IMC</h3>
      <label htmlFor="altura">Insira a altura: </label>
      <input onChange={e => setHeight(parseFloat(e.target.value))} type="number" placeholder='Altura' id='altura' name='altura'/>
      <br />
      <label htmlFor="peso">Insira o peso: </label>
      <input onChange={e => setWeight(parseFloat(e.target.value))} type="number" placeholder='Peso' id='peso' name='peso'/>
      {renderResult()}
    </>
  )
}

export default App
