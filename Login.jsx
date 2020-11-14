import React from "react";

function Login() {
  return (
    <div className="contact">
      <div class="container">        
            <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Login</h1>
            <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlForm="username">Username</label>
                <input type="text" name="username" placeholder="username"/>
              </div>
              <div className="form-group">
                <label htmlForm="password">PassWord</label>
                <input type="text" name="password" placeholder="password"/>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">Login</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;