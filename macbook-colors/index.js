let macone = document.querySelector('.mac-one')
let text = document.querySelector('.spc1')
let gray = document.querySelector('.spacegray')
let gold = document.querySelector('.golden')
let silver = document.querySelector('.silvery')


console.log(gray);
console.log(gold);
console.log(silver);
console.log(text);
console.log(macone);


gray.onclick = () => {
    macone.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000')
    text.innerHTML = 'Space Grey'
    console.log('works');
}

gold.onclick = () => {
    macone.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000')
    text.innerHTML = 'Gold'
}

silver.onclick = () => {
    macone.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000')
    text.innerHTML = 'Silver'
}




