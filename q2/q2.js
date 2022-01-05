function StackCalc(str){
  let arr = str.split(" ")
  let numbers =[]
  let op=[]
  let stack =[]
  let i =0
  let x ,y
  let math_op ={
          '+': function (x,y) { return x + y },
          '-': function (x,y) { return x- y } ,
          "*" : function (x,y)  {return x* y},
          "/" : function (x,y) {return x / y},
          "DUP" : function (x) {return x * 2 },
          "POP"  : function () {return arr.pop()},
          "PSH"  : function () {
                  arr.splice(arr.length, 0, arr.splice(arr.indexOf(String(numbers.pop())), 1)[0]);
                  return arr
          }
  }
  if(str === ""){
          return 0
  }
  arr.map(function(value) {
          if (Number(value)){
                 numbers.push(Number(value))   
          }
          else if (math_op.hasOwnProperty(value)){
                 op.push(value)
          }
          else {
                    throw `invallid instruction : ${value}`
          }
      })

  while(numbers.length>0){
     if(stack.length>0){
          x = stack[i]
          y=numbers.pop()
         if(op.length>0){
                stack.push(math_op[op.shift()](x,y))
                i++
         }
         else{
                return stack
         }
     }
     else{
        x=numbers.pop()
        y = numbers.pop()
        stack.push(math_op[op.shift()](x,y))
     }
  }

  return  stack
}
console.log(StackCalc("")) // 0
console.log(StackCalc("5 6 +")) // 11
console.log(StackCalc("3 DUP +")) // 6
console.log(StackCalc("6 5 5 7 * - /")) //5
console.log(StackCalc("x y +")) // invallid instruction : x