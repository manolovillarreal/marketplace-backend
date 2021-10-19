require("dotenv").config();
var mongoose = require("mongoose");
const request = require("supertest");

const Server = require("../../models/server");
const server = new Server();
const db = mongoose.connection;

afterAll(() => {
  db.close();
});

describe("auth endpoints", () => {
  const app = server.app;

  test("debe de validar los campos requeridos (name,email,password,role)", async () => {
    const res = await request(app).post("/api/auth/new").send({});
    const { errors } = res.body;

    expect(res.statusCode).toEqual(400);
    expect(errors.some((e) => e.param == "name")).toBe(true);
    expect(errors.some((e) => e.param == "email")).toBe(true);
    expect(errors.some((e) => e.param == "password")).toBe(true);
    expect(errors.some((e) => e.param == "role")).toBe(true);
  });

  test("debe rechazar contraseña con menos de 8 digitos", async () => {
    const res = await request(app).post("/api/auth/new").send({
      name: "Test 1",
      email: "test1@email.com",
      password: "1234567",
      role: "SELLER_ROLE",
    });
    const { errors } = res.body;

    expect(res.statusCode).toEqual(400);
    expect(errors.some((e) => e.param == "password")).toBe(true);
  });

  test("no debe de crear usuario con rol de administrador", async () => {
    const res = await request(app).post("/api/auth/new").send({
      name: "Test 1",
      email: "test1@email.com",
      password: "1234567",
      role: "ADMIN_ROLE",
    });
    const { errors } = res.body;

    expect(res.statusCode).toEqual(400);
    expect(errors.some((e) => e.param == "role")).toBe(true);
  });

  test("debe de crear un nuevo usuario y retornar el token", async () => {
    const res = await request(app).post("/api/auth/new").send({
      name: "Test 1",
      email: "test1@email.com",
      password: "12345678",
      role: "SELLER_ROLE",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("user");
    expect(res.body).toHaveProperty("token");
  });

  test("no debe crear usuario con nombre o email existentes", async () => {
    const res = await request(app).post("/api/auth/new").send({
      name: "Test 1",
      email: "test1@email.com",
      password: "12345678",
      role: "SELLER_ROLE",
    });
    const { errors } = res.body;

    expect(res.statusCode).toEqual(400);
    expect(errors.some((e) => e.param == "name")).toBe(true);
    expect(errors.some((e) => e.param == "email")).toBe(true);
  });
  test("no debe validar email y password para iniciar sesion", async () => {
    const res = await request(app).post("/api/auth/login").send({});
    const { errors } = res.body;

    expect(res.statusCode).toEqual(400);
    expect(errors.some((e) => e.param == "email")).toBe(true);
    expect(errors.some((e) => e.param == "password")).toBe(true);
  });
  let token;
  test("debe de hacer login exitosamente retornando user y token", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "test1@email.com",
      password: "12345678",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("user");
    expect(res.body).toHaveProperty("token");

    token = res.body.token;
  });
  test("debe de renovar el token", async () => {
    const res = await request(app)
      .get("/api/auth/renew")
      .set("x-token", token)
      .send({
        email: "test1@email.com",
        password: "12345678",
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("user");
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("ok");
  });
});
