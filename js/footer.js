const createFooter = () => {
    let footer = document.querySelector('footer');
  
    footer.innerHTML = `
      <div class="footer-content">
        <div class="first">
          <a href="index.html"><img src="img/image.png" class="logo" alt=""></a>
          <div class="footer-ul-container">
            <ul class="category">
              <li class="category-title">Events</li>
              <li><a href="schedule.html" class="footer-link">Opening hours</a></li>
              <li><a href="consult.html" class="footer-link">Speak to a consultant</a></li>
            </ul>
          </div>
        </div>
        <div class="number3">
          <div>
            <p class="footer-title">Contact</p>
            <div class="contact-info">
              <p class="info">(613) 714-8159</p>
              <p class="info">weddingplanner@gmail.com</p>
              <p class="info">75 Laurier Ave E Ottawa, ON K1N 7N6</p>
            </div>
          </div>
          <div class="footer-social-container">
            <p class="social-title">Follow us on social media</p>
            <img src="img/Frame 6.png" class="social" alt="">
          </div>
        </div>
      </div>
      <p class="footer-credit">Wedding Planner</p>
    `;
  }
  
  createFooter();
  