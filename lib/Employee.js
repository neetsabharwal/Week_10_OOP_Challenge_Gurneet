class Employee{
    constructor (name,id,email){
        this.name = name;
        this.id = id;
        this.email = email; 
        this.role = 'Employee';
    }
    getEmployeeName(){
        return this.name;
    }
    getEmployeeId(){
        return this.id;
    }
    getEmployeeEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee;