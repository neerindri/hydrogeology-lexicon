const dictionary = [
    {
        de: 'hallochen',
        en: 'hello',
        fr: 'bonjour',
        es: 'hola'
    },
    {
        de: 'tschuss',
        en: 'bye',
        fr: 'ciao',
        es: 'ciao'
    }
]
const searchTerm = (row, lang, term) => {
    return row[lang].includes(term)
}
const search = () => {
    const lang = document.getElementById('language').value
    const term = document.getElementById('search-term').value
    var resultTable= document.getElementById('result-table')
    var row = resultTable.insertRow(-1)
    var resultDe = row.insertCell(0)
    var resultEn = row.insertCell(1)
    var resultFr = row.insertCell(2)
    var resultEs = row.insertCell(3)
    

    console.log('Got values', term, lang)

    result = dictionary.filter((row) => searchTerm(row,lang, term))
    console.log('Search result', result)
    if (result.length > 0) {
        resultDe.innerHTML = result[0].de
        resultEn.innerHTML = result[0].en
        resultFr.innerHTML = result[0].fr
        resultEs.innerHTML = result[0].es
    }
}
const searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', search)