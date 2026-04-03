const request = require("supertest");
const app = require("../app");

let token;
let eggId;

describe("Egg API", () => {

  test("GET /eggs → 200", async () => {
    const res = await request(app).get("/eggs");
    expect(res.statusCode).toBe(200);
  });

  test("POST /login → get token", async () => {
    const res = await request(app).post("/login");
    token = res.body.token;

    expect(res.statusCode).toBe(200);
    expect(token).toBeDefined();
  });

  test("POST /eggs → 201", async () => {
    const res = await request(app)
      .post("/eggs")
      .set("Authorization", `Bearer ${token}`)
      .send({ color: "red", weight: 10 });

    eggId = res.body.id;

    expect(res.statusCode).toBe(201);
    expect(eggId).toBeDefined();
  });

  test("PUT /eggs/:id → 204", async () => {
    const res = await request(app)
      .put(`/eggs/${eggId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ color: "blue", weight: 12 });

    expect(res.statusCode).toBe(204);
  });

  test("DELETE /eggs/:id → 204", async () => {
    const res = await request(app)
      .delete(`/eggs/${eggId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(204);
  });

  test("DELETE again → 404", async () => {
    const res = await request(app)
      .delete(`/eggs/${eggId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(404);
  });

});