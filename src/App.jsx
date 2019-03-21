import React, { Component } from 'react'
import './App.scss'
import IndexPage from './components/pages/indexPage/indexPage'
import LoginPage from './components/pages/loginPage/loginPage'
import ProfilePage from './components/pages/profilePage/profilePage'
import NewsPage from './components/pages/newsPage/newsPage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const RouteWithSubRoutes = route => {
  const exact = route.path === '/' ? true : false
  return (
    <Switch>
      <Route
        path={route.path}
        exact={exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
      <Route render={props => <div className="container" />} />
    </Switch>
  )
}

const routes = [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/news',
    component: NewsPage
  }
]

class App extends Component {
  state = {
    color: this.props.color
  }
  render() {
    const { color } = this.state
    return <div className="App">Hello world!{color}</div>
  }
}

export default App
