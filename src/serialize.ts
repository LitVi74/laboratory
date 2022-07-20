const serialize = (numArray: number[]) => {
  return numArray.reduce(
    (previousValue, currentValue, index) =>
      previousValue + (index ? "," : "") + currentValue.toString(16),
    ""
  );
};

export { serialize };
