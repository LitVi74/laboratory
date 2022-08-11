import './styles/main.css';
import {handleChangeInput, handleClickNavigationItem} from "./actions";


const input = document.getElementById('input') as HTMLImageElement;
const navigateButtons = document.getElementsByClassName('selector-button') as
    HTMLCollectionOf<HTMLButtonElement>;

input.onchange = handleChangeInput;

for (let navigateButtonsKey in navigateButtons) {
    navigateButtons[navigateButtonsKey].onclick = handleClickNavigationItem
}
