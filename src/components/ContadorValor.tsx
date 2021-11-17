import React from 'react'

interface ContadorValorPorps{
    contador:number
}
export default (props: ContadorValorPorps) =>{
    return(
    <p>{props.contador}</p>
    )
}