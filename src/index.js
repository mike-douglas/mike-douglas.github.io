import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import jsonp from 'jsonp'
import { timeParse } from 'd3-time-format'

const listadoPocket = 'https://zi8bef7mgi.execute-api.us-west-2.amazonaws.com/dev/v1/export/28a9a27536c2a9273755adcf3a6377de3d3d5dd6/js/'
const listadoSpotify = 'https://zi8bef7mgi.execute-api.us-west-2.amazonaws.com/dev/v1/export/500c8be20fcd159c8f74ef40246f1dd9aecf05e0/js/'

const jsonFeed = (url) => {
  const [items, setItems] = useState([])
  const parser = timeParse('%Y-%m-%d %H:%M:%S')
  const cmp = (a, b) => (parser(b.created_date) < parser(a.created_date) ? 0 : 1)

  useEffect(() => {
    jsonp(url, null, (error, data) => {
      data.sort((a, b) => (cmp(a, b) ? 1 : cmp(b, a) ? -1 : 0))
      setItems(data)
    })
  }, [])

  return [items, setItems]
}

const LinkIcon = () => (
  <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="0.85em" height="0.85em" viewBox="0 0 24 24"><path d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"/></svg>
)

const LinkFeedItem = ({ item }) => (
  <li>
    <a href={item.url} target="_blank">
      {item.title}
      <span>{item.url.replace(/www\./, '').split('/', 3)[2]} <LinkIcon/></span>
    </a>
  </li>
)

const LinkFeed = () => {
  const [items, setItems] = jsonFeed(listadoPocket)

  return (
    <ul className="quick-links">
      {items.slice(0, 6).map((item, k) => (
        <LinkFeedItem key={k} item={item.content}/>
      ))}
    </ul>
  )
}

const SpotifyFeedItem = ({ item }) => (
  <li>
    <a href={item.trackURL} target="_new">
      <img src={item.albumURL}/>
      <div>
      <span className="album">{item.album}</span>
        <span className="track">{item.track} <LinkIcon/></span>
        <span className="artist">by {item.artist}</span>
      </div>
    </a>
  </li>
)

const SpotifyFeed = () => {
  const [playlist, setPlaylist] = jsonFeed(listadoSpotify)

  return (
    <ul className="playlist">
      {playlist.slice(0, 2).map((item, k) =>(
        <SpotifyFeedItem key={k} item={item.content}/>
      ))}
    </ul>
  )
}

const ImageCarousel = () => {
  const imageFeed = [
    "/assets/12393811_154536868247139_2140413012_n.jpg",
    "/assets/13355664_1537053769935236_1405084596_n.jpg",
    "/assets/19623547_484417345236779_3802491420829286400_n.jpg",
    "/assets/27575080_1970076916645560_7296018592489799680_n.jpg",
    "/assets/33210111_1125520684255584_4163938095885975552_n.jpg",
    "/assets/41356875_331522237660970_9181643926913744337_n.jpg",
    "/assets/42806338_2172004903127017_3997413782872488321_n.jpg",
    "/assets/43158352_2065690960407833_8142392049961103197_n.jpg",
    "/assets/46787814_272075246840229_5974223932337245755_n.jpg",
  ]

  const [image, setImage] = useState(imageFeed[0])

  useEffect(() => {
    setInterval(() => {
      setImage(imageFeed[parseInt(Math.random() * imageFeed.length)])
    }, 2000)
  }, [])

  return (
    <img src={image}/>
  )
}

ReactDOM.render(
  <div>
    <h2>Quick Links</h2>
    <p><span className="bullet">📚</span>Stuff I'm reading, updated constantly</p>
    <LinkFeed/>
  </div>,
  document.getElementById('feed-app')
)

ReactDOM.render(
  <ImageCarousel/>,
  document.getElementById('carousel')
)