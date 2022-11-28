import { Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Rent from './pages/Rent';
import Buy from './pages/Buy';
import Sell from './pages/Sell'
import Manage from './pages/Manage';
import Resources from './pages/Resources';
import Favourites from './pages/Favourites';
import { useStoreActions, useStoreState } from 'easy-peasy';

const BASE_URL = "http://localhost:3500/data"

function App() {

  const setPosts = useStoreActions((actions)=>actions.setPosts)
  const posts = useStoreState((state)=> state.posts)
  const [errors, setErrors] = useState('')
  

  const {data, error} = useAxiosFetch(BASE_URL)

  useEffect(() => {
    setPosts(data) 
    setErrors(error)   
  }, [setPosts, error, data])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='signup' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='rent' 
          element={
          <Rent 
            posts={posts}
            errors={errors}
          />}
        />
        <Route path='buy' element={<Buy/>}/>
        <Route path='sell' element={<Sell/>}/>
        <Route path='manage' element={<Manage/>}/>
        <Route path='resources' element={<Resources/>}/>
        <Route path='favourites' 
          element={
            <Favourites
              posts={posts}
              errors={errors}
            />
          }/>
      </Route>
    </Routes>
  );
}

export default App;
