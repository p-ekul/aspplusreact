import './App.css';
import ApiCalendar from "react-google-calendar-api";
import { useSession, useSupabaseClient } from
    "@supabase/auth-helpers-react";
function App() {
    const session = useSession();
    const supabaseClient = useSupabaseClient();

    //async function signIn() {
    //    const { error} = await supabaseClient.auth.signInWithOAuth({
    //        provider: 'google',
    //        options: {
    //            scopes: 'https://www.googleapis.com/auth/calendar'
    //        }
    //    }); 
    //    if (error) {
    //        console.error(error.message);
    //        alert(error.message);
    //    }
    //}
    //async function signOut() {
    //    await supabaseClient.auth.signOut();
    //}

    
    return (
        <div className="App">
            <h1>HELLO THERE</h1>
            <h2>Session: {session ? session.user.email : 'None'}</h2>
            <button onClick={signIn} style={{ color: 'black', backgroundColor: 'yellow' }  }>Sign In</button>
            <button onClick={signOut} style={{ color: 'black', backgroundColor: 'green' }} > Sign Out</button >               
        </div>
    );

    //https://console.cloud.google.com/apis/credentials?hl=ko&project=calendarapi-420207

    
}

export default App;

