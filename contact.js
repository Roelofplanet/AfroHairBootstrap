$(document).ready(function () {
$('.submit').click(function (event) {
    console.log('Clicked button')

    var email = $('.email').val()
    var onderwerp = $('.onderwerp').val()
    var bericht = $('.bericht').val()
    var statusElm = $('.status')
    statusElm.empty()

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div>Email is geldig</div>')
    }   else {
        event.preventDefault()
        statusElm.append('<div>Email is niet geldig</div>')
    }

    if (onderwerp.length >= 2) {
        statusElm.append('<div>Onderwerp is geldig</div>')
    }   else {
        event.preventDefault()
        statusElm.append('<div>Onderwerp is niet geldig</div>')
    }

    if (bericht.length >= 5) {
        statusElm.append('<div>Bericht is geldig</div>')
    }   else {
        event.preventDefault()
        statusElm.append('<div>Bericht is niet geldig</div>')
    }

})
})