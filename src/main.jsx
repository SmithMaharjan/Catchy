import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './apis/store.js'
import MusicContextProvider from './context/musicState.jsx'
import AlbumContextProvider from './context/AlbumState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AlbumContextProvider>
          <MusicContextProvider>
            <App />
          </MusicContextProvider>
        </AlbumContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
