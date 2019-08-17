let index;
let lastIndex;

class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
handleClick(event) {
  
    let id = event.target.id;
    let letter = event.target.textContent;
    let display = document.getElementById('display');
    id = document.getElementById(id);
    letter = document.getElementById(letter);
    
    letter.play();
    
    let colors = [
      "#27AE61",
      "#FA6964",
      "#BFBA9A",
      "#16A086",
      "#E84C3D",
      "#EE82EE",
      "#DA70D6",
      "#FF00FF",
      "#00FFFF",
      "#7FFF00",
      "gold"
    ];
  
    index = Math.ceil(Math.random() * 10);

    if (index == lastIndex) {
      if (index != 10) {
        index++;
      } else {
        index--;
      }
    }

    lastIndex = index;
   
    console.log("index = " + index);
    console.log("lastIndex = " + lastIndex);
    id.style.color = colors[index]; 
  
    display.style.boxShadow = "0 0 5px " + colors[index] + ", 0 0 10px " + colors[index] + ", 0 0 20px " + colors[index] + ", 0 0 30px " + colors[index] + ", 0 0 40px " + colors[index] + ", 0 0 55px " + colors[index] + ", 0 0 75px " + colors[index];
  
    display.style.border = "3px solid " + colors[index];
  
    id.style.height = "72px";   
    id.style.width = "72px"; 
    document.getElementById('big-border').style.border = "10px solid " + colors[index];
  
    setInterval(function() { 
      id.style.height = "69px"; 
      id.style.width = "69px";
    }, 100);
   
  }
     
  render() {
    return (
       
      <div id="drum-machine">
        <div id="big-border">
        <div className="container" id="display">
          
          <div className="row">
            <div className="col">
          <div className="drum-pad" id="one" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"/>Q</div>
            </div>
            <div className="col">
          <div className="drum-pad" id="two" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"/>W</div>
            </div>
            <div className="col">
          <div className="drum-pad" id="three" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"/>E</div>
            </div>
          </div>
         
          <div className="row"> 
            <div className="col">
          <div className="drum-pad" id="four" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"/>A</div>
            </div>
            <div className="col">
          <div className="drum-pad" id="five" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"/>S</div>
            </div>
            <div class="col">
          <div className="drum-pad" id="six" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"/>D</div>
            </div>
          </div>  
          
          <div className="row">
            <div className="col">
          <div className="drum-pad" id="seven" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"/>Z</div>
            </div>
            <div className="col">
          <div className="drum-pad" id="eight" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"/>X</div>
            </div>
            <div className="col">
          <div className="drum-pad" id="nine" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"/>C</div>
            </div>
          </div>
          
        </div>
        </div>
        </div>
    );
  }
}


ReactDOM.render(<Machine />, document.getElementById('app'));
