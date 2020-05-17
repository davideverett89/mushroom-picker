/* eslint-disable no-nested-ternary */
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
        <div className="Mushroom col-2 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`card mushroom-card ${mushroom.isPoisonous || mushroom.isDeadly ? 'bg-warning' : 'bg-success'} `}>
                <img className="mushroom-image card-img-top img-fluid" src={mushroom.imgUrl} alt={mushroom.name} />
                <div className="p-2 card-body">
                    <h5 className="card-title">{mushroom.name}</h5>
                    <p className="card-text">{mushroom.description}</p>
                </div>
            </div>
        </div>
     );
   }
}

export default Mushroom;
