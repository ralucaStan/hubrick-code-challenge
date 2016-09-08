const rules = require('./rules.json');
const flow = require('./flow');

// Call flow engine
flow.flowEngine(rules.rules, {value: 100});
