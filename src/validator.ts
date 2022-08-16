type TCheckValidly = {
  check: boolean;
  error?: string;
};

const validation = {
  isNotNumber: {
    regExp: /[A-Za-z]/,
    errorMassage: "only numeric values are allowed",
  },
  isTooBig: {
    regExp: /(?!(?:\d{1,3}|1000)(?!\d))\d+/,
    errorMassage: "number is too big",
  },
  isNotHex: {
    regExp: /[G-Z]|[g-z]/,
    errorMassage: "only HEX values are allowed",
  }
};

const checkValidly = (string: string, rules?: Array<keyof typeof validation>): TCheckValidly => {

  const keys = [...rules] ?? Object.keys(validation) as  Array<keyof typeof validation>;
  for (let key of keys) {
    const checkRule = validation[key].regExp.test(string);

    if (checkRule)
      return {
        check: false,
        error: validation[key].errorMassage,
      };
  }

  return {
    check: true,
  };
};

export { checkValidly };
