const employees = [
    {name: 'Alice', salary: 5000},
    {name: 'Bob', salary: 6000},
    {name: 'Charlie', salary: 4500}
];
//1. Задача: "Удвоение зарплаты" У вас есть массив объектов,
// представляющих сотрудников с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.

const doubledSalaries = employees.map((employees) => employees.salary * 2);
console.log(doubledSalaries);

//version 2

const doubledSalaries2 = employees.map(({name,salary}) => ({name,salary: salary * 2}));
console.log(doubledSalaries2);


// 2. Задача: "Фильтрация сотрудников" Используя метод filter,
//  отфильтруйте сотрудников, у которых зарплата выше 5500.
const salaryEmployees = employees.filter(employee => employee.salary > 5500);
console.log(salaryEmployees);

//3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.

const totalSalary = employees.reduce((acc,sal) => acc += sal.salary,0);
console.log(totalSalary);

//4. Задача: "Имена в верхнем регистре" Используя метод map,
// преобразуйте имена всех сотрудников к верхнему регистру.

const upperCasedNames = employees.map((employees) => employees.name.toUpperCase());
console.log(upperCasedNames);

