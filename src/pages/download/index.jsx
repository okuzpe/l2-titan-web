import imgMonster from '../../assets/imgs/monster1.png'
import Notification from '../../components/notification'

const dataClient = {
  title: 'Download and install the game',
  buttons: [
    { name: 'uTorrent', url: 'https://pvp.shadowlands.club/Lineage%202%20Interlude.zip.torrent' },
    { name: 'Google', url: 'https://rufiles.shadowlands.club/Lineage_2_Interlude.zip' },
    {
      name: 'Mega',
      url: 'https://mega.nz/file/vCYzGThR#tiJg2wxzN7dzPzckyyWwnMyCwVhpJ6P4elatYGtFDTg',
    },
  ],
}

const dataPatch = {
  title: 'Download the System',
  buttons: [{ name: 'Google', url: 'https://rufiles.shadowlands.club/Lineage_2_Interlude.zip' }],
}
const DownloadPage = () => {
  return (
    <div className='downloadPage has-background-grey-dark'>
      <div className='container is-max-desktop'>
        <div className='is-flex is-justify-content-space-evenly '>
          <img src={imgMonster} alt='TEST' width='300' height={300} />
        </div>
        <div className='is-flex is-justify-content-space-evenly'>
          <div className='m-5'>
            <Notification {...dataClient} />
          </div>

          <div className='m-5'>
            <Notification {...dataPatch} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DownloadPage
