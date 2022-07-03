
let innerDiv= document.createElement('div');
innerDiv.className="inner-div";

let para= document.createElement('p');
para.textContent="hey we are inside div"
para.style.color="white";

para.style.display="none"

let rootNode= document.getElementById('root');
innerDiv.appendChild(para);
rootNode.appendChild(innerDiv)





