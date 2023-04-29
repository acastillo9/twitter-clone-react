import { useParams } from "react-router-dom"
import Tweet from "../Tweet/Tweet"

const tweet = {
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
}

const replays = [
  {
    "id": "641f14c0fe773d357e95afe3",
    "creationDate": "2023-03-25T10:30:30.000Z",
    "content": "respuesta al primer tweet",
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
    "id": "641f14c0fe773d357e95afe4",
    "creationDate": "2023-03-25T10:30:30.000Z",
    "content": "otra respuesta Primer tweet",
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

function TweetDetails() {

  const { tweetId } = useParams()

  return (
    <>
      <Tweet tweet={tweet}></Tweet>
      {replays.map((replay) => <Tweet key={replay.id} tweet={replay}></Tweet>)}
    </>
  )
}

export default TweetDetails