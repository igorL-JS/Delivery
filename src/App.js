import React from 'react';
import './styles.css';
import {Tabs} from "./Components/Tabs";
import {Delivery} from "./Components/Delivery";
import {Route} from "react-router-dom";
import {Pickup} from "./Components/Pickup";

function App() {
  return (
      <div className="container">
          <div className="content">
              <header className="title">
                  Выберите способ доставки
              </header>
              <Tabs/>
              <main>
                <Route exact path='/' render={() => (
                    <Delivery/>)}/>
                <Route exact path='/delivery' render={() => (
                    <Delivery/>)}/>

                <Route path='/pickup' render={() => (
                    <Pickup/>)}/>
              </main>
          </div>
      </div>
  );
}

export default App;
