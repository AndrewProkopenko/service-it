
$('.js-navbar-toggle').click( () => { 
    $('.js-navbar-toggle span').toggleClass('d-none')
    $('.js-navbar-toggle svg').toggleClass('d-none')
})

  // Function to make IE9+ support forEach:
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
    console.log('ie9+')
}