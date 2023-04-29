import './Feed.css'
import Tweet from "../Tweet/Tweet"
import { useEffect, useState } from 'react';

function Feed() {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data)
      })
  }, [])

  return (
    <div className='feed'>
      feed component
      {tweets.map((tweet) => (<Tweet key={tweet.id} tweet={tweet} />))}
    </div>
  )
}

export default Feed