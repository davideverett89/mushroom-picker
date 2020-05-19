import React from 'react';
import './MagicMushroom.scss';

import mushroomShape from '../../helpers/propz/mushroomShape';

import Mushroom from '../Mushroom/Mushroom';
import Winner from '../Winner/Winner';

class MagicMushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  state = {
    loadWinner: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadWinner: true });
    }, 2000);
  }

  render() {
    const { loadWinner } = this.state;
    const { mushroom } = this.props;
    return (
      <React.Fragment>
        {
          loadWinner
            ? <Winner />
            : (
        <div className="col-6 m-auto d-flex flex-column align-items-center justify-content-center">
          <img src="https://i.ya-webdesign.com/images/trippy-mushroom-png-12.png" alt="Magic Mushroom" />
          <h2 className="text-white display-4 text-outline">You Picked A Magic Mushroom!</h2>
          <Mushroom key={mushroom.id} mushroom={mushroom} />
        </div>
            )
        }
      </React.Fragment>
    );
  }
}

export default MagicMushroom;
