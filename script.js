function showPage(pageId) {
  // Hide all pages
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  // Show selected page
  var selected = document.getElementById(pageId);
  if (selected) {
    selected.style.display = 'block';
  }
}

function submitForm() {
  var name = document.getElementById('custName').value;
  var order = document.getElementById('custOrder').value;
  var msg = document.getElementById('msg');
  
  if (name === "" || order === "") {
    msg.innerHTML = "<p style='color:red;'>Please fill your info!</p>";
  } else {
    msg.innerHTML = "<p style='color:green;'>Order Sent! Thank you " + name + "</p>";
    alert("Success! Your " + order + " is being prepared.");
  }
}