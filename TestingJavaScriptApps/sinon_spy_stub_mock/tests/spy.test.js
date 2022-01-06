const UserRespository = require("../src/UserRepository");
const UserService = require("../src/UserService");
const assert = require("assert");
const sinon = require("sinon");

describe("UserRepository", () => {
	let userRepository;
	let spy;

	before(
		() => {
			userRepository = new userRepository();
			spy = sinon.spy(UserService, 'listAllUsers');
		});

	after(
		() => {
			spy.restore();
		});
});

describe("listAlllUsers()", () => {
	it("should only call web serivce once and cache the results", () => {
		const users = userRepository.listAllUsers();
		const users2 = userRepository.listAllUsers();
		assert.equal(spy.callCount, 1);
	});
});