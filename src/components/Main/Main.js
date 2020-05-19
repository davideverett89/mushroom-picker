import React from 'react';
import './Main.scss';
import PropTypes from 'prop-types';

import mushroomShape from '../../helpers/propz/mushroomShape';

import Forest from '../Forest/Forest';
import Basket from '../Basket/Basket';

class Main extends React.Component {
    static propTypes = {
      mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
      basket: PropTypes.arrayOf(mushroomShape.mushroomShape),
    }

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
