const imgElements = document.querySelectorAll('.card-box')
const zoom = document.querySelector('.zoom')

imgElements.forEach(function (imgElement) {
	imgElement.addEventListener('click', function () {
  for(let element of imgElements){
    element.classList.remove('zoom')
  }
  imgElement.classList.toggle('zoom')
	})
})
