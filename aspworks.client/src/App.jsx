import './App.css';
import { useState } from 'react';
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
//import DateTimePicker from "react-datetime-picker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function App() {
    const session = useSession();
    const supabaseClient = useSupabaseClient();
    const [start, setStart] = useState(new Date());
    const [endd, setEnd] = useState(new Date());    

    async function signIn() {
        const { error} = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        }); 
        if (error) {
            console.error(error.message);
            alert(error.message);
        }
    }
    async function signOut() {
        await supabaseClient.auth.signOut();
    }

    
    return (
        <div className="App">           
            <div>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <h2>Session: {session ? session.user.email : 'None'}</h2>
                    <p>Start of your schedule</p>
                    <DateTimePicker label="start"></DateTimePicker>
                    <p>End of your schedule</p>
                    <DateTimePicker label="end"></DateTimePicker>
                    <br></br>


                    <button onClick={signIn} style={{ color: 'black', backgroundColor: 'yellow' }}>Sign In</button>
                    <button onClick={signOut} style={{ color: 'black', backgroundColor: 'green' }} > Sign Out</button >       

                    </LocalizationProvider>           
            </div>
        </div>
        
    );

}

export default App;