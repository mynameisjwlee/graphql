
import APIS from ".";
import TestApi from "./test.api";

const apiDefinition = {
    [APIS.TEST]: new TestApi(),
}

export default apiDefinition;
