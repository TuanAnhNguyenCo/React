import React from "react";



function Color(WrappedComponent){
    return class extends React.Component{

        constructor(props)
        {
            super(props)
            this.state  = {randomColor:''}
        }
        
        componentDidMount(){
            this.timerID = setInterval(()=>this.handleRandomColor(), 1000);
        }
        componentWillUnmount(){
            clearInterval(this.timerID);
        }
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }

        handleRandomColor(){
            let randomColor = this.getRandomColor()
            this.setState({randomColor:randomColor})
            
           
        }

        render(){
            let {randomColor} = this.state
        
            return(
                <div  style={{color:randomColor}}>
                    <WrappedComponent {...this.props}/>
                </div>
                
            )
        }
    }
       
  
}

export default Color