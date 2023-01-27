(function() {
  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      event.preventDefault();

      const value = event.target.dataset.filter;
      const items = document.querySelectorAll(".store-item");

      items.forEach(function(item) {
        if (value === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(value)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();

mybutton = document.getElementById("myBtn");
