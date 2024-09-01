let Lexikon;
function getLexikon() {
    return fetch('./lexikon.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Returns a promise that resolves with JSON data
        }).then((data) => {Lexikon = Object.values(data)});
}
// const Lexikon = fetch('lexikon.json').then(response => response.json).then(data => console.log(data))
// const Lexikon = getLexikon()
getLexikon();

const searchTerm = (row, lang, term) => {
    return row[lang].includes(term)
}
const search = () => {
    const lang = document.getElementById('language').value
    const term = document.getElementById('search-term').value.toLowerCase()
    var resultTable= document.getElementById('results')
    resultTable.innerHTML = ''
    

    console.log('Got search values', term, lang)

    result = Lexikon.filter((row) => searchTerm(row,lang, term))
    console.log('Search result', result)
    if (result.length > 0) {
        result.forEach(element => {
            resultTable.innerHTML += (`<p>German:${element.de}</p>` +
            `<p>English:${element.en}</p>` +
`<p>French:${element.fr}</p>` +
`<p>Spanish:${element.es}</p>`)
        });
    } else {
        resultTable.innerHTML = '<p>No results found for search term</p>'
    }
}
const searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', search)