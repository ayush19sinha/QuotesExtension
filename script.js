document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById("quoteElement");
    const author = document.getElementById("author");
    const newButton = document.getElementById('newButton');
    const body = document.body;

    function showLoading() {
        body.classList.add('loading');
    }

    function hideLoading() {
        body.classList.remove('loading');
    }

    function fetchQuote() {
        showLoading();
        fetch('https://dummyjson.com/quotes/random')
            .then(response => response.json())
            .then(quoteData => {
                const quoteText = quoteData.quote;
                const authorName = `by ${quoteData.author}`;
                quoteElement.innerHTML = quoteText;
                author.innerHTML = authorName;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteElement.innerHTML = 'Failed to load quote. Please try again.';
                author.innerHTML = '';
            })
            .finally(() => {
                hideLoading();
            });
    }

    fetchQuote();

    newButton.addEventListener('click', fetchQuote);
});
