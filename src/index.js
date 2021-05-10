"use strict";

import countTimer from "./modules/countTimer";
import animate from "./modules/animate";
import calculator from "./modules/calc";
import changePhoto from "./modules/changePhoto";
import checkCalcNums from "./modules/checkCalcNums";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopup";
import forbideLatine from "./modules/forbideLatine";

countTimer("12 may 2021");
// menu

toggleMenu();

//popup

togglePopUp();

// popup animation
// animate();

//tabs

tabs();

//slider

slider();

// calculator

checkCalcNums();
//comand picture

changePhoto();

// to check inputs in field 'Connect'

forbideLatine();
//calculator

calculator(100);

//send-ajax-form

sendForm();
