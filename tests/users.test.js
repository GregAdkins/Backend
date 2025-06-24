const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  it("should return 200 and message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/5thSocial/);
  });
});