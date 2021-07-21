const {EligibleEmployeeList} = require('./index');

test('returns an array', () => {
  expect(typeof EligibleEmployeeList(18)).toEqual("object");
});

test('returns an array containing an object', () => {
	expect(typeof EligibleEmployeeList(18)[0]).toEqual("object");
  });

test('returns an array containing employees of the correct age', () => {
	const employees = EligibleEmployeeList(23)
	employees.forEach(e => expect(e.age).toBeGreaterThanOrEqual(23))
  });