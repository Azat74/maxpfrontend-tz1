import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
export default function LoginPage(props) {
  const [login, setLogin] = useState('Admin')
  const [password, setPassword] = useState('12345')
  const [redirect, setRedirect] = useState(false)
  const AppStatus = props.isAuthenticated
  const handleRedirect = () => {
    //return <div>test</div>
    let from
    try {
      from = props.location.state.from.pathname
    } catch (e) {}
    if (!!from) {
      return <Redirect to={`${from}`} />
    } else {
      return <Redirect to="/" />
    }
  }
  const inputRef = React.createRef()
  useEffect(() => {
    // console.log(login, password)
    // inputRef.focus()
  })
  if (AppStatus === true) {
    return handleRedirect()
  }
  if (redirect === false) {
    return (
      <div className="login-page">
        <div className="login-page__title">Авторизация</div>
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log('submit')
            props.loginAction(e, login, password)
            setRedirect(true)
          }}
        >
          <input
            ref={inputRef}
            autoFocus
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
    return handleRedirect()
  }
}
