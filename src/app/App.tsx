import { Footer } from 'widgets/Footer';
import { AppRouter } from './providers/routerProvider';
import { Header } from 'widgets/Header';
import { useTheme } from './providers/ThemeProvider';


const App = () => {
   const {theme} = useTheme();

   return (
      <div className={`app ${theme}`}>
         <Header/>
         <div className='appContent'>
            <AppRouter />
         </div>
         <Footer/>    
      </div>
   );
};

export default App;