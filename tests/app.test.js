 const test = require("node:test");
  const assert = require("node:assert/strict");
  const request = require("supertest");

  const app = require("../src/app");

  test("GET / başarılı cevap vermeli", async () => {
    const response = await request(app).get("/");

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, "success");
    assert.equal(response.body.message, "CI/CD projesi çalışıyor!");
  });

  test("GET /health sağlıklı cevap vermeli", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, "healthy");
  });

  test("Bilinmeyen endpoint 404 vermeli", async () => {
    const response = await request(app).get("/olmayan-sayfa");

    assert.equal(response.statusCode, 404);
  });

