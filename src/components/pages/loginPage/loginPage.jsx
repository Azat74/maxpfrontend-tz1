import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
export default function LoginPage(props) {
  const [login, setLogin] = useState('Admin')
  const [password, setPassword] = useState('12345')
  const [redirect, setRedirect] = useState(false)
  const handleRedirect = () => {
    return <div>test</div>
    //return <Redirect to="/" />
  }
  useEffect(() => {
    console.log(login, password)
  })
  if (redirect === false) {
    return (
      <div className="login-page">
        <div className="login-page__title">Авторизация</div>
        <form onSubmit={e => props.loginAction(e, login, password)}>
          <input
            onInput={e => setRedirect(true)}
            defaultValue={'Admin'}
            onChange={e => setLogin(`${e.target.value}`)}
            required
          />
          <input
            defaultValue={'12345'}
            onChange={e => setPassword(`${e.target.value}`)}
            type="password"
            required
            minLength="5"
          />
          <button>Войти</button>
        </form>
      </div>
    )
  } else {
    handleRedirect()
  }
}
