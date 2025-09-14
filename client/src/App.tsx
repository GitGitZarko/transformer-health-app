import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import {CssBaseline} from "@mui/material";
import {Dashboard} from "./components/Dashboard/Dashboard.tsx";
import {useSharedData} from "./hooks/useSharedData.tsx";

function App() {
    const data = useSharedData([]);

    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <Dashboard data={data}/>
        </>
    )
}

export default App
