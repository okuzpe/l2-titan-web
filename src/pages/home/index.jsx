import Countdown from '../../components/countdown'
import Image from '../../components/image'
import ImageCard from '../../components/image-card'
import logo from '../../assets/imgs/logo-blanco.png'
import Discord from '../../components/discord'
import VoteList from '../../components/vote-list'

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
      <section className='hero is-large  homeSectionOne'>
        <div className='hero-body'>
          <div className='title '>
            <Image src={logo} alt='logo' width={300} height={300} />
          </div>
          <div className='container'>
            <Countdown />
          </div>
        </div>
      </section>
      <section className='section homeSectionTwo'>
        <div className='content is-large'>
          <h2 className='title is-2 has-text-centered'>Title 2</h2>
        </div>
        <div className='columns is-multiline  is-centered'>
          <ImageCard></ImageCard>
          <ImageCard></ImageCard>
          <ImageCard></ImageCard>
        </div>
      </section>
      <section className='section'>
        <nav className='columns'>
          <div className='column'>
            <div>
              <h2 className='title'>Tweets</h2>
              <div className='body-level'>
                <Discord />
              </div>
            </div>
          </div>
          <div className='column'>
            <div>
              <h2 className='title'>VOTE FOR US</h2>
              <div className='body-level'>
                <VoteList />
              </div>
            </div>
          </div>
          <div className='column'>
            <div>
              <h2 className='title'>Tweets</h2>
              <div className='body-level'>
                <Discord />
              </div>
            </div>
          </div>
        </nav>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
