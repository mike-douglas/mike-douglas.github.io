import type { Link } from "./Link"

type APIResult = {
  url: string,
  title: string,
  comment: string,
  posted: string
}

const url = 'https://qjtomllk33.execute-api.us-east-1.amazonaws.com/urls'

const fetchLinks = async () : Promise<Link[]> => {
  console.log(url)

  return (await fetch(url)).json()
    .then((result) : APIResult[] => result)
    .then((result) : Link[] => {
      return result.map((value) => ({
        title: value.title,
        url: value.url,
        comment: value.comment,
        posted: new Date(value.posted)
      }))
    })

  // const data = [
  //   {
  //     title: 'Some link',
  //     url: 'https://google.com',
  //     comment: 'Some comment',
  //     posted: '2022-07-10T12:32:39.000Z'
  //   } 
  // ]
}

export default fetchLinks
