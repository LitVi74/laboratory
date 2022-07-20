import { checkValidly } from "./validator";

const handleChangeInput = (event: InputEvent) => {
  console.log(event);
  const newValue = (event.target as HTMLInputElement).value;
  const checkResult = checkValidly(newValue);
  console.log(checkResult);
};

export { handleChangeInput };
