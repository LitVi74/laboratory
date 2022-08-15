import { serialize } from "./serialize";
import { checkValidly } from "./validator";

const handleSubmitSerializeForm = (event: SubmitEvent) => {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const numList = form.numList.value as string

  const validlyResult = checkValidly(numList);
  if (validlyResult.check) {
     const numArray = numList.split(",", 200).map((string) => +string.trim());
     console.log(serialize(numArray));
  }
};

const handleClickNavigationItem = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLButtonElement;

  const a = document.createElement("a");
  a.href = `#${button.id}`
  a.click();

  const pages = document.getElementsByClassName('page-content')
  for (let index = 0; index < pages.length; index ++) {
    pages[index].classList.remove('show')
    pages[index].classList.add('hide')
  }

  document.getElementsByClassName(button.id).item(0).classList.remove('hide');
  document.getElementsByClassName(button.id).item(0).classList.add('show');
}

export { handleSubmitSerializeForm, handleClickNavigationItem };
