import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';
import Mushroom from '../components/Mushroom/Mushroom';

class App extends React.Component {
  state= {
    mushrooms: [],
    basket: [],
    newMushroom: '',
    isDark: false,
    isWinner: false,
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  pickMushroomEvent = (e) => {
    e.preventDefault();
    const returnData = mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({
      basket,
      newMushroom: returnData.newMushroom,
      isDark: returnData.isDark,
      isWinner: returnData.isWinner,
    });
    if (returnData.isDark) {
      setTimeout(() => {
        this.setState({ isDark: false });
      }, 3000);
    }
  }

  render() {
    const {
      mushrooms,
      basket,
      newMushroom,
      isDark,
    } = this.state;
    return (
      <div className={isDark ? 'App dark-mode' : 'App'}>
        {isDark ? '' : (<h1 className="display-1">Mushroom Picker</h1>)}
        <div className="d-flex flex-column justify-content-center align-items-center">
          {isDark ? '' : (<button className="m-3 btn btn-dark" onClick={this.pickMushroomEvent}>Pick Mushroom</button>)}
          {isDark ? (<i className="mt-5 text-danger fas fa-skull-crossbones fa-10x"></i>) : ('')}
        </div>
        {isDark ? (
        <div className="col-9 m-auto d-flex flex-column align-items-center justify-content-center">
          <h2>You Picked a Dangerous Mushroom!</h2>
          <Mushroom key={newMushroom.id} mushroom={newMushroom} />
        </div>
        ) : (
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-6">
              <h2 className="forest-header text-center m-auto display-4">Forest</h2>
              <Forest mushrooms={mushrooms} />
            </div>
            <div className="col-6">
              <h2 className="basket-header text-center m-auto display-4">Basket</h2>
              <Basket mushrooms={basket} />
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default App;
