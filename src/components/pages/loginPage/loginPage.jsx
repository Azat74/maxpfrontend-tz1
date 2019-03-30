import React from 'react'

export default function LoginPage(props) {
  return (
    <div className="login-page">
      Авторизация
      <form>
        <input required />
        <input type="password" required minLength="5" />
        <button>Войти</button>
      </form>
    </div>
  )
}
