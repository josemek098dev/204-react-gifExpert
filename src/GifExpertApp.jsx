/*
2-
usestate snipeed se uso
categories es un arreglo
no se debe poner los hooks condicionalmente(dentro de un if ) porq perderia la referencia
a que state es el que esta manejando

en react hay q quitarse el push para insertar en arreglos todo lo posible
el push MUTA objetos reat trata de no mutar los arreglos
para hacerlo React usa Set Categories

Necesitamos ...categories, para q no se muestre solo hola mundo 
setcategories([...categories,'Hola Mundo'])

otra forma
cat=>[...cat,'Valorant']

Cada componente se recomienda q se dedique a una tarea en especifico

A cada elemento html q queremos retornar debemos ponerle un key


*/

import {useState} from "react";
import { AddCategory, GifGrid   } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory )) return; 
        //con este if evitamos q se inserte una categoria
        //que ya existia
        setCategories([newCategory, ...categories]) 
    }
   


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
            onNewCategory = { onAddCategory }
            currentCategories = { categories }
        />
        {/*Listado de Gif*/}

        <ol>
            { categories.map( category => 

                <GifGrid 
                    key = { category } 
                    category={ category }
                    />

             ) }
            {/* React utiliza el valor de key para saber
            si un elemento se elimino por lo q no se rec
            comienda usar el indice en las llaves.*/}

            <li>A</li>
            <li>A</li>
            <li>B</li>
        </ol>
        {/*Gif Item*/}
    </>
  )
}
