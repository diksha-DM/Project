import { useState } from 'react'

function Card({ title }) {
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <span className={`status ${liked ? 'liked' : 'not-liked'}`}>
        {liked ? 'Liked' : 'Not Liked'}
      </span>
      <button type="button" onClick={handleClick}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  )
}

export default Card
