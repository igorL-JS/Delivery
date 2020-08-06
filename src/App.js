import React, {useState} from 'react';
import './styles.css';
import {Pickup} from "./Components/Pickup";
import {YMaps} from "react-yandex-maps";
import {Delivery} from "./Components/Delivery";


const App = () => {

    const [activeTab, setActiveTab] = useState(true);

    const toggleTab = () => {
        setActiveTab(!activeTab);
    };

debugger
    return (
      <div className="container">
          <div className="content">
              <header className="title">
                  Выберите способ доставки
              </header>

                <nav className="tabs">
                    <label htmlFor="tab1" className={activeTab ? "tabs__el active" : "tabs__el" } onClick={toggleTab} ><span className="tabs__title">Доставка</span></label>
                    <label htmlFor="tab2" className={activeTab ? "tabs__el"  :"tabs__el active" } onClick={toggleTab}><span className="tabs__title">Самовывоз</span></label>
                </nav>
                <Delivery activeTab={activeTab}/>
                <YMaps>
                    <Pickup activeTab={activeTab}/>
                </YMaps>
          </div>
      </div>
  );
};

export default App;
