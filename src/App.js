import './App.css';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full">
      <h1 className='text-3xl mt-5 font-bold text-white' >Vehicle movement of map</h1>
      <p className='text-white'>Click on two point on map and wait for best routes</p>
      <MapComponent/>
    </div>
  );
}

export default App;
