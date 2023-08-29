import React from "react";


// 클래스형 컴포넌트가 되려면 App클래스가 리액트가 제공하는 component를 반드시 상속 받아야 해!!
class App extends React.Component{

  state = {
    count : 0,
  };

  add = () => {
    // console.log('add');  // this.state.count++ ; 너낌의 코드!
    // this.state.count = 1;
    // 1. this.setState({count:1})
    // 2. this.setState({count : this.state.count +1}); //count state를 +1만큼 증가
    
    // 3.currnt인자를 받아  {count : this.state.count =1}를 반환하는 함수로 작성
    this.setState(current => ({
      count : this.state.count +1
    })); 

  };

  minus =() =>{
    // console.log('minus');
    // this.state.count = -1;
    // 1.this.setState({count:-1})
    // 2.this.setState({count : this.state.count -1}); //count state를 -1만큼 감소
    
    // 3.currnt인자를 받아  {count : this.state.count -1}를 반환하는 함수로 작성
    this.setState(current => ({
      count : this.state.count -1
    })); 

  };

  constructor(props){
    super(props)
    console.log('hello constructor');
  }

  componentDidMount(){
    console.log("component rendered! ");
  }

  componentDidUpdate(){
    console.log("I just updated! ");
  }

  componentWillUnmount(){
    console.log("Goodbye! ");
  }


  render(){
      console.log('hello render');
      return( 
        <div>
        <h1> The number is : {this.state.count} </h1>
        <button onClick={this.add}> Add</button>
        <button onClick={this.minus}> Minus</button>
        </div>
      );
      
  }
}

 export default App;