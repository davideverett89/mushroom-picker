import React from 'react';
import PropTypes from 'prop-types';
import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';

import mushroomShape from '../../helpers/propz/mushroomShape';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    const mushroomCards = mushrooms.map((mushroom) => (
        <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));
    return (
          <div className="Forest col-12 p-3 d-flex flex-wrap">
              {mushroomCards}
          </div>
    );
  }
}

export default Forest;
