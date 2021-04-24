
const Empolyees = require("../lib/Empolyees");


test("can instantiate the empolyees instance", () => {
    const e = new Empolyees();
    expect(typeof(e)).toBe("object");
});

test("can set the name from constructor arguments", () => {
    const name = "Daisha";
    const e = new Empolyees(name);
    expect(e.name).toBe(name);
});

test("can set id from constructor arguments", () => {
    const testValue = 100;
    const e = new Empolyees("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can set email from constructor arguments", () => {
    const testValue = "test@test.com";
    const e = new Empolyees("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("can set name from getName()", () => {
    const testValue = "Daisha";
    const e = new Empolyees(testValue);
    expect(e.getName()).toBe(testValue);6
});

test("can get id from getId()", () => {
    const testValue = 100;
    const e = new Empolyees("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("can get email from getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Empolyees(1, "Foo", testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getJob() return \"Empolyees\"", () => {
    const testValue = "Empolyees";
    const e = new Empolyees(1, "Daisha", "test@test.com");
    expect(e.getJob()).toBe(testValue);
});
