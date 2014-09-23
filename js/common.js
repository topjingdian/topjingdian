function menu_status(status) {
	var menua = document.getElementById("display_menu");
	var menub = document.getElementById("pop_menu");
	menua.style.display = status;
	menub.style.display = status;
}