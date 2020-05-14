import React from 'react';
import PropTypes from 'prop-types';
import './Basket.scss';

import Mushroom from '../Mushroom/Mushroom';

import mushroomShape from '../../helpers/propz/mushroomShape';

class Basket extends React.Component {
    static propTypes = {
      mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
    }

    render() {
      const { mushrooms } = this.props;
      const basketMushroomCards = mushrooms.map((mushroom, i) => (
        <Mushroom key={`pickedMushroom${i + 1}`} mushroom={mushroom} />
      ));
      return (
        <div className="Basket p-3 d-flex flex-wrap">
            { basketMushroomCards.length === 0 ? <h3 className="empty-basket m-auto">Your Basket Is Empty!</h3> : basketMushroomCards }
        </div>
      );
    }
}

export default Basket;
