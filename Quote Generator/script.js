const quote = ['« Les communications établissent l’uniformité parmi les hommes en les isolant. »' ,'« La prison est comme une maladie incurable. »','« L’occultisme est la métaphysique des imbéciles. »','« Dès que le plus faible des hommes a compris qu’il peut garder son pouvoir de juger, tout pouvoir extérieur tombe devant celui-là. »', '« Rien n’est plus dangereux qu’une idée quand on n’a qu’une idée. »' ];
// let quoteAuthors = ['Theodor ADORNO (1903-1969) et Max HORKHEIMER (1895-1973)','Theodor ADORNO (1903-1969)','Theodor ADORNO (1903-1969)','ALAIN (Émile CHARTIER, dit) (1868-1951)','ALAIN (Émile CHARTIER, dit) (1868-1951)'];


const btn = document.querySelector('.new-quote')

btn.addEventListener('click', quoteGenerator)

function quoteGenerator() {
    const index = Math.floor(Math.random()*quote.length)
    const citation = quote[index]
    const h1 = document.querySelector('h1')
    h1.textContent = citation
}




