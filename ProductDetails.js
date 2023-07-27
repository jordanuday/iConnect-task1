import React from 'react'

class ProductDetails extends React.Component {
  render() {
    const {product} = this.props

    return (
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <img src={product.images[0]} alt={product.title} />
      </div>
    )
  }
}

export default ProductDetails
