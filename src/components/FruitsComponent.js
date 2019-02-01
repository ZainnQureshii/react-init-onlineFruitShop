import React, { Component } from 'react'
import { FaPencilAlt, FaTrash } from 'react-icons/fa';


export class FruitsComponent extends Component {

  render() {

    const { id, name, price, pic } = this.props.item

    return (
      <div className="fruits">
        <div className="fruitsItems">
          <button style={btnEdit} onClick={this.props.editHeading.bind(this, id)}>Edit Name <FaPencilAlt /></button>
          
          <button style={btnTrash} onClick={this.props.deleteFruit.bind(this, id)}><FaTrash /></button>
          
          
          <h1>{ name }</h1> 
          <div className="imgDiv">
            <img width="200" src={ pic } alt={ name } />
          </div>


          <button style={btnEdit} onClick={this.props.editPrice.bind(this, id)}>Edit Price <FaPencilAlt /></button>
          <h2>Price: { price }</h2>

          <button style={btnAdd} className="btnAdd" onClick={this.props.addPrice.bind(this, price, name)}>+</button>
          
          
          
          
          
        </div> 
      </div>
    )
  }
}

const btnAdd = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px 15px',
  fontSize: '25px',
  fontWeight: '600',
  border: 'none',
  boxShadow: '0 0 15px 2px rgba(0,0,0, 0.9)'
}

const btnEdit = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px 15px',
  fontSize: '15px',
  fontWeight: '600',
  border: 'none',
  boxShadow: '0 0 15px 2px rgba(0,0,0, 0.9)'
}

const btnTrash = {
  backgroundColor: '#333',
  transform: 'translateY(-25px)',
  marginLeft: 'auto',
  color: '#fff',
  padding: '5px 15px',
  fontSize: '15px',
  fontWeight: '600',
  border: 'none',
  boxShadow: '0 0 15px 2px rgba(0,0,0, 0.9)'
}

export default FruitsComponent
