let ratingList = document.querySelectorAll('.rating')
ratingList.forEach(function(ratingItem, index){
    let margin = index * 10
    ratingItem.style.marginLeft = `${margin}%`
    ratingItem.style.color = 'var(--Very-Dark-Magenta)'
    ratingItem.style.fontWeight = '700'
})