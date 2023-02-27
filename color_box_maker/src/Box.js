import React from "react";
import './Box.css';

const Box = ({id, width, height, backgroundColor, removeBox}) => {
    const styles = {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor
    }
    
    return (
        <div className="Box" style={styles}>
            <a className="Box-button"  onClick={() => removeBox(id)}>X</a>
        </div>
    )
}

export default Box;