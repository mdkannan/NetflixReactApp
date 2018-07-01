import React from 'react';
class MovieOfTheDay extends React.Component {
    render() {
      return(
        <div id="hero"  className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
          <div className="content">
            <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background"/>
            <h2>Season 2 now available</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id qua
                m sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
            <div className="button-wrapper">
              <RedButton primary={true} text="Watch now"/>
              <RedButton primary={false} text="+ My list"/>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      )
    }
  }
  
  class RedButton extends React.Component {
    render() {
      return(
        <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
      )
    }
  }

   export default MovieOfTheDay;