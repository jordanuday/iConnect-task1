import React from 'react'
import './ProductsList.css'

class ProductsList extends React.Component {
  render() {
    const {products, onProductClick} = this.props

    return (
      <div className="product-list">
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id} onClick={() => onProductClick(product)}>
              <p>{product.title}</p>
              <img
                src={product.images[1]}
                alt={product.title}
                className="image"
              />
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ProductsList
