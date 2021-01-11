import express from 'express';

class TestApi {
  public get(req: express.Request, res: express.Response) {
    const mockData = {
      name: 'helen',
      age: 22,
    };
    res.json(mockData);
  }
}

export default TestApi;
