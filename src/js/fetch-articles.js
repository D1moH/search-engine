const apiKey = '8e8816fc40734705b3b58d5aeae45078';

function fetchArticles(searchQuery, page = 1) {
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&page=${page}`;
    const options = {
    headers: {
            Authorization: apiKey,
        }
    }
    return fetch(url, options)
        .then(res => res.json())
        .then(data => data.articles)
    .catch(error => console.log(error));}
        
export default fetchArticles;