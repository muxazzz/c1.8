function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.html = function(fn){
	this.each(element => element.innerHTML = fn)
	return this;
}

jQuery.prototype.text = function(fn){
	this.each(element => element.innerText = fn)
	return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

jQuery.prototype.remove = function(){
	this.each(element => element.remove())
  return this;
}

jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
  return this;
}

const $ = (e) => new jQuery(e);

$('#button1').hide().show().click(e => $('h1').html("ИЗМЕНИЛИ HTML СОДЕРЖИМОЕ").hide().show())
$('#button2').hide().show().click(e => $('h2').text("ИЗМЕНИЛИ ТЕКСТ СОДЕРЖИМОЕ").hide().show())























