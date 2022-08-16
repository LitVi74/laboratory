const deserialize = (numArray: string[]) => {
    return numArray.reduce(
        (previousValue, currentValue, index) =>{
            const [hex, count] = currentValue.split('x')
            const numString = `${parseInt(hex,16)},`.repeat(+count || 1).slice(0, -1);
            return previousValue + (index ? "," : "") + numString
        },
        ""
    );
};

export { deserialize };
