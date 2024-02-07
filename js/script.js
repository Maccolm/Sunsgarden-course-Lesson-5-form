//validation
const button = document.querySelector('.button')
const inputs = document.querySelectorAll('.input')
for (const input of inputs) {
	if(input.hasAttribute('required')){
		input.addEventListener('input', () => validation())
	}
}

function validation(){
	const inputName = document.querySelector('.input-name')
	const inputEmail = document.querySelector('.input-email')
	if(inputName.value.length >= 3 && inputEmail.value.length > 3){
			button.removeAttribute('disabled')
		} else {
			button.setAttribute('disabled', 'true')
		}
}