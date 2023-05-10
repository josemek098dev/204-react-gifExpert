import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('One Punch')

  //creamos un imput en react
  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    if(inputValue.trim().length <= 1) return;
    console.log(inputValue)
    onNewCategory(inputValue.trim())
    setInputValue(" ")
  }

//manejamos un formularo capturamos el valor lo asociamos
//conservamos las practicas de react
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="BuscarGif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}



