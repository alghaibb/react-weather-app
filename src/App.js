import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-[#1488CC] to-[#2B32B2] h-fit shadow-xl shadow-gray-400 selection:bg-blue-500 selection:dark:bg-gray-300'>
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
