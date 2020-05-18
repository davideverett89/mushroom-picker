/* eslint-disable no-nested-ternary */
import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
   static propTypes = {
     mushroom: mushroomShape.mushroomShape,
   }

   classRouter = () => {
     const { isDark, mushroom } = this.props;
     let className;
     if (mushroom.isPoisonous) {
       className = 'bg-warning';
     } else if (mushroom.isDeadly) {
       className = 'bg-danger text-white';
     } else if (mushroom.isMagic) {
       className = 'winner-mode';
     } else if (isDark) {
       className = 'border-white';
     } else {
       className = 'bg-success';
     }
     return className;
   }

   render() {
     const { mushroom } = this.props;
     return (
        <div className="Mushroom col-2 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`card mushroom-card ${this.classRouter()}`}>
                <img className="mushroom-image card-img-top img-fluid" src={mushroom.imgUrl} alt={mushroom.name} />
                <div className="p-2 card-body">
                    <h5 className={`card-title ${mushroom.isMagic ? 'text-white text-outline' : ''}`}>{mushroom.name}</h5>
                    <p className={`card-text ${mushroom.isMagic ? 'text-white text-outline' : ''}`}>{mushroom.description}</p>
                </div>
            </div>
        </div>
     );
   }
}

export default Mushroom;
