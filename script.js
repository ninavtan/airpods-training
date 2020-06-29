let bag = document.getElementById("bag")
let arrow = document.querySelector(".arrow")
let open = document.getElementById("click-to-open")
let gridContainer = document.querySelector(".grid-container")
let airpodsBox = document.querySelector(".airpods-box")
let airpodsCase = document.querySelector(".airpods-case")
let textArea = document.querySelector(".text-area")
let cable = document.querySelector(".cable")
let tips = document.querySelector(".tips")
let instructions = document.querySelector(".instructions")
let welcome = document.getElementById("welcome")
let introduction = document.getElementById("introduction")
let body = document.getElementsByTagName("body")

bag.addEventListener("click", function() {
    arrow.classList.add("hidden");
    open.classList.add("hidden");
    bag.classList.add("hidden");
    airpodsBox.classList.remove("hidden");
    airpodsBox.classList.add("show");
    document.body.style.backgroundColor = "white";

   
    

})

airpodsBox.addEventListener("click", function() {
    gridContainer.classList.remove("hidden");
    gridContainer.classList.add("show");
    airpodsBox.classList.remove("show");
    airpodsBox.classList.add("hidden");
    welcome.style.marginTop = "1em";
    welcome.style.color = "black";
    welcome.innerHTML = "Take a look around... Click on each item in the box to learn more."

})

airpodsCase.addEventListener("click", function() {
  textArea.classList.remove("hidden");
  textArea.classList.toggle("show");
  textArea.style.marginTop = "50px";

  airpodsCase.style.transform = "scale(1.5)";
  if (textArea.classList.contains("show")) {
    textArea.innerHTML = "<ul><li>Works with Qi-certified chargers or the Lightning connector</li><li>Case holds more than 24 hours of listening time and 18 hours of talk time</li><li>5 minutes in the case provides around 1 hour of listening time or around 1 hour of talk time</li></ul>";
  } else {
    textArea.classList.add("hidden");
    airpodsCase.style.transform = "scale(1)";

  }
  
});

cable.addEventListener("click", function() {
  textArea.classList.remove("hidden");
  textArea.classList.toggle("show");
  textArea.style.marginTop = "200px";
  cable.style.transform = "scale(1.5)";
  if (textArea.classList.contains("show")) {
    textArea.innerHTML = "<ul><li>USB-C cables can carry significantly more power than USB-A cables, therefore resulting in a faster charge for you.</li></ul>";
  } else {
    textArea.classList.add("hidden");
   cable.style.transform = "scale(1)";

  }
  
});

tips.addEventListener("click", function() {
  textArea.classList.remove("hidden");
  textArea.classList.toggle("show");
  textArea.style.marginTop = "300px";
  tips.style.transform = "scale(1.5)";
  if (textArea.classList.contains("show")) {
    textArea.innerHTML = "<ul><li>A customizable fit for all-day comfort.</li><li>- The medium size comes already attached. To check the size of an ear tip, unroll its edge and look for S, M, or L etched on the inside of the ear tip near its base.</li><li>- If you’re not sure about the fit, try the <a href='https://support.apple.com/en-us/HT210633' target='_blank'>Ear Tip Fit Test</a>. (Link?)</ul>";
  } else {
    textArea.classList.add("hidden");
    tips.style.transform = "scale(1)";

  }
  
});


instructions.addEventListener("click", function() {
  textArea.classList.remove("hidden");
  textArea.classList.toggle("show");
  textArea.style.marginTop = "450px";
  instructions.style.transform = "scale(1.5)";
  if (textArea.classList.contains("show")) {
    textArea.innerHTML = "<ul><li>If you're unsure about how to use your AirPods Pro, check out the instructions included in the box, or at <a href='https://support.apple.com/en-us/HT207010' target='_blank'>support.apple.com</a></li></ul>";
  } else {
    textArea.classList.add("hidden");
    instructions.style.transform = "scale(1)";
  }
  
});





















// let bag = document.getElementById("bag")
// let arrow = document.querySelector(".arrow")
// let open = document.getElementById("click-to-open")
// let airpodsCase = document.querySelector(".airpods-case")
// let cable = document.querySelector(".cable")
// let tips = document.querySelector(".tips")
// let instructions = document.querySelector(".instructions")
// //  let content = document.getElementsByClassName("content");


// bag.addEventListener("click", function() {
//     arrow.classList.toggle("hidden");
//     open.classList.toggle("hidden");
//    airpodsCase.classList.remove("hidden");
//    cable.classList.remove("hidden");
//    tips.classList.remove("hidden");
//     instructions.classList.remove("hidden");
  
   
//    bag.classList.toggle("hidden");
//   });


//   function airpodsCaseShow() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//     airpodsCase.classList.toggle("enlarge");
//   }

//   function cableShow() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//     cable.classList.toggle("enlarge");
//   }


// // When the user clicks on div, open the popup
// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }

// // airpodsCase.addEventListener("click", function () {
// //    let airpodsPopup = document.querySelector(".airpods-popup")
// //     airpodsPopup.classList.toggle("show")
// // });