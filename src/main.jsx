import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Route/router'
import { StrictMode } from 'react'
import AuthProvider from './AuthProvider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider>
<RouterProvider router={router} />
<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName="toast-container"
  toastOptions={{
    // Default options for all toasts
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      fontSize: '14px',
      maxWidth: '350px',
    },
    
    // Custom animations
    className: 'toast-animate',
    
    // Success toast
    success: {
      style: {
        background: 'linear-gradient(145deg, #28a745, #20c997)',
        borderLeft: '4px solid #1e7e34',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#28a745',
      },
    },
    
    // Error toast
    error: {
      style: {
        background: 'linear-gradient(145deg, #dc3545, #ff6b81)',
        borderLeft: '4px solid #bd2130',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#dc3545',
      },
    },
    
    // Info toast
    info: {
      style: {
        background: 'linear-gradient(145deg, #17a2b8, #0dcaf0)',
        borderLeft: '4px solid #138496',
      },
    },
    
    // Warning toast
    warning: {
      style: {
        background: 'linear-gradient(145deg, #ffc107, #ffda6a)',
        borderLeft: '4px solid #d39e00',
        color: '#212529',
      },
    },
  }}
/>
</AuthProvider>

  </StrictMode>,
)
