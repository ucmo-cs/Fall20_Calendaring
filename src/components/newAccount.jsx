import React from "react";
import loginImg from "../../image.svg";

export class newAccount extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="base.container" ref={this.props.containterRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
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
        );
    }
}