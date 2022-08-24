function newImage(imgAddress, left, bottom) {
    let image = document.createElement('img')
    image.src = imgAddress
    image.style.position = 'fixed'
    image.style.left = left+'px'
    image.style.bottom = bottom+'px'
    document.body.append(image)
    return image
}

function newItem(imgAddress, left, bottom) {
    let item = newImage(imgAddress, left, bottom)

    item.addEventListener('dblclick', function() {
        item.remove()
    })
}

function newBackground(imgAddress, left, bottom) {
    let numTilesRow = Math.ceil(window.innerWidth/100)
    let numTilesColumn = Math.ceil(bottom/100)

    for (let y = numTilesColumn; y > 0; y--) {
        bottom-=100
        for (let x = 0; x < numTilesRow; x++) {
            let background = newImage(imgAddress, left+x*100, bottom)
            background.style.zIndex = -1
        }
    }
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

newBackground('assets/sky.png', 0, window.innerHeight)
newBackground('assets/grass.png', 0, 500)