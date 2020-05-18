/* eslint-disable max-len */
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
    isWinner: true,
  }

  classRouter = () => {
    const { isDark, isWinner, newMushroom } = this.state;
    let className;
    if (isDark) {
      className = 'App dark-mode';
    } else if (isWinner) {
      className = 'App winner-mode';
    } else if (newMushroom.isMagic) {
      className = 'App winner-mode';
      setTimeout(() => {
        this.setState({ isWinner: true });
      }, 1000);
    } else {
      className = 'App';
    }
    return className;
  }

  componentRouter = () => {
    const { isWinner, mushrooms, basket } = this.state;
    let container;
    if (isWinner) {
      container = '';
    } else {
      container = (
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-6">
              <h2 className="forest-header text-center m-auto display-4">Forest</h2>
              <Forest isWinner={isWinner} mushrooms={mushrooms} />
            </div>
            <div className="col-6">
              <h2 className="basket-header text-center m-auto display-4">Basket</h2>
              <Basket isWinner={isWinner} mushrooms={basket} />
            </div>
          </div>
        </div>
      );
    }
    return container;
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
      newMushroom,
      isDark,
      isWinner,
    } = this.state;
    return (
      <div className={this.classRouter()}>
        {isDark || newMushroom.isMagic ? '' : (<h1 className="display-1">Mushroom Picker</h1>)}
        <div className="d-flex flex-column justify-content-center align-items-center">
          {isDark || newMushroom.isMagic ? '' : (<button className="m-3 btn btn-dark" onClick={this.pickMushroomEvent}>Pick Mushroom</button>)}
          {isDark ? (<i className="mt-5 text-danger fas fa-skull-crossbones fa-10x"></i>) : ('')}
        </div>
        {newMushroom.isMagic ? (
          <div className="col-6 m-auto d-flex flex-column align-items-center justify-content-center">
            <img src="https://i.ya-webdesign.com/images/trippy-mushroom-png-12.png" alt="Magic Mushroom" />
            { isWinner ? (
            <div>
              <h2 className="display-4 text-white text-outline">You Won!</h2>
            </div>) : (
              <h2 className="text-white display-4 text-outline">You Picked A Magic Mushroom!</h2>
            )}
            <Mushroom key={newMushroom.id} mushroom={newMushroom} />
          </div>
        ) : ''}
        {isDark ? (
        <div className="col-6 m-auto d-flex flex-column align-items-center justify-content-center">
          <h2 className="m-5">You Picked a Dangerous Mushroom!</h2>
          <Mushroom isDark={isDark} key={newMushroom.id} mushroom={newMushroom} />
        </div>
        ) : this.componentRouter()}
      </div>
    );
  }
}

export default App;
