import React from 'react';
import './Generated_tree.css';
import * as ReactDOMClient from 'react-dom/client';

const Generated_tree = (props) => {

  var divId = -1;
  var ids = [];
  var root = null ;
  const createLeaf = ()=>{
    console.time('doSomething')
    createLeafs(props.domTree[0]);
    console.timeEnd('doSomething')

  }

  const createLeafs = (tree)=>{
    const treeArray= JSON.parse(tree.treeTable)
    const container = document.getElementById('mainDiv');
    root = ReactDOMClient.createRoot(container);
    const zmienna = generate(treeArray, 0, 'black');
    root.render(zmienna);
  }

  const generate = (tree, level, textColor)=>{
    if(Array.isArray(tree)){
      const list = [];
      tree.forEach(element => {
        list.push(generate(element, level+1, textColor));
      });
      return createElement(list, level, textColor);
    }else{
      return createElement(tree, level, textColor);
    }
  }

  const createElement = (o, level, textColor)=>{
    const color  = ['green', 'pink', 'yellow', 'blue', 'red', 'magenta','grey', 'gold', 'brown', 'white'];
    if(Array.isArray(o)){
      divId++
      return React.createElement("div", {style:{backgroundColor: color[level], margin: 40}, id: divId}, o);
    }else{
      let type;
      switch (o) {
        case 0:
          type = "h1";
          break;
        case 1:
          type = "p";
          break;
        case 2:
          type = "h3";
          break;
        case 3:
        default:
          type = "span";
          break;
      }
      return React.createElement(type, {style:{backgroundColor: color[level], color: textColor}}, makeid(20));
    }
  
  } 

  const addLeaf = () =>{
    console.time('addChild')
    const zmienna = addLeafElement(JSON.parse(props.domTree[0].treeTable), 0, 'black')
    root.render(zmienna);
    console.timeEnd('addChild')
  }

  const addLeafElement = (leafElement, level, textColor)=>{
    if(Array.isArray(leafElement)){
      const list = [];
      list.push(generate(0, level+1, textColor));
      leafElement.forEach(element => {
        list.push(generate(element, level+1), textColor);
      });
      return createElement(list, level, textColor);
    }else{
      return createElement(leafElement, level, textColor);
    }
  }

  const changeLeaf = () =>{
    console.time('changeLeaf')
    const zmienna = changeLeafElement(JSON.parse(props.domTree[0].treeTable), 0, 'green')
    root.render(zmienna);
    console.timeEnd('changeLeaf')
  }

  const changeLeafElement = (leafElement, level, textColor) =>{
    return generate(leafElement, level, textColor);
    // root.render(zmienna);
    // if(Array.isArray(leafElement)){
    //   const list = [];
    //   // list.push(generate(0, level+1));
    //   leafElement.forEach(element => {
    //     list.push(generate(element, level+1, textColor));
    //   });
    //   return createElement(list, level, textColor);
    // }else{
    //   return createElement(leafElement, level, textColor);
    // }
  }

  const deleteTree = () => {
    console.time('deleteTree')
    root.render(null)
    console.timeEnd('deleteTree')
  }

  function makeid(number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < number; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
  }


  return (
    <div style={{margin:'50px'}}>
        <button onClick={function(){createLeaf()}}>Generuj</button>
        <button onClick={function(){addLeaf()}}>Dodaj liście</button>
        <button onClick={function(){changeLeaf()}}>Zmień teksty</button>
        <button onClick={function(){deleteTree()}}>Usuń drzewo</button>
        <div id='mainDiv'></div>
    </div>
  )
  // console.log(props.domTree)
  return (
    <div>
        {/* Data from parent is:{this.props.dataFromParent} */}
        fef
    </div>
);
  }

Generated_tree.propTypes = {};

Generated_tree.defaultProps = {};

export default Generated_tree;
