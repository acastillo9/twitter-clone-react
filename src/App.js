import './App.css';
import Feed from './components/Feed/Feed'
import { Routes, Route, useNavigate } from "react-router-dom"
import TweetDetails from './components/TweetDetails/TweetDetails';
import { AuthContext } from './context/authContext';
import { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {

  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [user])

  return (
    <AuthContext.Provider value={user}>
      <Header setUser={setUser}></Header>
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="tweets/:tweetId" element={<TweetDetails />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
