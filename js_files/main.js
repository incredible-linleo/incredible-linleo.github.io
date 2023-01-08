class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- navbar -->
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="./resources/img/footer-logo-right.png" alt="" height="33"> Test of Siam
                    </a>
                    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-2">
                    <li class="nav-item">
                        <a class="nav-link menu-active" aria-current="page" href="menu.html">menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="booking.html">booking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">faq</a>
                    </li>
                    </ul>
                    <button type="button" class="btn btn-primary">Signup</button>
                </div>
                </div>
            </nav>
            
            
        `
    }
}


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="mt-7 bg-dark py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col">
                            <div class="text-white">
                                <div class="footer-logo">
                                    <img src="./resources/img/footer-logo-left.png" alt="">    
                                    <div class="p text-center">Taste of Siam</div>
                                </div>    
                                    <div class="mt-5">2595 Gambler Lane</div>
                                    <div>281-966-7090</div>
                            </div>
                        </div>
                        <div class="col position-relative">
                                <img src="./resources/img/footer-logo-right.png" alt="logo" class="footer-logo-right1 position-absolute top-50 end-0 translate-middle-y"> 
                        </div>
                    </div>
                </div>
            </footer>
            
            
        `
    }
}




customElements.define('my-navbar', MyNavbar)
customElements.define('my-footer', MyFooter)
