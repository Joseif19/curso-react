function Login(props) {

  const user = {
    username: "José María",
    email: "joseiglesias2004@gmail.com"
  }

  const handleClick = () =>{
    props.handleLogin(user);
  }

  return (
    <section>
        <h2>Login section</h2>
        <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default Login