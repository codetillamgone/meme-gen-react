import React from "react";
import Trollface from '../images/Trollface.png'

function Header(){

  

   
        return(
        <div>
            <header>
                <img
                    src={Trollface}
                    alt="Troll Face"
                />
                <p>Meme Generator</p>
            </header>
        </div>
        )
    
}

export default Header