const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from my CI/CD application!");
});

test("GET / should return the correct message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from my CI/CD application!");
});