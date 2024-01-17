

// Importez vos modules existants
import { menuEntries } from "./modules/menuEntries.js";
import { createEntry } from "./modules/menu.js";
import { burgerManager } from "./modules/burgerManager.js";
import { slickMin} from "./modules/slider.js";



    const navMenu = document.querySelector("#navMenu");
    createEntry(menuEntries, navMenu);
    burgerManager();
    Slider();

