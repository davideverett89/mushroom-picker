import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './DangerousMushroom.scss';

import Mushroom from '../Mushroom/Mushroom';

class DangerousMushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;
    return (
        <div className="DangerousMushroom col-6 m-auto d-flex flex-column align-items-center justify-content-center">
            <i className="mt-5 text-danger fas fa-skull-crossbones fa-10x"></i>
            <h2 className="m-5">You Picked a Dangerous Mushroom!</h2>
            <Mushroom key={mushroom.id} mushroom={mushroom} />
        </div>
    );
  }
}

export default DangerousMushroom;
