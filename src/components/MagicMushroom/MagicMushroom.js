import React from 'react';
import './MagicMushroom.scss';

import mushroomShape from '../../helpers/propz/mushroomShape';

import Mushroom from '../Mushroom/Mushroom';

class MagicMushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;
    return (
        <div className="col-6 m-auto d-flex flex-column align-items-center justify-content-center">
          <img src="https://i.ya-webdesign.com/images/trippy-mushroom-png-12.png" alt="Magic Mushroom" />
          <h2 className="text-white display-4 text-outline">You Picked A Magic Mushroom!</h2>
          <Mushroom key={mushroom.id} mushroom={mushroom} />
        </div>
    );
  }
}

export default MagicMushroom;
