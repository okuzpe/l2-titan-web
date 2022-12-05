import { string, array } from 'prop-types'

const Notification = ({ title, buttons }) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className='notification is-link is-light '>
      <div className='container has-text-centered mb-5'>
        <strong>{title}</strong>
      </div>
      <nav className='level'>
        {buttons.map((button, index) => (
          <div className='level-item has-text-centered' key={index}>
            <button
              className='button mx-1 is-large is-rounded has-text-weight-bold'
              onClick={() => openInNewTab(button.url)}
            >
              {button.name}
            </button>
          </div>
        ))}
      </nav>
      {/* <nav className='level'>
        <div className='level-item has-text-centered'>
          <button className='button mx-1 is-large is-rounded has-text-weight-bold'>uTorrent</button>
        </div>
        <div className='level-item has-text-centered'>
          <button className='button mx-1 is-large is-rounded has-text-weight-bold'>Google </button>
        </div>
        <div className='level-item has-text-centered'>
          <button className='button mx-1 is-large is-rounded has-text-weight-bold'>Mega </button>
        </div>
      </nav> */}
    </div>
  )
}

Notification.propTypes = {
  title: string,
  buttons: array,
}

export default Notification
