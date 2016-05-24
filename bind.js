function obj1() {
this.print = function(){ console.log(this.value); };
this.value = 1;
return this;
}

var obj2 = {
value: 2
}

this.value = 3;

var test1 = obj1()
var test2 = new obj()

obj1.print();
test1.print()
test2.print();
 
var obj = obj1.print();

var print = obj1.print.bind(obj2); 
print();
