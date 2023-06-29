import request from "supertest";
import { app } from "../app";

describe("Test coffeelover API endpoint request", () => {
  test("GET /coffeelover should return correct message", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");
  });
});
