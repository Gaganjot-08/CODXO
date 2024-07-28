function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex"; 
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

var icon = document.getElementById("theme-icon");
icon.onclick = function (){
  document.body.classList.toggle("dark-theme");
}

