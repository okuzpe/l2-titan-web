import { string, number } from 'prop-types'

const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />
}

Image.propTypes = {
  src: string,
  alt: string,
  width: number,
  height: number,
}
export default Image
