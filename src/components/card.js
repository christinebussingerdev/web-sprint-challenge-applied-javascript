import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const finalCard = document.createElement('div')
  finalCard.classList.add('card')

  const headline = document.createElement('div')
  headline.classList.add('headline')
  headline.textContent = article.headline

  const author = document.createElement('div')
  author.classList.add('author')

  const imageCont = document.createElement('div')
  imageCont.classList.add('img-container')

  const image = document.createElement('img')
  image.src = article.authorPhoto

  const authName = document.createElement('span')
  authName.textContent = article.authorName

  finalCard.appendChild(headline)
  finalCard.appendChild(author)
  author.appendChild(imageCont)
  imageCont.appendChild(image)
  author.appendChild(authName)

  console.log(finalCard)
  return finalCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const insertPoint = document.querySelector(selector)


  axios.get("http://localhost:5001/api/articles")
  .then(res => {
    console.log(res.data.articles)

    // const { bootstrap, javascript, jquery, node, technology } = res.data.articles

    const subjects = Object.keys(res.data.articles)

    console.log(subjects)

    const allCards = subjects.forEach(subject => {
      const bananas = res.data.articles[subject].forEach(art => {
        insertPoint.appendChild(Card(art))
      })
      return bananas
    })

    console.log(allCards)


  })


}

export { Card, cardAppender }
