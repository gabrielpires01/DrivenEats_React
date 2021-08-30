import React from "react"

export default function BotBar (props) {

    return (
        <div className='botbar'>
            {props.isOrderReady ?
                <button className='done' onClick={() => props.finalizeOrder()}>Fechar Pedido</button> :
                <button className='notdone' >Selecione os 3 itens para fechar o pedido</button>
            }
        </div>
    )
}