// Auto visible enquery popup
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash if any
  if (path === "" || path === "/" || path.endsWith("../home.html")) {
      setTimeout(function () {
          const modalElement = document.getElementById('Enquiry_Form_Modal');
          if (modalElement) {
              const modal = new bootstrap.Modal(modalElement, {
                  keyboard: true
              });
              modal.show();
          }
      }, 5000);
  }
});

// tooltip bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.querySelectorAll('#accordion .card-header').forEach(header => {
    header.addEventListener('click', () => {
      document.querySelectorAll('#accordion .card-header').forEach(h => h.classList.remove('active-header'));
      if (!header.querySelector('.collapsed')) {
        header.classList.add('active-header');
      }
    });
});

// Number count
document.addEventListener('DOMContentLoaded', function () {
    function countUp(element, end, duration) {
        let start = 0;
        let step = Math.ceil(end / (duration / 60)); 
    
        function updateCount() {
            start += step;
            if (start < end) {
                element.innerText = start + "+";
                setTimeout(updateCount, 16);
            } else {
                element.innerText = end + "+"; 
            }
        }
        updateCount();
    }
    function startCounting(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.las_count_anime').forEach(element => {
                    const targetNumber = parseInt(element.innerText.replace(/\D/g, ''), 10);
                    countUp(element, targetNumber, 10000); 
                });
                observer.unobserve(entry.target);
            }
        });
    }
    const observer = new IntersectionObserver(startCounting, {
        root: null, 
        threshold: 0.5 
    });
    const targetSection = document.querySelector('.las_who_we_are');
    if (targetSection) {
        observer.observe(targetSection);
    }
});


//contact submit thank you page

    document.addEventListener("DOMContentLoaded", function () {
        let form = document.getElementById("contactForm");

        if (!form) {
            console.error("Form not found!");
            return;
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            let formData = new FormData(form);
            let actionUrl = "https://script.google.com/macros/s/AKfycbzTpC-evoCj5Qm8IabAnVcDdfGCKams1G32R9U76CaFVpvYediTPeBbRwi48y_xc7bx/exec";

            fetch(actionUrl, { method: "POST", body: formData })
                .then(response => response.json())
                .then(data => {
                    if (data.result === "success") {
                        form.reset();
                        showSuccessMessage(); // Show success message
                        
                        // Ensure message stays visible for 2s before redirecting
                        setTimeout(() => {
                            window.location.href = "../contactUs.html"; // Change this to your actual Contact Us page URL
                        }, 2000);
                    } else {
                        showErrorMessage();
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    showErrorMessage();
                });
        });

        function showSuccessMessage() {
            let msgBox = document.createElement("div");
            msgBox.textContent = "✅ Thank you! Your form has been submitted successfully.";
            msgBox.style.position = "fixed";
            msgBox.style.top = "50%";
            msgBox.style.left = "50%";
            msgBox.style.transform = "translate(-50%, -50%)";
            msgBox.style.background = "#28a745";
            msgBox.style.color = "#fff";
            msgBox.style.padding = "15px 25px";
            msgBox.style.fontSize = "18px"; // Increase font size for mobile
            msgBox.style.textAlign = "center";
            msgBox.style.borderRadius = "10px";
            msgBox.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)";
            msgBox.style.zIndex = "10000";
            msgBox.style.width = "80%";
            msgBox.style.maxWidth = "400px"; // Ensures it's readable on mobile
            msgBox.style.transition = "opacity 0.3s ease-in-out"; // Smooth fade effect

            document.body.appendChild(msgBox);

            // Ensure message stays for 2 seconds before disappearing
            setTimeout(() => {
                msgBox.style.opacity = "0";
                setTimeout(() => {
                    msgBox.remove();
                }, 300); // Smooth fade-out
            }, 2000);
        }

        function showErrorMessage() {
            let msgBox = document.createElement("div");
            msgBox.textContent = "❌ Error submitting form. Please try again.";
            msgBox.style.position = "fixed";
            msgBox.style.top = "50%";
            msgBox.style.left = "50%";
            msgBox.style.transform = "translate(-50%, -50%)";
            msgBox.style.background = "#dc3545";
            msgBox.style.color = "#fff";
            msgBox.style.padding = "15px 25px";
            msgBox.style.fontSize = "18px";
            msgBox.style.textAlign = "center";
            msgBox.style.borderRadius = "10px";
            msgBox.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)";
            msgBox.style.zIndex = "10000";
            msgBox.style.width = "80%";
            msgBox.style.maxWidth = "400px";
            msgBox.style.transition = "opacity 0.3s ease-in-out";

            document.body.appendChild(msgBox);

            setTimeout(() => {
                msgBox.style.opacity = "0";
                setTimeout(() => {
                    msgBox.remove();
                }, 300);
            }, 3000);
        }
    });
</script>

