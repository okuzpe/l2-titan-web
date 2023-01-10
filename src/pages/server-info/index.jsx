import logo from '../../assets/imgs/login3.jpg'

const ServerInfoPage = () => {
  return (
    <div className='columns is-centered'>
      <div className='column is-half'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by4'>
              <img src={logo} alt='Placeholder image' />
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left'>
                <figure className='image is-48x48'>
                  <img
                    src='https://bulma.io/images/placeholders/96x96.png'
                    alt='Placeholder image'
                  />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4'>Wolf</p>
                <p className='subtitle is-6'>@Wolfis</p>
              </div>
            </div>

            <div className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.{' '}
              <a>@bulmaio</a>.<a href='#'>#css</a> <a href='#'>#responsive</a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className='columns is-left'>
        <div className='column is-half'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by4'>
                <img src={logo} alt='Placeholder image' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img
                      src='https://bulma.io/images/placeholders/96x96.png'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-4'>Wolf</p>
                  <p className='subtitle is-6'>@Wolfis</p>
                </div>
              </div>

              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                mauris. <a>@bulmaio</a>.<a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='columns is-right'>
        <div className='column is-half'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by4'>
                <img src={logo} alt='Placeholder image' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img
                      src='https://bulma.io/images/placeholders/96x96.png'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-4'>Wolf</p>
                  <p className='subtitle is-6'>@Wolfis</p>
                </div>
              </div>

              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                mauris. <a>@bulmaio</a>.<a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServerInfoPage
