const init = (el)=>{
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  el.addEventListener("mousedown", handleStart, false);
  el.addEventListener("mouseup", handleEnd, false);
  el.addEventListener("mousemove", handleMove, false);
  
}
/**
 * 
 * @var {number} VTI Valid Time Interval for recognizing multi times tapping
 */
let VTI = 400;
/**
 * @var {number} TC tap count
 */
let TC = 0;
/**
 * @var {object} rezClear reservation for clearing TC
 */
let rezClear;
const triggerList = [];
/*
{
  gestureList: [],

}
whenDoneWithGesture,
whileSliding,
cancelSliding
*/ 
const addTrigger = () =>{

}

//stopPropagation
const handleStart = e =>{
  rezClear.clearTimeout && rezClear.clearTimeout();
  TC++;
}
const handleMove = e =>{

}
const handleEnd = e =>{
  rezClear = setTimeout(()=>{
    TC = 0;
  },VTI)
}

const handleCancel = e =>{

}
GestureTrigger = {
  /**
   * 
   * @property {number} VTI Valid Time Interval for recognizing multi times tapping
   */
  init: init,
  addTrigger: addTrigger,
  VTI: VTI
}
module.export = GestureTrigger;