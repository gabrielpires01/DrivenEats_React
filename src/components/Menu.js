import React from "react";
import BotBar from "./BotBar";
import Dishes from "./Dishes";

export default function Menu () {

    const [allClicked, setOrderCallback] = React.useState(false)
    const [fullOrder, setFullOrder] = React.useState([
        {plates: []},
        {drinks: []},
        {desserts: []}
    ]);

    function fullOrderCallback(order,dish) {
        if (dish === 'plate') {
            console.log(dish, order)
        }
        if (dish === 'drink') {
            console.log(dish, order)
        }
        if (dish === 'dessert') {
            console.log(dish, order)
        }
    }

    function finalizeOrder () {
        console.log('foi em')
    }

    return (
        <>
            <Dishes setOrder={setOrderCallback}
            fullOrderList={fullOrderCallback}
            />
            <BotBar isOrderReady={allClicked}
            fullOrder={fullOrder}
            finalizeOrder={finalizeOrder}/>
        </>
    )
}