import './App.css';
import Header from './Header';
import MainViewer from './MainViewer';
import { Footer } from './Footer';

function App() {
  

  return (
    <>
      <Header/>
      <div className="App">
      <MainViewer/>
      </div>
      <Footer />
    </>
  );
}

export default App;
