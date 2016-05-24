function obj1() {
this.print = function(){ console.log(this.value); };
this.value = 1;
return this;
}

var obj2 = {
value: 2
}

this.value = 3;


obj1.print();
var obj = obj1.print();

var obj = obj1.print.bind(obj2); 
obj.print();
