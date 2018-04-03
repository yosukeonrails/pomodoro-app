
export var TOGGLE_TIMER = 'TOGGLE_TIMER';

export function toggleTimer(start){
 return {
     type:TOGGLE_TIMER,
     timerStarted:start
 }
}
