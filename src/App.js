import React, { useRef, useState } from 'react';
import './App.css';
import Item from './Item';

import IconBitcoin from './img/bitcoin.png';
import IconRtx from './img/rtx.png';
import IconRc from './img/revell.png';
import IconAoE4 from './img/aoe4.png';
import IconStiga from './img/stiga.png';




export default function App(props) {
  const content = useRef();
  const [shoppingCart, setShoppingCart] = useState([]);
  const handleBuy = (name, cost) => {
    setShoppingCart([...shoppingCart, { name: name, cost: cost }]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Välkommen till min webbshop.
       </p>
        <div
          onClick={() => content.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="App-link"
        >
          <h1>Start shopping!</h1>
 </div>
      </header>
      <div className="App-content" ref={content}>
        <h3>
          Varor
        </h3>
        <Item
          name='Age of Empires IV'
          cost={600}
          icon={IconAoE4}
          onBuy={handleBuy}
        />
        <Item
          name='Stiga AXE Padel Racket'
          cost={100}
          icon={IconStiga}
          onBuy={handleBuy}
        />
        <Item
          name='Bitcoin'
          cost={999999}
          icon={IconBitcoin}
          onBuy={handleBuy}
        />
        <Item
          name='GeForce RTX 3090'
          cost={3090}
          icon={IconRtx}
          onBuy={handleBuy}
        />
        <Item
          name='Revell RC'
          cost={42}
          icon={IconRc}
          onBuy={handleBuy}
        />
        <h3>
          Varukorg
        </h3>
        <p>
          <b>
            Totalt: {shoppingCart.reduce((acc, curr) => { acc += curr.cost; return acc; }, 0)}kr  </b>
        </p>

        <div>
          {shoppingCart.map((item, index) => (
            <p key={index}> {item.name} - {item.cost}kr</p>
          ))}
        </div>


      </div>
    </div>
  );
}
