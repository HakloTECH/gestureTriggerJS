const init = (el)=>{
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  el.addEventListener("mousedown", handleStart, false);
  el.addEventListener("mouseup", handleEnd, false);
  el.addEventListener("mousemove", handleMove, false);
  
}
const triggerList = [];
const addTrigger = () =>{

}

//stopPropagation
const handleStart = e =>{

}
const handleMove = e =>{

}
const handleEnd = e =>{

}

const handleCancel = e =>{

}

GestureTrigger = {
  init: init,
  addTrigger: addTrigger,
}