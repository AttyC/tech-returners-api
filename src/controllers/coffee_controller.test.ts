import request from "supertest";
import { app } from "../app";
test("GET /coffee should return correct object when passed coffeeName", async () => {
  const coffeeName = "Mocha";
  const res = await request(app).get("/coffee").query({ coffeeName });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Mocha",
  });
});

test("GET /coffee should return correct object with default name 'Latte' when no coffeeName param passed", async () => {
  const res = await request(app).get("/coffee");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

test("GET /coffee should return default object when nonsense query param passed", async () => {
  const res = await request(app).get("/coffee?nbm=jkjk");
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});
