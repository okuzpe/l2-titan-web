import Article from '../../components/articles'

const DownloadPage = () => {
  return (
    <div className='container is-max-desktop'>
      <div className='is-flex is-justify-content-space-evenly'>
        <div className='m-5'>
          <Article />
        </div>
        <div className='m-5'>
          <Article />
        </div>
      </div>
    </div>
  )
}
export default DownloadPage
