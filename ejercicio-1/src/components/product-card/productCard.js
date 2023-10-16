import { useNavigate } from 'react-router-dom'
import './productCard.css'

const ProductCard = ({img, title, desc, amount}) => {

  const navigate = useNavigate()
  
  const _handleClick = () => {
    console.log('enter')
    navigate('/products/0')
  }

  return (
    <div className='card' onClick={_handleClick}>
      <img src={img}></img>
      <div className='data'>
        <h2>{title}</h2>
        <span>{desc}</span>
        <span>S/. {amount}</span>
      </div>
    </div>
  )
}

export default ProductCard;