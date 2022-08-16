import './styles/main.css';
import {handleSubmitSerializeForm, handleClickNavigationItem, handleSubmitDeserializeForm} from "./actions";


const serializeForm = document.getElementById('serialize-form') as HTMLFormElement
const deserializeForm = document.getElementById('deserialize-form') as HTMLFormElement
const navigateButtons = document.getElementsByClassName('selector-button') as
    HTMLCollectionOf<HTMLButtonElement>;

serializeForm.onsubmit = handleSubmitSerializeForm;
deserializeForm.onsubmit = handleSubmitDeserializeForm;

for (let navigateButtonsKey in navigateButtons) {
    navigateButtons[navigateButtonsKey].onclick = handleClickNavigationItem
}
