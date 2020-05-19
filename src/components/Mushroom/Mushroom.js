import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
   static propTypes = {
     mushroom: mushroomShape.mushroomShape,
   }

   render() {
     const { mushroom } = this.props;
     const classRouter = () => {
       let className;
       if (mushroom.isPoisonous) {
         className = 'bg-warning';
       } else if (mushroom.isDeadly) {
         className = 'bg-danger text-white';
       } else if (mushroom.isMagic) {
         className = 'winner-mode';
       } else {
         className = 'bg-success';
       }
       return className;
     };
     return (
        <div className="Mushroom col-2 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`card mushroom-card ${classRouter()}`}>
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
