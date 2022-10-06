import Home from './components/ReactScrollParallax'
import '/node_modules/primeflex/primeflex.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  return (
    <div>
      <div>Title Bar</div>
      <Home />
    </div>
      
  );
}

export default App;
