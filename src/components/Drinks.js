import Itens from "./Itens";
import React from "react";

export default function Drinks (props) {

    const [clicked, setCallback] = React.useState([{drink:false,value:0},{drink:false,value:0},{drink:false,value:0}])

    function selectedDishes () {
        for (let i = 0; i < clicked.length; i++) {
            if (clicked[i].drink) {
                props.setDrink('drink', true)
                break
            } else {
                clicked[i].value = 0
            }
        }
        props.setDrink('drink', false)

        setTimeout(() => {
            props.setOrder(clicked,'drink')
        },1)
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