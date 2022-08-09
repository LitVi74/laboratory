import './styles/main.css';
import { handleChangeInput } from "./action";


const input = document.getElementById('input') as HTMLImageElement;

input.onchange = handleChangeInput;
