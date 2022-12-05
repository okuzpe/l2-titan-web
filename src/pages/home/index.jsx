import Countdown from '../../components/countdown'
import Image from '../../components/image'
import ImageCard from '../../components/image-card'
import logo from '../../assets/imgs/logo-blanco.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          {/* <strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>. The source code
          is licensed
          <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is
          licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>. */}
        </p>
      </div>
    </footer>
  )
}

const HomePage = () => {
  return (
    <div className='HomePage'>
      <section className=' homeSectionOne'>
        <div className='container is-max-widescreen  has-text-white'>
          <div className='hero is-medium '>
            <div className='hero-body '>
              <Image src={logo} alt='logo' width={300} height={300} />
              {/* <h1 className='title is-size-1 is-uppercase has-text-weight-bold has-text-white'>
                Hero title
              </h1> */}
              {/* <p className='subtitle has-text-white'>Hero subtitle</p> */}
            </div>
          </div>
          <div className=''>
            <Countdown />
          </div>
        </div>
      </section>
      <section className='section homeSectionTwo'>
        <div className='container'>
          <h3 className='title is-3 has-text-centered has-text-white'>Title 3</h3>

          <div className='is-flex is-justify-content-space-evenly'>
            <div className='mx-5'>
              <ImageCard />
            </div>
            <div className='mx-5'>
              <ImageCard />
            </div>
            <div className='mx-5'>
              <ImageCard />
            </div>
            <div className='mx-5'>
              <ImageCard />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
