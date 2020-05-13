import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
   static propTypes = {
     mushroom: mushroomShape.mushroomShape,
   }

   render() {
     const { mushroom } = this.props;
     return (
        <div className="Mushroom col-3">
            <div className="card mushroom-card">
                <img className="card-img-top img-fluid" src={mushroom.imgUrl} alt={mushroom.name} />
                <div className="card-body">
                    <h5 className="card-title">{mushroom.name}</h5>
                    <p className="card-text">{mushroom.description}</p>
                </div>
            </div>
        </div>
     );
   }
}

export default Mushroom;
