function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let friend of friends) {
    ul.insertAdjacentHTML('beforeend', `<li>${friend.firstName} ${friend.lastName}</li>`);
  }
  
  return ul;
}
