import React from 'react'

class AddItem extends React.Component {
  state = {
    quantity: 0,
    selectedId: 40
  }

  onSubmit = (ev) => {
    ev.preventDefault()
    console.log('onSubmit() called', this.state)
    this.props.addItemSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Quantity</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={ (ev) => this.setState({quantity: ev.target.value}) } />
        <label>Products</label>
          <select name="selectedId" onChange={(ev) => this.setState({selectedId: ev.target.vaue}) } >
            {this.props.products.map((product, i) => <option key={product.id} value={product.id}> {product.name} </option> )}
          </select>
          <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default AddItem;
