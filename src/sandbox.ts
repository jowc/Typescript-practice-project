let list : any = null

let person : object

list = 2

person = {
  UserName : 'Joseph',
  Lastname: "chikeme",
  Age: 25,
  color: 'Caucasian'
}

let mark: Function

mark = (a:number, b:string | number, c?: string) : string => {
  console.log("past mark")
  if(c) return (`${b} chose ${a} in ${c}`)
  else return (`${b} chose ${a}`)
  
}

console.log(mark(10, "Joseph", "maths"))

console.log(person, list)
