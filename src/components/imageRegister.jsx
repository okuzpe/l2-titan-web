import { string, number } from 'prop-types'

const imageRegister = ({ src, alt, width, height }) => {
    return <img src={src} alt={alt} width={width} height={height} />
}
 
imageRegister.propTypes = {
  src: string,
  alt: string,
  width: number,
  height: number,
}
export default imageRegister