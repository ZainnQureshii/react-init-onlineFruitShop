import React, { Component } from 'react'

export class Total extends Component {
  render() {
    return (
      <div>
        <button style={btnAdd} onClick={this.props.total}>Click To Total</button>
      </div>
    )
  }
}

const btnAdd = {
  display: 'block',
  margin: 'auto',
  marginBottom: '30px',
  backgroundColor: '#333',
  width: '300px',
  height: '50px',
  color: '#fff',
  padding: '5px 15px',
  fontSize: '25px',
  fontWeight: '600',
  border: 'none',
  boxShadow: '0 0 15px 2px rgba(0,0,0, 0.9)'
}


export default Total
