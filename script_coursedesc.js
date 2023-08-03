const floatingBox = document.getElementById('floating-rectangle');
const threshold = 300;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > threshold) {
      const scrolledDistance = scrollY - threshold;
      const percentage = (scrolledDistance / threshold) * 100;

      // Ensure the value is not less than 25 or greater than 100
      const topPercentage = -1 * Math.min(100, Math.max(25, percentage));

      floatingBox.style.top = `${topPercentage}%`;
    } else {
      floatingBox.style.top = '25%'; // Reset to the original position
    }
  });
