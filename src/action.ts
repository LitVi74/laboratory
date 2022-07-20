import { serialize } from "./serialize";
import { checkValidly } from "./validator";

const handleChangeInput = (event: InputEvent) => {
  const newValue = (event.target as HTMLInputElement).value;

  const validlyResult = checkValidly(newValue);

  if (validlyResult.check) {
    const numArray = newValue.split(",", 200).map((string) => +string.trim());
    console.log(serialize(numArray));
  }
};

export { handleChangeInput };
