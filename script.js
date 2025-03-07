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
    let form = document.getElementById("contactForm"); // Ensure correct form selection

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = new FormData(form); // Ensure formData is constructed from a form element
        let actionUrl = "https://script.google.com/macros/s/AKfycbzTpC-evoCj5Qm8IabAnVcDdfGCKams1G32R9U76CaFVpvYediTPeBbRwi48y_xc7bx/exec";

        fetch(actionUrl, { method: "POST", body: formData })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    showSuccessMessage(); // Show success message
                    form.reset(); // Reset the form fields

                    // Redirect to Contact Us page after 2 seconds
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
        msgBox.style.top = "20px";
        msgBox.style.left = "50%";
        msgBox.style.transform = "translateX(-50%)";
        msgBox.style.background = "#28a745";
        msgBox.style.color = "#fff";
        msgBox.style.padding = "10px 20px";
        msgBox.style.borderRadius = "5px";
        msgBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.1)";
        msgBox.style.zIndex = "1000";

        document.body.appendChild(msgBox);

        setTimeout(() => {
            msgBox.remove();
        }, 2000);
    }

    function showErrorMessage() {
        let msgBox = document.createElement("div");
        msgBox.textContent = "❌ Error submitting form. Please try again.";
        msgBox.style.position = "fixed";
        msgBox.style.top = "20px";
        msgBox.style.left = "50%";
        msgBox.style.transform = "translateX(-50%)";
        msgBox.style.background = "#dc3545";
        msgBox.style.color = "#fff";
        msgBox.style.padding = "10px 20px";
        msgBox.style.borderRadius = "5px";
        msgBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.1)";
        msgBox.style.zIndex = "1000";

        document.body.appendChild(msgBox);

        setTimeout(() => {
            msgBox.remove();
        }, 2000);
    }
});
