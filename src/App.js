import React from "react";
import './App.scss';
import { Login, newAccount } from "./components/login/index";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggingActive: true,
    };
  }

  //componentDidMount() {
    //Add .right by default
    //this.rightSide.classList.add("right");
  //}

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }


  render (){
    const { isLoggingActive } =  this.state;
    const current = isLoggingActive ? "newAccount" : "Login"
    const currentActive = isLoggingActive? "Login" : "newAccount"
    return(
      <div className="App">
        <div className="login">
          <div className="container">
            {isLoggingActive && (<Login containerRef={
              ref => (this.current = ref)}/>
            )}
            {isLoggingActive && (<newAccount containerRef={
              ref => (this.current = ref)}/>
            )}
          </div>
          <RightSide 
          current = {current}
          currentActive = {currentActive} 
          containerRef={ref => (this.RightSide = ref)} 
          onClick={this.changeState.bind(this)}/>
        </div>
        </div>  
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
