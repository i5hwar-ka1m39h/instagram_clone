import {Button} from '@chakra-ui/react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import PageLayout from './layouts/PageLayout';
import Profile from './pages/Profile';
import useAuthStore from './store/authStore';
import { auth } from './firebase/firebase';

function App() {
  const authUser = useAuthStore(state=>state.user);

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/auth'/>}/>
        <Route path='/auth' element={!authUser ? <Auth/> :<Navigate to={'/'}/>}/>
        <Route path='/:username' element={<Profile/>}/>
      </Routes>
    </PageLayout>
     )
}

export default App
