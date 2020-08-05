import React from 'react';
import './styles.css';
import {Pickup} from "./Components/Pickup";
import {YMaps} from "react-yandex-maps";
import {Delivery} from "./Components/Delivery";


const App = () => {

debugger
    return (
      <div className="container">
          <div className="content">
              <header className="title">
                  Выберите способ доставки
              </header>

                <input  type="radio" id="tab1" name="tabs" className="radiobutton" checked />
                <input type="radio" id="tab2" name="tabs" className="radiobutton" />

                <nav className="tabs">
                    <label htmlFor="tab1" className="tabs__el tab1"><span className="tabs__title">Доставка</span></label>
                    <label htmlFor="tab2" className="tabs__el tab2"><span className="tabs__title">Самовывоз</span></label>
                </nav>
                    <Delivery/>
                    <YMaps>
                        <Pickup/>
                    </YMaps>
          </div>
      </div>
  );
};

export default App;
