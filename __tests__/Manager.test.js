const manager = require('../lib/Manager.js')

test('creates a manager',()=>{
    const person = new manager('Sunny','1','sunny_manager@gmail.com',123456);

    expect(person.getEmployeeName()).toBe('Sunny');
    expect(person.getEmployeeId()).toBe('1');
    expect(person.getEmployeeEmail()).toBe('sunny_manager@gmail.com');
    expect(person.getManagerPhone()).toBe(123456);
    expect(person.getRole()).toBe('Manager');
});