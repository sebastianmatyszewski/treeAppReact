import './Display_small_tree.css';
import Generated_tree from '../Generated_tree/Generated_tree';
import 'firebase/compat/firestore';
import { db } from "../../firebase_config"
import React,{useState,useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Display_small_tree = ()=> {

  const [trees, setTrees]=useState([]);
  const TreesCollectionRef = collection(db, "small");

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

Display_small_tree.propTypes = {};

Display_small_tree.defaultProps = {};

export default Display_small_tree;
