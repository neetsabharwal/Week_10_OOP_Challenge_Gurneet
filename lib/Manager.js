const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,id,email,phone){
        super(name,id,email)
        this.phone = phone;
        this.role = 'Manager';
    }

    getManagerPhone(){
        return this.phone;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Manager;