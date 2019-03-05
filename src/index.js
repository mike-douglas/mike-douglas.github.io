import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import jsonp from 'jsonp'

const listadoPocket = 'http://listado.us-west-1.elasticbeanstalk.com/v1/export/28a9a27536c2a9273755adcf3a6377de3d3d5dd6/js/'
const listadoSpotify = 'http://listado.us-west-1.elasticbeanstalk.com/v1/export/500c8be20fcd159c8f74ef40246f1dd9aecf05e0/js/'

const jsonpFeed = (url) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    jsonp(url, null, (error, data) => setItems(data))
  })

  return [items, setItems]
}

const LinkIcon = () => (
  <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="0.85em" height="0.85em" viewBox="0 0 24 24"><path d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"/></svg>
)

const LinkFeedItem = ({ item }) => (
  <li>
    <a href={item.url} target="_blank">
      {item.title}
      <span>{item.url.split('/', 3)[2]} <LinkIcon/></span>
    </a>
  </li>
)

const LinkFeed = () => {
  const [items, setItems] = jsonpFeed(listadoPocket)

  return (
    <ul className="quick-links">
      {items.map((item, k) => (
        <LinkFeedItem key={k} item={item.content}/>
      ))}
    </ul>
  )
}

const SpotifyFeed = () => {
  const [playlist, setPlaylist] = jsonpFeed(listadoSpotify)

  return (
    <div>Nothing to see here, yet.</div>
  )
}

ReactDOM.render(
  <div>
    <h2>Quick Links</h2>
    <p><span className="bullet">📚</span>Stuff I'm reading, updated constantly</p>
    <LinkFeed/>
  </div>,
  document.getElementById('app')
)
