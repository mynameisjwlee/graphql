
import TestApi from './test.api';

import APIS from '.';

const apiDefinition = {
  [APIS.TEST]: new TestApi(),
};

export default apiDefinition;
