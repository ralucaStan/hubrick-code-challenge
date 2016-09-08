// Used for console log colors
const chalk = require('chalk');

/**
 * @id    {Number} id of the searched rule
 * @rules {Array} set of rules
 */
function getRuleById(id, rules) {
  return rules.filter(function(item) {
    return item.id === id
  })[0];
}


/**
 * @rule   {Object} rule to by applied
 * @object {Object} the object to run the rules by
 * @rules  {Array} set of rules
 */
function applyRule(rule, object, rules) {
  const ruleResult = eval("(" + rule.body + ")").call(null, object);
  const log = {
    color: ruleResult ? chalk.bold.green : chalk.bold.red,
    text : ruleResult ? 'passed' : 'failed',
  }
  const nextRuleId = ruleResult ? rule.true_id : rule.false_id;

  // Logg rule result
  console.log(log.color('Rule #' + rule.id + ' -> ' + log.text));

  // End flow if next step is null
  if (nextRuleId === null) {
    console.log(chalk.bgRed('THE END'));
    return false;
  }

  // Next flow rule
  applyRule(getRuleById(nextRuleId, rules), object, rules);
}


/**
 * flowEngine - executes a flow consisting of several linked rules
 *
 * @rules  {Array} set of rules
 * @object {Object} the object to run the rules by
 */
function flowEngine(rules, object) {
  // Start flow engine
  applyRule(rules[0], object, rules);
}

exports.flowEngine = flowEngine;
exports.getRuleById = getRuleById;
