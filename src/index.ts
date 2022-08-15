import './styles/main.css';
import {handleSubmitSerializeForm, handleClickNavigationItem} from "./actions";


const serializeForm = document.getElementById('serialize-form') as HTMLFormElement
const navigateButtons = document.getElementsByClassName('selector-button') as
    HTMLCollectionOf<HTMLButtonElement>;

serializeForm.onsubmit = handleSubmitSerializeForm;

for (let navigateButtonsKey in navigateButtons) {
    navigateButtons[navigateButtonsKey].onclick = handleClickNavigationItem
}
