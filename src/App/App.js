/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import DangerousMushroom from '../components/DangerousMushroom/DangerousMushroom';
import MagicMushroom from '../components/MagicMushroom/MagicMushroom';
import Main from '../components/Main/Main';
import Winner from '../components/Winner/Winner';

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

  startOver = () => {
    this.setState({
      mushrooms: mushroomData.getMushrooms(),
      basket: mushroomData.clearBasket(),
      newMushroom: '',
      isDark: false,
      isWinner: false,
    });
  }

  pickMushroomEvent = (e) => {
    e.preventDefault();
    const returnData = mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({
      basket,
      newMushroom: returnData.newMushroom,
      isDark: returnData.isDark,
    });
    if (returnData.isDark) {
      setTimeout(() => {
        this.setState({ isDark: false });
      }, 3000);
    }
    if (returnData.newMushroom.isMagic) {
      setTimeout(() => {
        this.setState({ isWinner: mushroomData.checkForWinner() });
      }, 3000);
    } else {
      this.setState({ isWinner: mushroomData.checkForWinner() });
    }
  }

  render() {
    const {
      mushrooms,
      basket,
      newMushroom,
      isDark,
      isWinner,
    } = this.state;

    const classRouter = () => {
      let className;
      if (isDark) {
        className = 'App dark-mode';
      } else if (isWinner) {
        className = 'App winner-mode';
      } else if (newMushroom.isMagic) {
        className = 'App winner-mode';
      } else {
        className = 'App';
      }
      return className;
    };

    const componentRouter = () => {
      let componentToLoad;
      if (newMushroom.isMagic && isWinner === false) {
        componentToLoad = <MagicMushroom mushroom={newMushroom} />;
      } else if (isDark) {
        componentToLoad = <DangerousMushroom mushroom={newMushroom} />;
      } else if (isWinner) {
        componentToLoad = <Winner startOver={this.startOver} />;
      } else {
        componentToLoad = <Main mushrooms={mushrooms} basket={basket} />;
      }
      return componentToLoad;
    };

    return (
      <div className={classRouter()}>
        {isDark || newMushroom.isMagic || isWinner ? '' : (<h1 className="display-1">Mushroom Picker</h1>)}
        <div className="d-flex flex-column justify-content-center align-items-center">
          {isDark || newMushroom.isMagic || isWinner ? '' : (<button className="m-3 btn btn-dark" onClick={this.pickMushroomEvent}>Pick Mushroom</button>)}
        </div>
        { componentRouter() }
      </div>
    );
  }
}

export default App;
