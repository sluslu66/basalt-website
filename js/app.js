function info() {
  alert("Basalt is one of the most common rocks on Earth!");
}

// load sidebar
fetch("components/sidebar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("sidebar").innerHTML = data;
  });
