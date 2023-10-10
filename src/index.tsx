import { createRoot } from 'react-dom/client'; 
import './app/styles/index.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const container = document.getElementById('root');


if (container) {
   const root = createRoot(container);

   root.render (
      <ErrorBoundary>
         <BrowserRouter>
            <StoreProvider>
               <ThemeProvider>
                  <App />
               </ThemeProvider>
            </StoreProvider>
         </BrowserRouter>
      </ErrorBoundary>   
   );
}





