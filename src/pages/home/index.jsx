import Countdown from '../../components/countdown'
import Image from '../../components/image'
import ImageCard from '../../components/image-card'
import logo from '../../assets/imgs/logo-blanco.png'
import Discord from '../../components/discord'
import VoteList from '../../components/vote-list'
import TablePlayerInfo from '../../components/table-players-info'

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
      <section className='hero is-large  homeSectionOne src="..imgs/fondo1.jpg"
srcset="..imgs/fondo1.jpg 1x,
..imgs/fondo1.jpg 2x,
..imgs/fondo1.jpg.jpg 3x"
alt="imagen de lineage"'>
        <div className='hero-body'>
          <div className='title '>
            <Image src={logo} alt='logo' width={300} height={300} />
          </div>
          <div className='container'>
            <Countdown />
          </div>
        </div>
      </section>
      <section className='section is-medium has-background-grey-dark '>
        <div className='container has-text-centered '>
          <h1 className='title has-text-white is-uppercase has-text-weight-bold'>Section</h1>
          <div className='columns'>
            <div className='column'>
              <ImageCard></ImageCard>
            </div>
            <div className='column'>
              <ImageCard></ImageCard>
            </div>
            <div className='column'>
              <ImageCard></ImageCard>
            </div>
          </div>
        </div>
      </section>
      <section className='section section is-medium homeSectionThree'>
        <div className='container has-text-centered  '>
          <div className='columns'>
            <div className='column '>
              <h2 className='title has-text-white is-uppercase has-text-weight-bold'>Discord</h2>
              <Discord />
            </div>
            <div className='column '>
              <h2 className='title has-text-white is-uppercase has-text-weight-bold'>
                VOTE FOR US
              </h2>
              <VoteList />
            </div>
            <div className='column   '>
              <h2 className='title has-text-white is-uppercase has-text-weight-bold'>
                Top Players
              </h2>
              <TablePlayerInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
