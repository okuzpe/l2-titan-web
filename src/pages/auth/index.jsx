import Login from '../../components/login'

const AuthPage = () => {
  const data = (data) => {
    console.log(data)
  }

  return (
    <div className='container is-max-desktop'>
      <Login getData={data()} />
    </div>
  )
}
export default AuthPage
