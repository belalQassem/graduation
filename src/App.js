
import './App.css';
import Header from './Components/Header';
import PageContent from './Components/PageContent';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <PageContent/>
    {/* <Footer1/> */}
    </BrowserRouter>
    </div>
  );
}


export default App;
