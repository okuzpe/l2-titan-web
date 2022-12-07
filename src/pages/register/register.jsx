import Register from '../../components/register'

const RegisterPage = () => {
  const data = (data) => {
    console.log(data)
  }

  return (
    <div className='container is-max-desktop'>
      <Register getData={data()} />
    </div>
  )
}
export default RegisterPage
