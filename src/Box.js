import React,{Component} from 'react';

import './Box.css';

class Box extends Component {

    onClick=() => {
        const audio = new Audio(this.props.songs.name)
        audio.play();
    }
    render() {
        return(
            <button onClick={this.onClick} className="box">
                
            </button>
        )
    }
}



export default Box;