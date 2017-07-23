
$(document).ready(function(){
	var Cat = function(name,link){
	this.name = name;
	this.link = link;
}

Cat.prototype.render = function() {
    return '<div class="cat">'
      	+ '<span class="name">' + this.name + '</span>'
      	+ '<img src="' + this.link + '">'
      	+ '<span class="count">0</span>'
        +'<button class="catbutton">'+ this.name +'</button>'
      +'</div>'
    ;
};

Cat.prototype.init=function(){
  $('body').append(this.render());
}

var counter = function(that) {
  var i=0;
  console.log(that);
  $(that).find('img',).click(function(){
    $(that).find('.count').html(++i);
  });
  $(that).find('.catbutton').click(function(){
    $(that).find('img,.count,.name').toggle('active');
  });
};

var cat1 = new Cat("ana","images/cat.jpg");
var cat2 = new Cat("mick","images/cat1.jpg");
var cat3 = new Cat("mick","images/cat1.jpg");
cat1.init();
cat2.init();
cat3.init();

$('.cat').each(function(){
  counter(this);
  })
});


