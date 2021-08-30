import Itens from "./Itens";
import React from "react";

export default function Desserts (props) {

    const [clicked, setCallback] = React.useState([{dessert:false,value:0},{dessert:false,value:0},{dessert:false,value:0}])

    function selectedDishes () {
        for (let i = 0; i < clicked.length; i++) {
            if (clicked[i].dessert) {
                props.setDessert('dessert', true)
                break
            }
        }
        props.setDessert('dessert', false)
        
        setTimeout(() => {
            props.setOrder(clicked,'dessert')
        },1)
    }

    return (
        <>  
            <h2>Por fim, sua sobremesa</h2>
            <div className="list">
                {props.desserts.map((item, index) => 
                    <Itens key={`dessert${index}`}
                    index={index}
                    item={item} 
                    type={'dessert'} 
                    isClickedFunc={setCallback}
                    clickedList={clicked}
                    isSelected={selectedDishes}/>
                )}
            </div>
        </>
    )
}