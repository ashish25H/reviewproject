let userFriends = JSON.parse(localStorage.getItem('friends'));
let item = {
    arr : userFriends,
}

window.renderFriendCard = async function renderFriendCard(){
    let response = await fetch('components/friend-section/friend-card.mustache');
    let template = await response.text();

    template = Mustache.render(template, item);
    $('#section-container').html(template);
}