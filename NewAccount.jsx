import React from "react";

function NewAccount() {
  return (
    <div className="new-account">
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
            <h1 class="font-weight-light">New Account</h1>
            <div className="form">
                        <div className="form-group">
                            <label htmlForm="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                      </div>
                      <div className="form-group">
                            <label htmlForm="email">Email</label>
                            <input type="text" name="email" placeholder="email"/>
                      </div>
                      <div className="form-group">
                      <label htmlForm="password">PassWord</label>
                            <input type="text" name="password" placeholder="password"/>
                      </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Registar</button>
                </div>
          </div>
        </div>
      </div>
  );
}

export default NewAccount;