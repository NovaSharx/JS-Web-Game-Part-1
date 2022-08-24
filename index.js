function newImage(imgAddress, left, bottom) {
    let image = document.createElement('img')
    image.src = imgAddress
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

function newItem(imgAddress, left, bottom) {
    let image = document.createElement('img')
    image.src = imgAddress
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

newImage('assets/green-character.gif','100px','100px')
newImage('assets/pine-tree.png','450px','200px')
newImage('assets/tree.png','200px','300px')
newImage('assets/pillar.png','350px','100px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px','425px')

newItem('assets/sword.png', '500px', '405px')

sword.addEventListener('click', function() {
    sword.remove()
})