import React, { useState } from "react";
import './BoxList.css';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div className="BoxList">Create a new box by selecting height, width, and color.
            <NewBoxForm addBox={addBox} />
            <div className="BoxList-boxarea">
                {boxes.map( ({id, width, height, backgroundColor}) => {
                    return <Box key={id} id={id} width={width} height={height} backgroundColor={backgroundColor} removeBox={removeBox}/>
                })}                
            </div>
        </div>
    )
}

export default BoxList;