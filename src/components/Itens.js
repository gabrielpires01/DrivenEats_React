import React from "react";

let clicked;
export default function Itens (props) {

    const {img,name,description,value} = props.item;
    const [isClicked, setClick] = React.useState('');
    const [count, setCount] = React.useState(0);


    const setControlValue = () => {
        setClick('select')
        setTimeout(() => {
            if (count === 0) {
                setCount(1)
                if (clicked) {
                    setClick('')
                    clicked = false;
                } else {
                    clicked = true;
                }
            } else {
                clicked = true;
            }
            setTimeout(() => {
                props.clickedList[props.index][props.type] = clicked;
                props.clickedList[props.index].value = count + 1;
                props.isClickedFunc(props.clickedList);
                props.isSelected();
            },100)
        },1)
    }

    const selectByCount = (sign) => {
        if (sign === '-') {
            setCount(count - 1)
        } else {
            setCount(count + 1)
        }
        setTimeout(() => {
            if (count === 1 && sign === '-') {
                setClick('');
                setCount(0);
                setTimeout(() => {
                    clicked = false;
                    props.clickedList[props.index][props.type] = clicked;
                    console.log(count)
                    props.clickedList[props.index].value = 0;
                    props.isClickedFunc(props.clickedList);
                    props.isSelected();
                },1)
            } else {
                setTimeout(() => {
                    console.log(count);
                    setControlValue()
                },1)
            }
        },1)
        
    }

    return (
        <div className={`item ${isClicked}`} onClick={() => setControlValue()}>
            <img src={img}/>
            <h4>{name}</h4>
            <p>{description}</p>
            <h4>R$ {value.toFixed(2)}</h4>
            <div className={`quantity ${isClicked === 'select' ? '':'hidden'}`}>
                <button onClick={() => selectByCount('-')}>-</button>
                    {count}
                <button onClick={() => selectByCount('+')}>+</button>
            </div>
        </div>
    )
}