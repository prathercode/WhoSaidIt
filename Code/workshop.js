var arr = [];

var set = function(id) {
	var text = document.getElementById('commentbox').value;
	arr[id] = text;
}

var get = function(id) {
	var text = arr[id];
	if (text == undefined)
		document.getElementById('comments').innerHTML = "";
	else
		document.getElementByID('comments').innerHTML = arr[id];a
}