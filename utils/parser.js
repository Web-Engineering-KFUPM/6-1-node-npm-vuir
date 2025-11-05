import _ from "lodash";

export function parseNumbers(input) {
  return 
  const numbers = _.map(input, (str) => Number(str));
    return _.compact(numbers);
}

export function isValidOperation(operation) {
  return 
  const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);
}

