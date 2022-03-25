import newService from './js/service';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs'

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    newService.query = form.elements.query.value;
    refs.articlesContainer.innerHTML = '';

    newService.resetPage();
    fetchArticles();
    form.reset()
})

refs.loadMore.addEventListener('click', fetchArticles);

function fetchArticles() {
    refs.loadMore.classList.add('is-hidden');
    refs.spinner.classList.remove('is-hidden'); 

    newService
        .fetchArticles()
        .then(articles => {
            updateArticlesMarkup(articles);
            refs.loadMore.classList.remove('is-hidden')
            window.scrollTo({
                top: 1000000,
                behavior: 'smooth'
            })
        })
        .finally(() => {
        refs.spinner.classList.add('is-hidden')
    })
};
