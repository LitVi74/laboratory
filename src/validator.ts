type TCheckValidly = {
  check: boolean;
  error?: string;
};

const validation = {
  isNumber: {
    regExp: /[A-Za-z]/,
    errorMassage: "only numeric values are allowed",
  },
  isTooBig: {
    regExp: /(?!(?:\d{1,3}|1000)$)[0-9]\d+/,
    errorMassage: "number is too big",
  },
};

const checkValidly = (string: string): TCheckValidly => {
  let key: keyof typeof validation;
  for (key in validation) {
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
