import { createRoot } from 'react-dom/client'; 
import './app/styles/index.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';


const container = document.getElementById('root');
const root = createRoot(container);


root.render (
   
   <StoreProvider>
      <ThemeProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ThemeProvider>
   </StoreProvider>
   
);



