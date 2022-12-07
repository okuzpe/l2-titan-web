import Login from '../../components/login'

const AuthPage = () => {
  return (
    <section className='section is-large loginPage'>
      <div className='columns is-mobile is-centered'>
        <div className='column is-narrow '>
          <Login />
        </div>
      </div>
    </section>
  )
}
export default AuthPage
