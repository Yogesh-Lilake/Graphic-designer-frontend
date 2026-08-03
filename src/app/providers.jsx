import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import '../index.css'

function Providers() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Providers