const request = require("supertest");
const app = require("../src/app");

describe("Sample API Test", () => {
  test("GET / should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
