import './Feed.css'
import Tweet from "../Tweet/Tweet"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { uuidv4 } from '../../utils/uuid';

function Feed() {

  const user = useContext(AuthContext);

  const [tweets, setTweets] = useState([])
  const [newTweetText, setNewTweetText] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data)
      })
  }, [])

  function handleNewTweet() {
    const newTweet = {
      id: uuidv4(),
      creationDate: new Date(),
      content: newTweetText,
      likes: 0,
      rt: 0,
      views: 0,
      media: [],
      comments: 0,
      user: {
        id: user.id,
        name: "Esteban",
        username: "@esteband",
        image: "https://vader.news/__export/1650406255213/sites/gadgets/img/2022/04/19/outlander_jamie.jpg_1175821642.jpg"
      },
    }

    fetch('http://localhost:3001/tweets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTweet),
    }).then(() => {
      setTweets([newTweet, ...tweets])
    })
  }

  return (
    <div className='feed'>
      <div>
        <input type="text" onChange={(e) => setNewTweetText(e.target.value)} />
        <button className="btn" type="button" onClick={handleNewTweet}>Tweet</button>
      </div>
      {tweets.map((tweet) => (<Tweet key={tweet.id} tweet={tweet} />))}
    </div>
  )
}

export default Feed
