import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import { ToastContainer, toast } from 'react-toastify';

// import img from './assets/images/man.png';
function App() {
 
          
    return (

        <>
        <ToastContainer/>
            <Header />
           <Main />
            <Footer />
        </>
    );
}

export default App;