const UserRepository = require("../src/UserRepository.js");
const UserService = require("../src/UserService.js");
const assert = require("assert");
const sinon = require("sinon");

describe("UserRepository", () => {
    let userRepository;
    let stub;

    beforeEach(() => {
        userRepository = new UserRepository();
        stub = sinon.stub(userRepository, "listAllUsers");
        stub.returns([{
            name: "Peter",
            lastName: "Mustermann"
        },
        {
            name: "Max",
            lastName: "Mustermann"
        },
        {
            name: "Moritz",
            lastName: "Mustermann"
        }]);
    });

    afterEach(() => {
        stub.restore();
    });
});

describe("filterUsers()", () => {
    it("should return useres for given filter", () => {
        const users = userRepository.filterUsers(
            user => user.name.indexOf('M') === 0
        );

        assert.equal(user.length, 2);
    });
});