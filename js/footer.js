const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer class="footer-content" style="overflow: hidden;"> 
        <div>
        <a href="index.html"><img src="img/image.png" class="logo" alt="" style="margin-left: 1100px; width: 200px; height: 200px;"></a>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title" style="    color: #3F3329;
                    font-family: 'Alike'; font-weight: bold;font-size: 22px;line-height: 20px;">Events</li>
                    <li><a href="schedule.html" class="social-link" style="    color: #3F3329;
                        font-family: 'Alike';font-weight: 400;font-size: 20px;line-height: 30px;">Opening hours</a></li>
                    <li><a href="consult.html" class="social-link" style="    color: #3F3329;
                        font-family: 'Alike';font-weight: 400;font-size: 20px;line-height: 30px;">Speak to a consultant</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title" style="    color: #3F3329;
        font-family: 'Alike'; font-weight: bold;font-size: 22px;line-height: 20px;">Contact</p>
        <p class="info"style="    color: #3F3329;
        font-family: 'Alike';font-weight: 400;font-size: 20px;line-height: 20px;">(613) 714-8159 </p>
        <p class="info" style="    color: #3F3329;
        font-family: 'Alike';font-weight: 400;font-size: 20px;line-height: 20px;">weddingplanner@gmail.com</p>
        <p class="info" style="    color: #3F3329;
        font-family: 'Alike';font-weight: 400;font-size: 20px;line-height: 20px;">75 Laurier Ave E 
            Ottawa, ON K1N 7N6</p>
        <div class="footer-social-container">
            <p class="social-title" style="    color: #3F3329;
            font-family: 'Alike';font-weight: bold;font-size: 20px;line-height: 20px;">Follow us on social media</p>
            <img src="img/Frame 6.png" class="social" alt="">
        </div>
        <p class="footer-credit">Wedding Planner</p>
    </footer>
    `;
}

createFooter();
