// import { string, number } from 'prop-types'
import imageCard from '../assets/imgs/card.jpg'

const ImageCard = () => {
  return (
    <div className='image-card'>
      <div className='card'>
        <div className='card-images'>
          <figure className='image is-3by2'>
            <img className='imagecard' src={imageCard} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
