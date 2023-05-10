/* 
1-
Forma recomendada para estructura de archivos en React
no tanto los nombres en si sino una carpeta para manejo de productospor ej
otra para otra cosa y asi
https://es.legacy.reactjs.org/docs/faq-structure.html
Lectura complementaria
https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76 
Cuando tenemos q cambiar el html lo primero  tenemos q pensar es q necesitamos un hook para cambiar
el estado

*/


import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
