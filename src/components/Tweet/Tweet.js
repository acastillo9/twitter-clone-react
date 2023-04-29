import './Tweet.css'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Tweet({ tweet }) {

  const navigate = useNavigate();

  function handleClick() {
    console.log('comments clicked')
  }

  function navigateToTweet() {
    navigate(`/tweets/${tweet.id}`)
  }

  return (
    <div className="tweet" onClick={navigateToTweet}>
      <div className='tweet-user-image'>
        <a href='/'>
          <img src={tweet.user.image} alt={tweet.user.username} />
        </a>
      </div>
      <div className='tweet-content'>
        <div className='tweet-content-head'>
          <a href='/'>{tweet.user.name}</a>
          <a className='username' href='/'>{tweet.user.username}</a>
        </div>
        <div className='tweet-content-body'>
          <p>{tweet.content}</p>
        </div>
        <div className='tweet-content-footer'>
          <button className='tweet-action-button comments-button' onClick={handleClick}>
            <span className='icon-wrapper mr-0-5'>
              <FaRegComment />
            </span>
            {tweet.comments}
          </button>
          <button className='tweet-action-button rt-button'>
            <span className='icon-wrapper mr-0-5'>
              <FaRetweet />
            </span>
            {tweet.rt}
          </button>
          <button className='tweet-action-button likes-button'>
            {tweet.likes}
          </button><button className='tweet-action-button views-button'>
            {tweet.views}
          </button>
          <button className='tweet-action-button share-button'>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tweet