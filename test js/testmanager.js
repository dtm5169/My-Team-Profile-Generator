const Manager = require("../lib/Manager");
const Empolyees = require("../lib/Empolyees");


test("should be able to set the officeNumber from constructor", () => {
    const testValue = 100;
    //place  holders
    const e = new Manager(1, "foo", "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getJob() return "Manager"', () => {
    const testValue = Manager;
    //place  holders
    const e = new Manager(1, "foo", "test@test.com", 100);
    expect(e.getJob()).toBe(testValue);
});

test("should get the officeNumber via getOffice", () => {
    const testValue = 100;
    //place  holders
    const e = new Manager(1, "foo", "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});



