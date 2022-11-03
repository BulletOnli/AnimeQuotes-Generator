
const quoteContainer = document.querySelector('.quoteContainer')
const nameContainer = document.querySelector('.nameContainer')
const input = document.querySelector('.input')

document.getElementById('generate').addEventListener('click', () => {
    document.querySelector('.charName').textContent = ''
    document.querySelector('.quote').textContent = ''

    load(nameContainer)
    load(quoteContainer)
    genQuotes(input.value)
})


async function genQuotes(e) {
    try {
        const response = await fetch(`https://animechan.vercel.app/api/random/anime?title=${e}`)
        if (!response.ok) {throw new Error(error)}
        const data = await response.json()

        const character = data.character
        const quote = data.quote

        document.querySelector('.charName').textContent = character
        document.querySelector('.quote').textContent = quote
        console.log(data)
    } catch (error) {
        document.querySelector('.charName').textContent = ``
        document.querySelector('.quote').innerHTML = `
        <p>Error!</p>
        <p>Please try again!</p>
        `
    }

    quoteContainer.querySelector('.chaotic-orbit').remove()
    nameContainer.querySelector('.chaotic-orbit').remove()
}

function load(append) {
    const loaders = document.createElement('div')
    loaders.className = 'chaotic-orbit'
    append.appendChild(loaders)
}


