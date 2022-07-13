const employee = require('../lib/Employee.js')

test('creates an employee',()=>{
    const person = new employee('Sunny','1','sunny_manager@gmail.com');

    expect(person.getEmployeeName()).toBe('Sunny');
    expect(person.getEmployeeId()).toBe('1');
    expect(person.getEmployeeEmail()).toBe('sunny_manager@gmail.com');
    expect(person.getRole()).toBe('Employee');
});