import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        items: []
    }

    handleSubmit = item => {
        this.setState({ items: [...this.state.items, item] })
    }

    removeItem = index => {
        const { items } = this.state
      
        this.setState({
            items: items.filter((task, i) => {
                return i !== index
          }),
        })
      }
    
    render() {
       const items = this.state;

      return (
        <div className="container">
          <Table itemData={items} removeItem={this.removeItem}/>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      );
    }
}

export default App;