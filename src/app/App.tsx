import { Footer } from 'widgets/Footer';
import { AppRouter } from './providers/routerProvider';
import { Header } from 'widgets/Header';


const App = () => {
   return (
      <div className='app app_light_theme'>
         <Header/>
         <div className='appContent'>
            <AppRouter />
         </div>
         <Footer/>    
      </div>
   );
};

export default App;