import React from 'react';
import PropTypes from 'prop-types';
import './Winner.scss';

class Winner extends React.Component {
  static propTypes = {
    startOver: PropTypes.func.isRequired,
  }

  render() {
    const { startOver } = this.props;

    return (
        <div className="Winner mt-5">
            <h1 className="display-1 text-white text-outline">You Won!</h1>
            <button className="btn btn-primary" onClick={startOver}>Play Again!</button>
        </div>
    );
  }
}

export default Winner;
