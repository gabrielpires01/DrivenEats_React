import React from "react";
import Desserts from "./Deserts";
import Drinks from "./Drinks";
import Plates from "./Plates";

export default function Dishes (props) {
    const dishes = {
        plates: [
            {
                img: "/images/frango_yin_yang.png",
                name: "Frango Teriaky",
                description: "Frango, Batata, arroz e salada",
                value: 17.90
            },
            {
                img: "/images/frango_yin_yang.png",
                name: "Frango Yin Yang",
                description: "Frango, Batata, arroz e salada",
                value: 14.90
            },
            {
                img: "/images/frango_yin_yang.png",
                name: "frango Parmegiana",
                description: "Frango, Batata, arroz e salada",
                value: 18.90
            }
        ],
        drinks: [
            {
                img: "/images/coquinha_gelada.png",
                name: "Coca Gelada",
                description: "lata 350ml",
                value: 4.50
            },
            {
                img: "/images/coquinha_gelada.png",
                name: "Pepsi Gelada",
                description: "lata 350ml",
                value: 3.50
            },
            {
                img: "/images/coquinha_gelada.png",
                name: "Suco de Laranja",
                description: "Copo 350ml",
                value: 6.00
            }
        ],
        desserts: [
            {
                img: "/images/pudim.png",
                name: "Pudim",
                description: "Apenas Pudim",
                value: 7.90
            },
            {
                img: "/images/pudim.png",
                name: "Brownie",
                description: "Apenas Brownie",
                value: 6.90
            },
            {
                img: "/images/pudim.png",
                name: "Petiet Gateau",
                description: "Petiet Gateau com Sorvete",
                value: 8.90
            }
        ]
    };

    const [selected, setSelected] = React.useState({
        plateSelected:false,
        drinkSelected:false,
        dessertSelected:false
    });
    const [plates,getPlates] = React.useState([]);
    const [drinks,getDrinks] = React.useState([]);
    const [desserts,getDesserts] = React.useState([]);

    function callbackFunc (dish, value) {
        if (dish === 'plate') {
            selected.plateSelected = value;
            setSelected(selected)
        }
        if (dish === 'drink') {
            selected.drinkSelected = value;
            setSelected(selected)
        }
        if (dish === 'dessert') {
            selected.dessertSelected = value;
            setSelected(selected)
        }
        checker(selected)
    }


    function checker (dish) {
        if (dish.plateSelected && dish.drinkSelected && dish.dessertSelected) {
            props.setOrder(true)
        } else {
            props.setOrder(false)
        }
    }

    return (
        <div className="menu">
            <Plates plates={dishes.plates}
            setPlate={callbackFunc}
            setOrder={props.fullOrderList}
            />
            <Drinks drinks={dishes.drinks}
            setDrink={callbackFunc}
            setOrder={props.fullOrderList}
            />
            <Desserts desserts={dishes.desserts}
            setDessert={callbackFunc}
            setOrder={props.fullOrderList}
            />
        </div>
    )
}