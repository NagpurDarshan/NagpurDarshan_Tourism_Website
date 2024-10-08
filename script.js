
      // Back to Top Button
      const backToTopButton = document.getElementById('back-to-top');

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      });

      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      // script.js
// script.js
const detailsContent = {
  destination: `
      <h3>Destination</h3>
      <p>Details about Skilling & Capacity Building.</p>
  `,
  facilitation: `
      <h3>Facilitation</h3>
      <p>Details about Marketing & Promotion.</p>
  `,
  strategy: `
      <h3>Strategy & Development</h3>
      <p>Details about Monitoring & Coordination.</p>
  `,
  product: `
      <h3>Product Development</h3>
      <p>Details about International Cooperation.</p>
  `,
  research: `
      <h3>Research & Analytics</h3>
      <p>Details about Administration & Finance.</p>
  `,
  ion: `
      <h3>CH & ION</h3>
      <p>Details about Information Technology.</p>
  `,
  evaluation: `
      <h3>Evaluation & Statistics</h3>
      <p>Details about Quality Assurance.</p>
  `,
  sah: `
      <h3>SAH</h3>
      <p>Details about Human Resources.</p>
  `
};
function showDetails(category, categoryName) {
  const detailsContainer = document.getElementById('details-container');
  const detailsContentDiv = document.getElementById('details-content');
  const detailsImage = document.getElementById('details-image');
  const categoryNameDiv = document.getElementById('category-name');

  // Set the image source and alt text based on category
  detailsImage.src = `images/${category}.jpg`;
  detailsImage.alt = categoryName;

  // Set the category name
  categoryNameDiv.textContent = categoryName;

  // Set the details content based on category
  detailsContentDiv.innerHTML = detailsContent[category];

  // Show the details container
  detailsContainer.classList.add('active');
}

function showDetails(category) {
  console.log('Clicked category:', category);

  // Example: Navigate to the respective category page
  switch (category) {
      case 'heritage':
          window.location.href = 'heritage.html';
          break;
      case 'nature':
          window.location.href = 'nature.html';
          break;
      case 'adventure':
          window.location.href = 'adventure.html';
          break;
      case 'food':
          window.location.href = 'food.html';
          break;
      case 'festivals':
          window.location.href = 'festivals.html';
          break;
      case 'shopping':
          window.location.href = 'shopping.html';
          break;
      case 'architecture':
          window.location.href = 'architecture.html';
          break;
      case 'nightlife':
          window.location.href = 'nightlife.html';
          break;
      default:
          console.log('Category not found');
  }
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}