let ratingList = document.querySelectorAll('.rating')
ratingList.forEach(function(ratingItem, index){
    let margin = index * 10
    ratingItem.style.marginLeft = `${margin}%`
    ratingItem.style.color = 'var(--Very-Dark-Magenta)'
    ratingItem.style.fontWeight = '700'
})

let commentCards = document.querySelectorAll('.comment-card')
commentCards.forEach(function(card, index){
    let margin = index * 10
    card.style.position = `relative`
    card.style.top = `${margin}px`
})