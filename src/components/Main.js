import React, { Component } from 'react'
import FruitsComponents from './FruitsComponent'
import Header from './Header'
import Total from './Total'

export class Main extends Component {
  constructor(){
    super();
    this.state = {
      loading: true,        // API Loading

      cart: 0,              // Total Fruits Price
      totalFruits: 0,       // Total Fruits Count

      fruitsName: [],       // Total Fruits Name

      TotalfruitsName: [],

      newName: '',          // OncChange Edit Name
      newPrice: '',         // OncChange Edit Price
      total: [],            // Total Price

      fruits: []            // Fruits API
     }

  }

  componentDidMount() {
    fetch('./fruits.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          fruits: data
        })
      })

  }

  componentDidUpdate() {
    console.log(this.state.fruitsName.sort())
    this.state.fruitsName.map(fruit => {
      
    })
  }

  addPrice = (price, name) => {
    this.setState(prevState =>  { return { totalFruits: prevState.totalFruits + 1}})
    this.setState(prevState =>  { return { cart: prevState.cart + price}})

    
    this.setState({ fruitsName: [...this.state.fruitsName, name] })
  
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  } 
  
  onSubmit = (e) => {
    e.preventDefault()
  }

  updateName = (id) => {
    this.setState({
      fruits: this.state.fruits.map(item => {
        if(item.id === id){
          item.name = this.state.newName
        }
        return item
      })
    })

  }

  updatePrice = (id) => {
    this.setState({
      fruits: this.state.fruits.map(item => {
        if(item.id === id){
          item.price = this.state.newPrice
        }
        return item
      })
    })
  }

  editHeading = (id) => {
    
    this.setState({
      fruits: this.state.fruits.map(item => {
        if(item.id === id){
          
          item.name =   <form onSubmit={this.onSubmit}>
                          <input  type="text" 
                                  name="newName"
                                  onChange={this.onChange}
                          />
                          <button type='submit'
                                  onClick={this.updateName.bind(this, id)}>
                                  Update
                          </button>

                        </form>
        }

        return item
      
      
      })
    })
  }

  editPrice = (id) => {
    this.setState({
      fruits: this.state.fruits.map(item => {
        if(item.id === id){
          item.price =   <form onSubmit={this.onSubmit}>
                          <input  type="text" 
                                  name="newPrice"
                                  onChange={this.onChange}
                          />
                          <button type='submit'
                                  onClick={this.updatePrice.bind(this, id)}>
                                  Update
                          </button>

                        </form>
        }

        return item
      
      
      })
    })
  }


  deleteFruit = (id) => {
    console.log('Deleted', id)
    this.setState({
      fruits: this.state.fruits.filter(item => {
        if(item.id !== id) {
          return item
        }

        return item
      })
    })
  }


  total = () => {
    alert("I'm Totaled")
  }



  render() {
    

    if(this.state.loading === true){
      return <h1>Loading....</h1>
    }

    return (
      <div className="container">
        <Header cart={this.state.cart}
                totalFruits={this.state.totalFruits} 
        />
        <hr />
          <h1>Hey, Welcome People</h1>
          <h2>Here you can find the best prices for your favourite fruits.</h2>

          
        <div className="contents">
          

          {/* <h1> Fruits: {itemsName} </h1>
          <h1> Price: {itemsPrice} </h1> */}

          {this.state.fruits.map(item => 
            <FruitsComponents
              key={item.id}
              item={item}
              addPrice={this.addPrice}
              editHeading={this.editHeading}
              editPrice={this.editPrice}
              deleteFruit={this.deleteFruit}
          />
          )
            
          }
    
          <Total total={this.total} />
        </div>
      </div>
    )
    

    
  }
}

export default Main

