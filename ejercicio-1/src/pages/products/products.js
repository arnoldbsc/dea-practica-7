import './products.css'

import ProductCard from '../../components/product-card/productCard.js'
import productImg from '../../imgs/demo.png'
const Products = () => {
  return (
    <div className='content'>
      <ProductCard
        img={productImg}
        amount={300}
        desc='Descripcion'
        title='Titulo'
      ></ProductCard>
    </div>
  )
}

export default Products;