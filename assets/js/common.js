document.getElementById("header").innerHTML = `<div class="header-area ">
<div class="main-header header-sticky">
    <div class="container-fluid">
        <div class="menu-wrapper d-flex align-items-center justify-content-between">
            <div class="header-left d-flex align-items-center">
                <!-- Logo -->
                <div class="logo">
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                </div>
                <!-- Main-menu -->
                <div class="main-menu  d-none d-lg-block">
                    <nav>
                        <ul id="navigation">
                            <li><a href="index.html">Home</a></li> 
                            <!-- <li><a href="shop.html">shop</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="blog.html">Blog</a>
                                <ul class="submenu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog_details.html">Blog Details</a></li>
                                    <li><a href="elements.html">Elements</a></li>
                                    <li><a href="product_details.html">Product Details</a></li>
                                </ul>
                            </li> -->
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>   
            </div>
            <div class="header-right1 d-flex align-items-center">
                <!-- Social -->
                <!-- <div class="header-social d-none d-md-block">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                </div> -->
                <!-- Search Box -->
                <div class="search d-none d-md-block">
                    <ul class="d-flex align-items-center">
                        <li class="mr-4">
                            <button class="btn btn-success" id="signIn" data-toggle="modal" data-target="#myModal">Sign In</button>
                        </li>
                        <li class="mr-4">
                            <button class="btn btn-success" id="logIn">Log In</button>
                        </li>
                        <li class="mr-15">
                            <div class="nav-search search-switch">
                                <i class="ti-search"></i>
                            </div>
                        </li>
                        <!-- <li>
                            <div class="card-stor">
                                <img src="assets/img/gallery/card.svg" alt="">
                                <span>0</span>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
            </div>
        </div>
    </div>
</div>
</div>


<!-- Modal -->
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="mb-5">Sign in</h3>
          <button type="button" class="close fa-2x text-dark" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <div class="form-outline form-group floating-label-group mb-4">
                <input type="email" class="form-control form-control-lg input" id="username" autofocus required/>
                <label for="username" class="floating-label">Gmail</label>
              </div>
  
              <div class="form-outline form-group floating-label-group mb-4">
                <input type="password" class="form-control form-control-lg input" autofocus required/>
                <label for="username" class="floating-label">Password</label>
              </div>
  
              <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
  
              <hr class="my-4">
        </div>
        <div class="modal-footer">
        <button class="btn btn-block btn-primary mb-4" id="google" style="background-color: #dd4b39;" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
        <button class="btn btn-block btn-primary" id="facebook" style="background-color: #3b5998;" type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
        </div>
      </div>
      
    </div>
  </div>`;

{
  /* $("#signInModal").hide();

$("#signIn").on("click", () => {
  $("#signInModal").show();
}); */
}
// <label for="username" class="placeholder">User Name</label>
