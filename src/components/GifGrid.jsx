/*
El useEffect es un hook de react que sirve para disparar
efectos secundarios
se entiende pro efecto secundario un proceso que se ejecuta 
cuando algo cambia.. ej cuando cambia una categoria 
ej evita qu se realizane multiples peticiones 
el return del use efect esta destinado a hace r una limpieaz
*/

import {useState,useEffect } from "react"

import { GifItem } from "./GifItem"
import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs"
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)


    getGifs(category)

    return (

        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2 >Cargando...</h2>)
                
            }
            
            <div className = "card-grid">
                {
                    images.map( (image) =>  (
                        <GifItem 
                    key = { image.id}{...image /* esparcimos la imagen*/}

                        />
                    ))
                }

            </div>


        </>

    )
}
