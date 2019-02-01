import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div style={header} className="Header">

        <div style={brand}>
          <div className='logo'><img src='http://www.vitorazevedo.net/external_files/loading_small.png' alt="LOGO" /></div>
          <h1>Fruit Price Calculator</h1>
          <code style={code}>With React Js</code>
        
        </div>
      
        <div style={totalPrice}>
          <h3>Total Fruits: {this.props.totalFruits}</h3>
          <h3>Total Price: {this.props.cart}</h3>
        </div>


      </div>
    )
  }
}

const header = {
  backgroundColor: '#fff',
  display: 'flex',
  color: '#555',
  
}

const brand = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',

}

const code = {
  transform: 'translateY(8px)',
  marginLeft: '10px',
}

const totalPrice = {
  marginLeft: 'auto'
}



export default Header
