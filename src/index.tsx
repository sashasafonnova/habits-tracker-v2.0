import { createRoot } from 'react-dom/client'; 
import './app/styles/index.scss';


const container = document.getElementById('root');
const root = createRoot(container);
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';


root.render (
   <BrowserRouter>
      <App />
   </BrowserRouter>
);



