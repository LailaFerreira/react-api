import React from 'react';

function App (props){
  
  
  const modificarnome = (evento) => {
    console.log(evento.target.nome)
  }
  
  const criaComboBox = () => {
    const opcoes = ["canibal", "meliante"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  const MeuComboBox = () => criaComboBox()


  return(
    <>
      <input class="text-center" type="text" value={props.nome} onChange={modificarnome} />
      <h1>olar {props.nome}, sua idade é {props.idade}</h1>
      <h2>terceiro componente da fila</h2>
      <MeuComboBox/>
    </>
  )
}

export default App;
