import './detailProducts.css'
import { useParams } from 'react-router-dom';

const DetailProdcuts = () => {
  const { productId } = useParams()
  return (
    <>
      <h1>Id del product: {productId}</h1>
    </>
  )
}

export default DetailProdcuts;