import APIS from ".";
import TestApi from "./rest/test.api";

const apiDefinition = {
    [APIS.REST_TEST]: new TestApi(),
}

export default apiDefinition;
