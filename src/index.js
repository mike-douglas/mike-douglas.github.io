import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Axios from 'axios-jsonp-pro'

//const listadoPocket = 'http://listado.us-west-1.elasticbeanstalk.com/v1/export/28a9a27536c2a9273755adcf3a6377de3d3d5dd6/js/'

const Item = ({ item }) => (
  <div>
    <h3>{item.title}</h3>
    <span>{item.url.split('/', 3)[2]}</span>
  </div>
)

const ReadingList = () => {
  const [items, setItems] = useState([{"content":{"imageURL":"https://www.timsommer.be/content/images/2017/12/hofstader-1.jpg","title":"Famous laws of Software development","url":"https://www.timsommer.be/famous-laws-of-software-development/"},"created_date":"2019-03-04 03:46:08"},{"content":{"imageURL":"https://www.historytoday.com/sites/default/files/reviews/venus_willendorf.jpg","title":"Weight of the World","url":"https://www.historytoday.com/reviews/weight-world"},"created_date":"2019-03-04 10:01:59"},{"content":{"imageURL":"https://static01.nyt.com/images/2018/11/19/fashion/19terry-SUB/merlin_146588991_23b9128b-4a4b-42b8-a2fa-d0ca40c4bff9-articleLarge.jpg?quality=75&auto=webp&disable=upscale","title":"How to Talk to People, According to Terry Gross","url":"https://www.nytimes.com/2018/11/17/style/self-care/terry-gross-conversation-advice.html"},"created_date":"2019-03-04 09:46:18"},{"content":{"imageURL":"https://cdn-images-1.medium.com/max/1600/1*vjHyq9JMlreqXQwPyHEEqw.jpeg","title":"Remote Work Doesn\u2019t Scale\u00a0\u2026 or Does\u00a0It?","url":"https://hackernoon.com/remote-work-doesnt-scale-or-does-it-4a72ce2bb1f3"},"created_date":"2019-03-04 09:46:16"},{"content":{"imageURL":"https://cameronlonsdale.com/assets/img/docker-image/layers.png","title":"Automating security and making it more accessible","url":"https://cameronlonsdale.com/2018/11/26/whats-in-a-docker-image/"},"created_date":"2019-03-04 09:46:17"},{"content":{"imageURL":"https://cdn-images-1.medium.com/max/1600/1*3cAh7XhGmxZWQD9OaGxEyQ.jpeg","title":"Building Distributed Engineering Teams","url":"https://blog.brunomiranda.com/building-a-distributed-engineering-team-85d281b9b1c"},"created_date":"2019-03-04 09:46:17"},{"content":{"imageURL":"https://cdn-images-1.medium.com/max/1600/1*87h-TyL_geocNgIdsFvwOQ.jpeg","title":"How to be Strategic","url":"https://medium.com/the-year-of-the-looking-glass/how-to-be-strategic-f6630a44f86b"},"created_date":"2019-03-04 03:46:09"}])

  useEffect(() => {
    // Axios.jsonp(listadoPocket)
    //   .then(setItems)
  })

  return (
    <div>
      {items.map((item, k) => (
        <Item key={k} item={item.content}/>
      ))}
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>Reading List</h1>
    <ReadingList/>
  </div>,
  document.getElementById('app')
)
