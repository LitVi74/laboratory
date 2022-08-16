const deserialize = (numArray: string[]) => {
    return numArray.reduce(
        (previousValue, currentValue, index) =>
            previousValue + (index ? "," : "") + parseInt(currentValue,16),
        ""
    );
};

export { deserialize };
