const productContainers = [...document.querySelectorAll('.product-container')];

productContainers.forEach((item, i) => {

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth-100;
    })
})