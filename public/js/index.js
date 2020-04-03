console.log('yo')
// changing text live update
const h2 = document.querySelector('.live-update')
// h2.contentEditable = "true";
const text = document.querySelector('input[type="text"]')

if (document.addEventListener) {
    text.addEventListener('input', () => {
        h2.innerHTML = text.value
    })
} else if (document.attachEvent) {
    text.attachEvent('oninput', function() {
        h2.innerHTML = text.value
    })
}

if (document.addEventListener) {
    h2.addEventListener('input', () => {
        text.value = h2.innerHTML

    })
} else if (document.attachEvent) {
    h2.addEventListener('oninput', function() {
        text.value = h2.innerHTML

    })
}




// change color shirt
const colorShirt = document.getElementsByName('colorshirt')
const svg = document.querySelector('svg')

if (document.addEventListener) {
    for (const item of colorShirt) {
        item.addEventListener('change', () => {
            svg.setAttribute('style', `fill:${item.value}`)
        })
    }
} else if (document.attachEvent) {
    for (const item of colorShirt) {
        item.attachEvent('onchange', function() {
            svg.setAttribute('style', `fill:${item.value}`)
        })
    }
}


//change color text
const colorText = document.getElementsByName('colortext')

if (document.addEventListener) {
    for (const item of colorText) {
        item.addEventListener('change', () => {
            h2.setAttribute('style', `color:${item.value}`)
        })
    }
} else if (document.attachEvent) {
    for (const item of colorText) {
        item.attachEvent('onchange', function() {
            h2.setAttribute('style', `color:${item.value}`)
        })
    }
}


//change icon 
const iconSet = document.getElementsByName('hero')
const iconLabel = document.querySelectorAll('input[name=hero]')
console.log(iconLabel.label)
const iconPlace = document.querySelector('.icon')

if (document.addEventListener) {
    for (const item of iconSet) {
        item.addEventListener('change', () => {
            iconPlace.setAttribute('src', `/img/svg/icon/${item.value}.svg`)
        })
    }
} else if (document.attachEvent) {
    for (const item of iconSet) {
        item.attachEvent('onchange', function() {
            iconPlace.setAttribute('src', `/img/svg/icon/${item.value}.svg`)
        })
    }
}