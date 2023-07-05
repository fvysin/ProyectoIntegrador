import Cards from "../Cards/Cards"
import React from "react"

export default function Home(props){
    return(
        <div>

            <h1> Home </h1>
            <Cards characters={props.characters} onClose={props.onClosenClose}/>
        </div>

    )
}