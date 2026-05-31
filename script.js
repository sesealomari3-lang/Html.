document.addEventListener("DOMContentLoaded", function () {

  var orderForm = document.getElementById('coffeeOrderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('orderName').value.trim();
      var order = document.getElementById('orderItems').value.trim();
      var phone = document.getElementById('orderPhone').value.trim();

      if (name === "" || order === "" || phone === "") {
        alert("Please fill your info! ⚠️");
      } else {
        alert("Success! Your " + order + " is being prepared. Thank you " + name + " 😊");
        orderForm.reset();
      }
    });
  }

  var reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('revName').value.trim();
      var text = document.getElementById('revComment').value.trim();

      if (name === "" || text === "") {
        alert("Please enter your name and comment.");
        return;
      }

      var reviewsGrid = document.getElementById("reviewsGrid");
      if (reviewsGrid) {
        var newReview = document.createElement("div");
        newReview.className = "bubble";
        newReview.innerHTML = "<strong>" + name + ":</strong><p>" + text + "</p>";
        
        reviewsGrid.appendChild(newReview);
      }

      document.getElementById("revName").value = "";
      document.getElementById("revComment").value = "";
      alert("Thank you for your feedback! 😊");
    });
  }

});
