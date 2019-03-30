import React from 'react'
import LoginPage from '../pages/loginPage/loginPage'

export default function LoginPage(component) {
  if (!!localStorage.auth && localStorage.auth === 'true') {
    return component
  } else {
    return LoginPage
  }
}
