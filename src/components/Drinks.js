import Itens from "./Itens";
import React from "react";

export default function Drinks (props) {

    const [clicked, setCallback] = React.useState([{drink:false,value:0},{drink:false,value:0},{drink:false,value:0}])

    function selectedDishes () {
        for (let i = 0; i < clicked.length; i++) {
            if (clicked[i].drink) {
                return props.setDrink('drink', true)
            }
        }
        return props.setDrink('drink', false)
    }

    return (
        <>  
            <h2>Agora, sua bebida</h2>
            <div className="list">
                {props.drinks.map((item, index) => 
                    <Itens key={`drink${index}`}
                    index={index} 
                    item={item} 
                    type={'drink'} 
                    isClickedFunc={setCallback}
                    clickedList={clicked}
                    isSelected={selectedDishes}/>
                )}
            </div>
        </>
    )
}