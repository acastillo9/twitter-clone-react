import './Feed.css'
import Tweet from "../Tweet/Tweet"

const tweets = [
  {
    "id": "641f14c0fe773d357e95afe1",
    "creationDate": "2023-03-25T10:30:30.000Z",
    "content": "Primer tweet",
    "likes": 0,
    "rt": 1,
    "views": 0,
    "media": [],
    "comments": 1,
    "user": {
      "_id": {
        "$oid": "641f034efe773d357e95afda"
      },
      "name": "Esteban",
      "username": "@esteband",
      "image": "https://vader.news/__export/1650406255213/sites/gadgets/img/2022/04/19/outlander_jamie.jpg_1175821642.jpg"
    },
    "retweetTo": {}
  },
  {
    "id": "641f14c0fe773d357e95afe2",
    "creationDate": "2023-03-25T10:30:30.000Z",
    "content": "Otro tweet",
    "likes": 0,
    "rt": 1,
    "views": 0,
    "media": [],
    "comments": 1,
    "user": {
      "_id": {
        "$oid": "641f034efe773d357e95afda"
      },
      "name": "Esteban",
      "username": "@esteband",
      "image": "https://vader.news/__export/1650406255213/sites/gadgets/img/2022/04/19/outlander_jamie.jpg_1175821642.jpg"
    },
    "retweetTo": {}
  }
]

function Feed() {
  return (
    <div className='feed'>
      feed component
      {tweets.map((tweet) => (<Tweet key={tweet.id} tweet={tweet} />))}
    </div>
  )
}

export default Feed