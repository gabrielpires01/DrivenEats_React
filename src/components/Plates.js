import Itens from "./Itens";
import React from "react";

export default function Plates (props) {

    const [clicked, setCallback] = React.useState([{plate:false,value:0},{plate:false,value:0},{plate:false,value:0}])

    function selectedDishes () {
        for (let i = 0; i < clicked.length; i++) {
            if (clicked[i].plate) {
                props.setPlate('plate', true)
                break
            }
        }
        props.setPlate('plate', false)
        setTimeout(() => {
            props.setOrder(clicked,'plate')
        },1)
    }

    return (
        <>  
            <h2>Primeiro, seu prato</h2>
            <div className="list">
                {props.plates.map((item, index) => 
                    <Itens key={index} 
                    index={index}
                    item={item} 
                    type={'plate'} 
                    isClickedFunc={setCallback}
                    clickedList={clicked}
                    isSelected={selectedDishes}/>
                )}
            </div>
        </>
    )
    
}