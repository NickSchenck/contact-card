//import modules
import  "./form";
import "./submit";

//import css and bootstrap
import "../css/index.css";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

//add images on load
window.addEventListener('load', function() {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dobThumbnail').src = Dog;
});