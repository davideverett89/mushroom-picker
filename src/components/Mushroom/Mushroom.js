import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
   static propTypes = {
     mushroom: mushroomShape.mushroomShape,
     inBasket: PropTypes.bool,
   }

   state = {
     inBasket: false,
   }

   checkIfInBasket = () => {
     const { inBasket } = this.props;
     if (inBasket) {
       this.setState({ inBasket: true });
     }
   }

   componentDidMount() {
     this.checkIfInBasket();
   }

   render() {
     const { inBasket } = this.state;
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
                <div className="p-2 card-body d-flex flex-column">
                    <h5 className={`card-title ${mushroom.isMagic ? 'text-white text-outline' : ''}`}>{mushroom.name}</h5>
                    <p className={`m-auto flex-grow-1 card-text ${mushroom.isMagic ? 'text-white text-outline' : ''}`}>{mushroom.description}</p>
                    {
                      inBasket ? (
                      <p className="flex-grow-1">Quantity: {mushroom.quantity}</p>
                      ) : ('')
                    }
                </div>
            </div>
        </div>
     );
   }
}

export default Mushroom;
