import React from 'react';
import './Winner.scss';

class Winner extends React.Component {
  render() {
    return (
        <div className="Winner">
            <h1 className="display-1 text-white text-outline m-auto">You Won!</h1>
        </div>
    );
  }
}

export default Winner;
