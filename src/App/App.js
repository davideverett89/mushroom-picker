import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state= {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  render() {
    const { mushrooms, basket } = this.state;

    return (
      <div className="App">
        <h1 className="display-1">Mushroom Picker</h1>
        <button className="m-3 btn btn-dark">Pick Mushroom</button>
        <div className="container-fluid mt-3">
          <div className="row">
            <h2 className="forest-header text-center m-auto display-4">Forest</h2>
            <Forest mushrooms={mushrooms} />
          </div>
          <div className="row">
            <h2 className="basket-header text-center m-auto display-4">Basket</h2>
            <Basket mushrooms={basket} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
