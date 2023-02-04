const request = require('supertest');
const app = require("../src/app");

describe('Authentication Test', () => {
    test("Test protection against unauthenticated request", async () => {
        const app = require('../src/app');
        const request = require('supertest');
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(401);
    });

    describe("user name and password validate on login", () => {

        test("Should return status false if email is not provided", async () => {
            const app = require('../src/app');
            const request = require('supertest');
            const response = await request(app).post('/auth/login').send({});
            expect(response.body.status).toBe(false);
        });

        test("Should return status false if password is not provided", async () => {
            const app = require('../src/app');
            const request = require('supertest');
            const response = await request(app).post('/auth/login').send({
                email: 'imasha@gmail.com',
            });
            expect(response.body.status).toBe(false);
        });

        test("Should return status false when give wrong credentials", async () => {
            const app = require('../src/app');
            const request = require('supertest');
            const response = await request(app).post('/auth/login').send({
                email: 'imasha@gmail.com',
                password: 'dv@123'
            });
            expect(response.body.status).toBe(false);
        });

        test("Should return status true when give right credentials", async () => {
            const app = require('../src/app');
            const request = require('supertest');
            const response = await request(app).post('/auth/login').send({
                email: "imasha@gmail.com",
                password: "dev@123"
            });
            expect(response.body.status).toBe(true);
        });

    });

});
