import React, { Component } from 'react'
import './App.scss'
import IndexPage from './components/pages/indexPage/indexPage'
import LoginPage from './components/pages/loginPage/loginPage'
import ProfilePage from './components/pages/profilePage/profilePage'
import NewsPage from './components/pages/newsPage/newsPage'
import Page404 from './components/pages/page404/page404'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const renderRoutes = routes => {
  return (
    <Switch>
      {[
        ...routes.map(route => {
          const exact = route.path === '/' ? true : false
          if (!route.private) {
            return (
              <Route
                path={route.path}
                exact={exact}
                render={props => <route.component {...props} />}
              />
            )
          } else {
            return (
              <PrivateRoute
                path={route.path}
                exact={exact}
                component={route.component}
              />
            )
          }
        }),
        <Route render={Page404} />
      ]}
    </Switch>
  )
}

const adminUser = { login: 'Admin', password: 12345 }

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const routes = [
  {
    path: '/',
    component: IndexPage,
    name: 'Главная страница'
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'Авторизация'
  },
  {
    path: '/profile',
    component: ProfilePage,
    name: 'Профиль',
    private: true
  },
  {
    path: '/news',
    component: NewsPage,
    name: 'Новости'
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <nav>
              <Link key="/" to="/">
                Главная страница
              </Link>
              <Link key="/news" to="/news">
                Новости
              </Link>
              <Link key="/profile" to="/profile">
                Профиль
              </Link>
            </nav>
          </header>
          <main>{renderRoutes(routes)}</main>
        </div>
      </Router>
    )
  }
}

export default App
