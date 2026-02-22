document.getElementById("Input").addEventListener("change",(event)=>{
    //  here event is the synthetic event which comes under
    // addevenlister's callback function. it will print the event object
    // whicj stores all information about the form EventTarget.
    console.log(event.target.value);
    // event.target will print the targeted element and event.target.
    // value will print the user input value.

    document.getElementById("output").textContent = "Change detected";
})