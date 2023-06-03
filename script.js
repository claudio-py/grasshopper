const imgElements = document.querySelectorAll('.card-box')



imgElements.forEach(function (imgElement) {
	imgElement.addEventListener('click', function () {
	
    this.classList.toggle('zoom')
	})
})
