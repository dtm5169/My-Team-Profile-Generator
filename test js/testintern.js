const Intern = require("../lib/Intern");

test("should be able to set the school name from constructor", () => {
    const testValue = "PSU";
    //place  holders
    const e = new Intern(1, "foo", "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getJob() return \"Intern\"", () => {
    const testValue = "Intern";
    //place  holders
    const e = new Intern(1, "foo", "test@test.com", "PSU");
    expect(e.getJob()).toBe(testValue);
});

test("should get the school from getSchool()", () => {
    const testValue = "PSU";
    //place  holders
    const e = new Intern(1, "foo", "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});


