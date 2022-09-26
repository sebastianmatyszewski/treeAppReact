
import './Display_big_tree.css';
import Generated_tree from '../Generated_tree/Generated_tree';
import 'firebase/compat/firestore';
import { db } from "../../firebase_config"
import React,{useState,useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Display_big_tree = ()=> {

  const [trees, setTrees]=useState([]);
  const TreesCollectionRef = collection(db, "big");

  useEffect(() => {
    const getTrees = async () => {
      const data = await getDocs(TreesCollectionRef);
      setTrees(data.docs.map((doc) => ({...doc.data(), id: doc.id })))   
    };
    getTrees();
    
  }, [])

  return (
    <Generated_tree domTree = {trees} />
  )
}


Display_big_tree.propTypes = {};

Display_big_tree.defaultProps = {};

export default Display_big_tree;
