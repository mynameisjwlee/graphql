"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestApi {
    async get(req, res) {
        const mockData = {
            name: 'helen',
            age: 22,
        };
        res.json(mockData);
    }
}
exports.default = TestApi;
