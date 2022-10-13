const changeTheme = document.getElementById('toggle-theme-btn')
const changeThemeImage = document.getElementById('toggle-theme-image')
changeTheme.addEventListener('click', function () {

	if(document.body.classList.contains('dark')){
		document.body.classList.remove('dark')
		changeTheme.onmouseover = function() {
			changeTheme.style.background="#dbdbdb";
		}
		changeTheme.onmouseleave = function() {
			changeTheme.style.background="#ffffff";
		}
		changeThemeImage.src = 'img/moon.png'
	}else{
		document.body.classList.add('dark')
		changeTheme.onmouseover = function() {
			changeTheme.style.background="#000000";
		}
		changeTheme.onmouseleave = function() {
			changeTheme.style.background="#1a1a1a";
		}
		changeThemeImage.src = 'img/sun.png'
	}

})