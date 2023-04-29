import { useState } from "react";

const user = {
  id: '123',
  email: 'test@mail.com',
  password: '123456'
}

function Login({ setUser }) {

  const [email, setEmail] = useState()
  const [password, setPasword] = useState()

  function login() {
    if (email === user.email && password === user.password) {
      // fetch('http://localhost:3001', {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({email, password}),
      // })

      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  return (
    <div>
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPasword(e.target.value)} />
      <button className="btn" type="button" onClick={login}>Login</button>
    </div>
  )
}

export default Login;
