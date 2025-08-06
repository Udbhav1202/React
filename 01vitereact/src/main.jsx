import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import New from './new.jsx'


// const reactElement = {
//     type :'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">click me to visit google</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  <App/>
)
