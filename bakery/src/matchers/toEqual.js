export const toEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  throw new Error(`Not equal. Expected ${a} to equal ${b}`);
};
