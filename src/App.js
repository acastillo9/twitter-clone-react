import './App.css';
import Feed from './components/Feed/Feed'
import { Routes, Route, Outlet, Link } from "react-router-dom"
import TweetDetails from './components/TweetDetails/TweetDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      <Route path="tweets/:tweetId" element={<TweetDetails />}></Route>
    </Routes>
  );
}

export default App;
