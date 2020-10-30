console.log("quedé")

var hamburguerButton = document.getElementById("hamburguer-button");
var sidebar = document.getElementById("sidebar");
let isSidebarOpen = false;

    sidebar.classList.remove("translate-x-full");
    sidebar.classList.add("translate-x-full");

if (hamburguerButton != null){
    hamburguerButton.addEventListener("click", function(e){
        console.log("hamburguesa :P")
        // isSidebarOpen = openSidebar(isSidebarOpen, hamburguerButton)
        if (!isSidebarOpen){
            sidebar.classList.remove("translate-x-full")
            sidebar.classList.add("-translate-x-3/2")
            hamburguerButton.classList.toggle("is-active");
            console.info(hamburguerButton)
            isSidebarOpen = true
        } else {
            sidebar.classList.remove("-translate-x-3/2")
            sidebar.classList.add("translate-x-full")
            hamburguerButton.classList.toggle("is-active");
            isSidebarOpen = false
        }
    });

    hamburguerButton.addEventListener("mousedown", function(e){
        e.preventDefault()
    })
}

// function openSidebar(isSidebarOpen, hamburguerButton){
    //  
        // if (!isSidebarOpen){
            // sidebar.classList.remove("translate-x-full")
            // sidebar.classList.add("-translate-x-3/2")
            // hamburguerButton.classList.add("is-active")
            // return true
        // } else {
            // sidebar.classList.remove("-translate-x-3/2")
            // sidebar.classList.add("translate-x-full")
            // hamburguerButton.classList.remove("is-active")
            // return false
        // }
// }
