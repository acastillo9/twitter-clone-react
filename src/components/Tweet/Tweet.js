import './Tweet.css'

function Tweet({ tweet }) {
  return (
    <button className="tweet">
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
      </div>
    </button>
  )
}

export default Tweet