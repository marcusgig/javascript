const list = [
    {name: "Rodolfo", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: true},
    {name: "Ana", vip: true},
    {name: "Gigz", vip: true},
    {name: "Carlos", vip: false},
]

const newlist = list.map(user =>{
    const newUser ={
        name: user.name,
        braceletColor: user.vip ? "Black": "Green" 
    }
    return newUser
})

console.log(newlist);

const students = [
    {name:"Marcus", grade: 9},
    {name:"Julia", grade: 6},
    {name:"Pedro", grade: 8},
    {name:"Larissa", grade: 5},
    {name:"Carla", grade: 10},
    {name:"Bruno", grade: 4},
    {name:"Fernanda", grade: 7},
    {name:"Gustavo", grade: 3},
]

const finalGrades = students.map(student =>{
    return {
        name: student.name,
        finalGrades: student.grade <= 4 ? "Reprovado" : student.grade <= 6 ? "Recuperação" : "Aprovado"
    }
});

console.log(finalGrades);