import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
//
import { Provider } from 'react-redux'
//me va a permitir avisarle a mi app react que tiene un store disponilble. Provider es un componente
import store from './redux/Store/Store'



ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter>
    <App />
  </BrowserRouter>,

  </Provider>,
document.getElementById('root')

)
