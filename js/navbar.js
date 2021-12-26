class NavbarComponent extends HTMLElement {
	constructor(){
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light navbar-bg-custom">
				<div class="container-fluid">
					<a class="navbar-brand brand-font" href="index.html">
						<img alt="Brand" src="../images/logo-256.png" class="img-fluid logo-navbar-size"> Busy Bee Builders
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="/index.html">Home Page</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="#" aria-disabled="true">Buy/Sell Homes</a>
							</li>
							<li class="nav-item">
							<a class="nav-link disabled" href="#" aria-disabled="true">Storage Rentals</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="#" aria-disabled="true">Rental Homes</a>
							</li>
							
						</ul>
						
					</div>
				</div>
			</nav>  
			
			`;
	}
	
}
customElements.define('navbar-component', NavbarComponent);
//<navbar-component></navbar-component>
