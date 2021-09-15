import React,{Component} from "react";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      quote:"",
      author:"",
    };
    this.handleClick=this.handleClick.bind(this); 
  }
    componentDidMount(){
      this.handleClick();
    }
    
    handleClick(){
      const Data=
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
      fetch(Data)
      .then((res)=>res.json())
      .then((data)=>{
        let quoteArray=data.quotes;
        let randomIndex=Math.floor(Math.random()*data.quotes.length);
        let randomQuote=quoteArray[randomIndex];
        
        this.setState({
          quote:randomQuote.quote,
          author:randomQuote.author,
        });
        
      });
    }
    
    render(){
      return(
      <div id="wrapper">
        <p className="title">Random Quote Generator</p>
          <div id="quote-box">
            <blockquote id="text">&ldquo;{this.state.quote}&rdquo;</blockquote>
            
            <div id="author">-{this.state.author}</div>
          
              <button
              id="new-quote"
              className="btn btn-secondary"
              onClick={this.handleClick}>New Quote</button>
            
          </div>
    
        <footer id="footer">By Iphigenie|2021</footer>
          </div>
            );
    }
  }
  

  export default App;
  