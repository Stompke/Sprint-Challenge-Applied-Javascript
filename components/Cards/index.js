// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsContainer = document.querySelector('.cards-container')



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // response.data.articles.forEach(item => {
    //     console.log(item)
    // })
    const keys = Object.keys(response.data.articles)
    // console.log(keys)
    // console.log(response.data.articles);
    keys.forEach(item => {

        console.log(response);
        response.data.articles[item].forEach(item => {
            // console.log(item.authorName);
            // console.log(item.authorPhoto);
            // console.log(item.headline);
            cardsContainer.appendChild(CreateArticle(item))

        })
    })

    // console.log(response.data.articles.bootstrap);




});






function CreateArticle (info) {
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = info.headline;
    img.src = info.authorPhoto;
    name.textContent = info.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(name);
    imgContainer.appendChild(img);

    return card;
}