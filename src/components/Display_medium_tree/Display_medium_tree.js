import './Display_medium_tree.css';
import Generated_tree from '../Generated_tree/Generated_tree';
import 'firebase/compat/firestore';
import { db } from "../../firebase_config"
import React,{useState,useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Display_medium_tree = ()=> {

  const [trees, setTrees]=useState([]);
  const TreesCollectionRef = collection(db, "medium");

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

Display_medium_tree.propTypes = {};

Display_medium_tree.defaultProps = {};

export default Display_medium_tree;
