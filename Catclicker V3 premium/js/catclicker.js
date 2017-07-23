var elem = documnet.getElementByClassName("image");
elem.addEventListener('click',function(){
	console.log("cat-pic is clicked");
},false);



var i=0;  
$('.image').click(function() { 
	$('.clicklogger').html('count '+ i++);
	console.log(i);
});
console.log(i);
