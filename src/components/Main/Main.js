import React from 'react';
import './Main.scss';

import Forest from '../Forest/Forest';
import Basket from '../Basket/Basket';

class Main extends React.Component {
  render() {
    const { mushrooms, basket } = this.props;
    return (
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
    );
  }
}

export default Main;
