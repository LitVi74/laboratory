import {serialize} from "./serialize";
import {checkValidly} from "./validator";
import {deserialize} from "./deserialize";

const handleSubmitSerializeForm = (event: SubmitEvent) => {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const numList = form.getElementsByTagName('input').item(0);
  let div = document.getElementById('serialize-error-text');

  const validlyResult = checkValidly(numList.value, ["isNotNumber", "isTooBig"]);
  if (validlyResult.check) {
    if (numList.classList.contains('input-error')){
      numList.classList.remove('input-error')
      form.removeChild(div)
    }

    const textBlock = form.getElementsByTagName('p').item(0);

    const numArray = numList.value.split(",").map((string) => +string.trim());
    textBlock.textContent = serialize(numArray);
  }else{
    if (!div) {
      div = document.createElement('div');
      div.classList.add('error-text');
      div.id = 'serialize-error-text';
    }

    div.textContent = validlyResult.error;

    numList.classList.add('input-error');
    form.insertBefore(div, numList.nextSibling)
  }
};

const handleSubmitDeserializeForm = (event: SubmitEvent) => {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const hexList = form.getElementsByTagName('input').item(0);
  let div = document.getElementById('deserialize-error-text');

  const validlyResult = checkValidly(
      hexList.value,
      ['isNotHex']
  );
  if (validlyResult.check) {
    if (hexList.classList.contains('input-error')){
      hexList.classList.remove('input-error')
      form.removeChild(div)
    }

    const textBlock = form.getElementsByTagName('p').item(0);

    const hexArray = hexList.value.split(",").map((string) => string.trim());
    textBlock.textContent = deserialize(hexArray);
  }else{
    if (!div) {
      div = document.createElement('div');
      div.classList.add('error-text');
      div.id = 'deserialize-error-text';
    }

    div.textContent = validlyResult.error;

    hexList.classList.add('input-error');
    form.insertBefore(div, hexList.nextSibling)
  }
}

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

export { handleSubmitSerializeForm, handleSubmitDeserializeForm, handleClickNavigationItem };
