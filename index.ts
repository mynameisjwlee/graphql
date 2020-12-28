import express from 'express';
import TestApi from './apis/rest/test.api';
import APIS from './apis';

const app = express();

const restTest = new TestApi;
app.get(APIS.REST_TEST, restTest.get);

app.listen(3000);
