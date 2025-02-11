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

