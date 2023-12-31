import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-[#1488CC] to-[#2B32B2] h-fit shadow-xl shadow-gray-400 selection:bg-gray-400/60'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title='hourly forecast'/>
      <Forecast title='daily forecast'/>
    </div>
  );
}

export default App;
