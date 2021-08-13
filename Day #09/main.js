// * Constructor function for Employee (name,age,department,salary) contains
// * setters , getters for salary (salary is private) and toString function to display
// * Employee data on console

function Employee(name, age, dept) {

    this.name = name;
    this.age = age;
    this.dept = dept;

    // ! salary is private -> need setter and getter
    this.setSalary = function (value) {
        this.salary = value

    }
    this.getSalary = function () {
        return this.salary;
    }

    this.toString = function () {
        console.log("Employee Name is : " +
            this.name + " , His age is :" + this.age +
            " , His department is : " + this.dept +
            " His Salary is " + this.getSalary()
        )
    }

}

// * create instances from constructor function 

var Employee1 = new Employee("Fady", 21, "IT")
Employee1.setSalary(1000)
console.log(Employee1.toString())



// * array of employess
function NewEmployees() {

    var arrOfEmployess = [];
    nomofEmployess = parseInt(prompt("Enter array of employees size "));


    for (var i = 0; i < nomofEmployess; i++) {
        var empData = prompt("Enter Employee  data (name,age,dept,salary)");
        var empSeparatedData = empData.split(",");
        var newemp = new Employee(empSeparatedData[0], parseInt(empSeparatedData[1]), empSeparatedData[2]);
        newemp.setSalary(parseInt(empSeparatedData[3]))
        arrOfEmployess.push(newemp);
    }
    console.log(arrOfEmployess)

    //  * Sort them according to Department Ascending
    arrOfEmployess.sort(function (a, b) {
        a = a.dept.toLowerCase();
        b = b.dept.toLowerCase();
        if (a > b) {

            return 1
        }

        else if (a < b) {
            return -1;
        }

        else {
            return 0
        }
    })

    // * sort descending by Salary
    arrOfEmployess.sort(function (a, b) {
        a = a.getSalary();
        b = b.getSalary();
        return b - a
    });


    // * filter salaries grater than 2000
    var highSalaries = arrOfEmployess.filter(function (e) {
        return e.getSalary() > 2000;
    });


    // * total salary and avg salary
    var t_salary = 0, avg_salary = 0;
    for (var i = 0; i < arrOfEmployess.length; i++) {
        t_salary += arrOfEmployess[i].getSalary()
    }
    avg_salary = t_salary / arrOfEmployess.length
    alert("Avg Salary is : " + avg_salary + " Total salary is : " + t_salary)





    // * get highest salary in each dept
    var descendingSalary =
        arrOfEmployess.sort(function (a, b) {
            a = a.getSalary();
            b = b.getSalary();
            return b - a
        });
        

    var unique_high_Salary = [];
    for (var i = 0; i < descendingSalary.length; i++) {
        unique_high_Salary.push(descendingSalary[i].getSalary())
        
        if ((i = descendingSalary.length ) > descendingSalary.length  ) {
            break
        } else {
            if (descendingSalary[i].dept == descendingSalary[i + 1].dept) {

                unique_high_Salary.splice((descendingSalary[i+1]), 1)

            }
        }

    }
    console.log(unique_high_Salary)

}
NewEmployees()

//  * INPUTS TO TEST 

//  * a,1,a,30
//  * b,2,b,1000
//  * c,3,a,100
//  * d,4,d,2000

// *expected output = [2000,1000,100]


