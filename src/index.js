import "./styles.css";
import { ImageCarousel } from "./image-carousel";
import { ImageDots } from "./image-dots";

const imageDots = new ImageDots(document.querySelector('#slide-container').children.length, '#nav-dots');
const imageCarousel = new ImageCarousel('#slide-container', imageDots);