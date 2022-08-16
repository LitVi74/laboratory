const serialize = (numArray: number[]) => {
  const uniqElements = new Set<number>();

  return numArray.reduce(
    (previousValue, currentValue, index, array) => {
      if (!uniqElements.has(currentValue)) {
        uniqElements.add(currentValue);

        const count = array.filter((elem) => elem === currentValue).length;
        return `${previousValue}${index ? "," : ""}${currentValue.toString(16)}${count > 1 ? `x${count}` : ''}`
      }
      return previousValue;
    },
    ""
  );
};

export { serialize };
