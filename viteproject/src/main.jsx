import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const anotherElement = (
//   <a href='https://google.com'>Click me to visit google</a>
// )

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank' 
  },
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
)
