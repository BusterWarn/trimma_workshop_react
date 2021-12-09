import React from 'react';
import './Item.css';
export default function Item(props) {

    return (
        <div className="Item">
        <img alt={props.name} src={props.icon} />
            <p>
                {props.cost} SEK
            </p>
            <input value="Köp" type="button" onClick={() => props.onBuy(props.buy, props.cost)} />
        </div>
    );
}
