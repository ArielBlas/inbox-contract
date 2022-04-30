const Inbox = artifacts.require("Inbox");

contract("Inbox", (accounts) => {
  let inbox;

  beforeEach(async () => {
    inbox = await Inbox.new("Hi there!");
  });

  describe("Inbox", () => {
    it("deploys a contract", () => {
      assert.ok(inbox.address);
    });

    it("has a default message", async () => {
      const message = await inbox.message();
      assert.equal(message, "Hi there!");
    });

    it("can change the message", async () => {
      await inbox.setMessage("bye", { from: accounts[0] });
      const message = await inbox.message();
      assert.equal(message, "bye");
    });
  });
});
