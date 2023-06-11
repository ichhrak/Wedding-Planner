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
        <li class="link-item"><a href="#about" class="link" id="about-link">About</a></li>
      </ul>
    `;
  
    // Add event listeners to the "Portfolio" and "About" links
    const portfolioLink = document.getElementById('portfolio-link');
    portfolioLink.addEventListener('click', handlePortfolioClick);
  
    const aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', handleAboutClick);
  }
  
  // Handle click on "Portfolio" link
  const handlePortfolioClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
  
    // Check if the current URL is the front page and has a hash fragment pointing to the front page's section
    if (window.location.pathname === '/index.html' && window.location.hash !== '#portfolio') {
      // Scroll to the portfolio section
      const portfolioSection = document.getElementById('portfolio');
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Show a pop-up or alert message
      alert('Please go to the front page to view the portfolio.');
    }
  }
  
  // Handle click on "About" link
  const handleAboutClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
  
    // Check if the current URL is the front page and has a hash fragment pointing to the front page's section
    if (window.location.pathname === '/index.html' && window.location.hash !== '#about') {
      // Scroll to the about section
      const aboutSection = document.getElementById('about');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Show a pop-up or alert message
      alert('Please go to the front page to view the about section.');
    }
  }
  
  createNav();
  