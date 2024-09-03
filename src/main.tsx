import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { EnrollProvider } from './context/EnrollModalProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <EnrollProvider>
          <App />
        </EnrollProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
