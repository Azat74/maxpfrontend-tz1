import React, { Component } from 'react'
import './App.scss'
import IndexPage from './components/pages/indexPage/indexPage'
import LoginPage from './components/pages/loginPage/loginPage'
import ProfilePage from './components/pages/profilePage/profilePage'
import NewsPage from './components/pages/newsPage/newsPage'
import Page404 from './components/pages/page404/page404'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const renderRoutes = routes => {
  return (
    <Switch>
      {[
        ...routes.map(route => {
          const exact = route.path === '/' ? true : false
          return (
            <Route
              path={route.path}
              exact={exact}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          )
        }),
        <Route render={Page404} />
      ]}
    </Switch>
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
    name: 'Профиль'
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
              <Link key="contact1" to="/login1">
                Контакты1
              </Link>
              {routes.map(item => (
                <Link key={item.path} to={item.path}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </header>
          <main>{renderRoutes(routes)}</main>
        </div>
      </Router>
    )
  }
}

export default App
