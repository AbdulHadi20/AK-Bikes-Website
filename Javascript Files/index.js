var x = document.getElementById('login');
      var y = document.getElementById('register');
      var z = document.getElementById('btn');
  
      function login(){
          x.style.left = "27px";
          y.style.right = "-350px";
          z.style.left = "0px";
      }
      function register(){
          x.style.left = "-350px";
          y.style.right = "25px";
          z.style.left = "150px";
      }
  
      // View Password functions
      function myLogPassword(){
          var a = document.getElementById("logPassword");
          var b = document.getElementById("eye");
          var c = document.getElementById("eye-slash");
          if(a.type === "password"){
              a.type = "text";
              b.style.opacity = "0";
              c.style.opacity = "1";
          } else {
              a.type = "password";
              b.style.opacity = "1";
              c.style.opacity = "0";
          }
      }
  
      function myRegPassword(){
          var d = document.getElementById("regPassword");
          var b = document.getElementById("eye-2");
          var c = document.getElementById("eye-slash-2");
          if(d.type === "password"){
              d.type = "text";
              b.style.opacity = "0";
              c.style.opacity = "1";
          } else {
              d.type = "password";
              b.style.opacity = "1";
              c.style.opacity = "0";
          }
      }
  
      // Modal functionality
      var modal = document.getElementById("forgot-modal");
      var link = document.getElementById("forgot-link");
      var span = document.getElementsByClassName("close")[0];
  
      link.onclick = function(event) {
          event.preventDefault();
          modal.style.display = "flex";
      }
  
      span.onclick = function() {
          modal.style.display = "none";
      }
  
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  
      document.getElementById("modal-submit-button").onclick = function() {
          var emailInput = document.getElementById("modal-email-input").value;
          if (emailInput) {
              alert("A password reset link has been sent to " + emailInput);
              setTimeout(function() {
                  document.getElementById("modal-email-input").value = ""; // Clear the input after showing the alert
              }, 100); // Delay to ensure alert is displayed properly
              modal.style.display = "none";
          } else {
              alert("Please enter a valid email address.");
          }
      }