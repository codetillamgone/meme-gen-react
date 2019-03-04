import React from "react";
import randomMeme from  "../images/randommeme.jpg";


class MemeGenerator extends React.Component{
    
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : randomMeme,
            allMemeImgs : []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>{
                console.log(response.data.memes[0])
                this.setState({allMemeImgs : response.data.memes})
            })
    }

    handleChange(event){
        const {name, type, value} = event.target
        this.setState({[name] : value})
        console.log("Working")
    }

    handleClick(event){
        event.preventDefault();
        let maxLength = this.state.allMemeImgs.length;
        let minLength = 1;
        let randomValue = Math.floor(Math.random() * (maxLength - minLength) + minLength)
        let randomMeme = this.state.allMemeImgs[randomValue].url 
        this.setState({randomImage : randomMeme})

    }

    render(){
        return(
            <div className="meme-container">
                <form className="meme-form" onSubmit={this.handleClick}>
                
                    <input type="text"
                       name="topText"
                       value={this.state.topText}
                       placeholder="Top text"
                       onChange = {this.handleChange}/>

                    <input type="text"
                       name="bottomText"
                       value={this.state.bottomText}
                       placeholder="Bottom text"
                       onChange= {this.handleChange}/>

                    <button>Generate</button>       
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div> 
            </div>

        )
    }
}

export default MemeGenerator;