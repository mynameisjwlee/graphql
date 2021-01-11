let local_config = {};
try {
  local_config = require('./.huskyrc.local');
} catch (e) { }

const hooks = {
  'pre-push': 'lint-staged --shell true',
};

const local_hooks = local_config.hooks || {};

for (const hook of Object.keys(local_hooks)) {
  const local_script = local_hooks[hook];
  if (local_script === null) {
    delete hooks[hook];
  } else {
    hooks[hook] = local_script;
  }
}

module.exports = { hooks };
