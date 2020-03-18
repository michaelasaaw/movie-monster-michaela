import React from 'react';

class Favourites extends React.Component {

  componentWillMount() {
    console.log(localStorage);
  }

  render(){
    return (
        <p>Alla fina favoriter</p>
    )
  }
}

export default Favourites;
