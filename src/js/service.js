const apiKey = '8e8816fc40734705b3b58d5aeae45078';

export default {
    searchQuery: '',
    page: 1,
    fetchArticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.query}&language=en&pageSize=8&page=${this.page}`;
    const options = {
    headers: {
            Authorization: apiKey,
        }
    }
        return fetch(url, options)
            .then(res => res.json())
            .then(({ articles }) => {
                this.incrementPage();
                return articles;
            })
    },
    resetPage() {
        this.page = 1;
    },
    incrementPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    }
}