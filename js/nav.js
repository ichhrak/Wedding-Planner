const createNav = () => {
    let nav = document.querySelector('.navbar');
  
    nav.innerHTML = `
      <div class="nav">
        <a href="index.html"><img src="img/image.png" class="brand-logo" alt=""></a>
        <a href="index.html"><img src="img/name.png" class="brand-name" alt=""></a>
      </div>
      <ul class="links-container">
        <li class="link-item"><a href="product.html" class="link">Weddings</a></li>
        <li class="link-item"><a href="consult.html" class="link">Book an appointment</a></li>
        <li class="link-item"><a href="#portfolio" class="link" id="portfolio-link">Portfolio</a></li>
        <li class="link-item"><a href="#about" class="link">About</a></li>
      </ul>
    `;
  
    // Add event listener to the "Portfolio" link
    const portfolioLink = document.getElementById('portfolio-link');
    portfolioLink.addEventListener('click', handlePortfolioClick);
  }
  
  // Handle click on "Portfolio" link
  const handlePortfolioClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
  
    // Check if the current page is the front page
    if (window.location.pathname === '/index.html') {
      // Scroll to the portfolio section
      const portfolioSection = document.getElementById('portfolio');
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Show a pop-up or alert message
      alert('Please go to the front page to view the portfolio.');
      window.location.href = 'index.html'; 
    }
  }
  
  createNav();
  