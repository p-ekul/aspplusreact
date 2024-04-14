import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createClient } from "@supabase/supabase-js"
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const supabase = createClient(
    "https://qspejxvpnttjhiyphgjm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcGVqeHZwbnR0amhpeXBoZ2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5OTM1NzAsImV4cCI6MjAyODU2OTU3MH0.SY_XrfBxnvbJ0YVItFRqZCnIduuYcZo9VRdHLJ4QRA8"
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
            <App />
        </SessionContextProvider>
  </React.StrictMode>,
)
