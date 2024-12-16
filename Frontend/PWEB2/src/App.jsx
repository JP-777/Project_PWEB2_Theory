import './App.css';
import { Micomponente } from './components/cardinfo';


function App() {

  const images = [
    'https://via.placeholder.com/400x250?text=Imagen+1',
    'https://via.placeholder.com/400x250?text=Imagen+2',
    'https://via.placeholder.com/400x250?text=Imagen+3',
  ];
  return (
    <>
      <div>
      <Micomponente
      title="Hotel Waaa"
      description="WAOS"
      images={images}/>
      </div>
  
    </>
  );
}

export default App