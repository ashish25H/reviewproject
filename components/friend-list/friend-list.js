async function renderFriendList() {
    let response = await fetch('components/friend-list/friend-list.mustache');
    let template = await response.text();
   
    let images = JSON.parse(localStorage.getItem('friendsImg'));

    let img = {
        arr: images,
    }

    document.getElementById('friend-list').innerHTML = Mustache.render(template, img);


}

renderFriendList();

window.addEventListener('storage', function(event) {
    if (event.key === 'friendsImg') {
        renderFriendList();
    }
});