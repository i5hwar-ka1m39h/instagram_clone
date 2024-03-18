import {Button} from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import PageLayout from './layouts/PageLayout';
import Profile from './pages/Profile';

function App() {
  

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/:username' element={<Profile/>}/>
      </Routes>
    </PageLayout>
     )
}

export default App
