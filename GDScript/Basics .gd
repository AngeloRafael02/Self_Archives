  # GDScript Basics
  # By: Angelo Rafael F. Recio

    # GDScript - Similar to Python with some typescript influences

    #Variables (Scalar )
export var age:int = 21; # int range - -9223372036854775808 to 9223372036854775808
const NAME = "Angelo";
var arr:int[] = [1,2,3,4];
var dictionary = {a:1, b:2}
var typed_var: int;
var inferred_type: = "String" #type is inferred according to given value

    #Enums
enum {UNIT_NEUTRAL, UNIT_ENEMY, UNIT_ALLY}
enum Named {THING_1, THING_2, ANOTHER_THING = -1}

  #Built-In Vector Types
var v2 = Vector2(1,2)
var v3 = Vector3(1,2,3)

  #Function
func functionOne(pamam1,param2):
  var local_var  = 5
  
  # If-Elif-Else syntax
  if param1 < local_var:
    print(param1)
  elif param2 > local_var++:
    print(param2)
  else 
    print("???")
  
  # For Loop
  for i in range(10):
    print(i)

  #While Loop
  while param != 0:
    param2 -= 1
  
  var local_var2 = param1 + 3
  return local_var2

# Functions override functions with the same name on the base/parent class.
# If you still want to call them, use '.' (like 'super' in other languages).
func something(p2,p1):
  .something(p1,p2)

  # Class
class Class:
  static var a = 10
  var b = 12
  #Constructor
  func _init():
    var lv = something.new()
    print(lv.a)
