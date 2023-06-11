const createNav = () => {
    let nav = document.querySelector('.navbar');
  
    nav.innerHTML = `
    <div class="nav">
        <a href="index.html"><img src="img/image.png" class="brand-logo" alt=""></a>
        <a href="index.html"><img src="img/name.png" class="brand-name" alt=""></a>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search">
            </div>
            <a href="#"><img src="img/user.png" alt=""></a>
        </div>
        <div class="navitems">
            <a href="#"><img src="img/user.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="product.html" class="link">Weddings</a></li>
        <li class="link-item"><a href="#portfolio" class="link">Portfolio</a></li>
        <li class="link-item"><a href="#about" class="link">About</a></li>
    </ul>
    `;
  }
  
  createNav();
  