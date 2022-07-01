import React, { StrictMode, useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTodo ,deleteTodo , editTodo ,chekedTodo,updateTodo , onfilter ,active ,complet} from "../actions/index";
import todoReducers from "../reducers/todoReducer";
import './App.css'

const Student = () => {
  
  const [inputData,setInputData]=useState('');
  const [toggleSubmit,setToggleSubmit]=useState(true);
  // const [isEditItem,setIsEditItem]=useState(null);
  const list = useSelector((state)=>state && state.todoReducers && state.todoReducers.list)
  console.log("list",list);
  // const updateInputValue = useSelector((state)=>state && state.todoReducers && state.todoReducers.updateValue && state.todoReducers.updateValue.data)
  const updateInputValue = useSelector((state)=>state && state.todoReducers && state.todoReducers.updateValue && state.todoReducers.updateValue.data)
  const updateInputValueId = useSelector((state)=>state && state.todoReducers && state.todoReducers.updateValue && state.todoReducers.updateValue.id)
 
  const dispatch = useDispatch();

const handleEdit=()=>{
  dispatch(updateTodo(updateInputValueId,inputData));
  setToggleSubmit(true);
  setInputData('');
}

  useEffect(()=>{
    if(updateInputValue){
     setInputData(updateInputValue) 
    }
console.log("updateInputValue",updateInputValue);
  },[updateInputValue])


  return (
    <div>
      <div className="text-addtodo">
        {/* <input type="text"className="form-control"placeholder="Add Item....!!" value={updateInputValue ? updateInputValue : inputData} onChange={(e)=>setInputData(e.target.value)} /> */}
        <input type="text"className="form-control"placeholder="Add Item....!!" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
        {/* {
          updateInputValue === undefined ? <button className="btn btn-outline-secondary" type="button" onClick={()=>dispatch(addTodo(inputData),setInputData(''))}>Submit</button>
                       : <button className="btn btn-outline-secondary" type="button" onClick={()=>dispatch(addTodo(inputData),setInputData(''))}>Update</button>
        
        } */}

        {
          toggleSubmit ? <button className="btn btn-outline-secondary" type="button" onClick={()=>dispatch(addTodo(inputData),setInputData(''))}>Submit</button>
                      //  : <button className="btn btn-outline-secondary" type="button" onClick={()=>dispatch(updateTodo(updateInputValueId,inputData),setInputData(''),setToggleSubmit(true))}>Update</button>
                        : <button className="btn btn-outline-secondary" type="button" onClick={()=>handleEdit()}>Update</button>
        
        }
      </div>
      <br />

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"href="#" onClick={(e)=>dispatch(onfilter("all"))}>All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e)=>dispatch(onfilter("active"))}>Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e)=>dispatch(onfilter("complet"))}>Complete</a>
        </li>

        <div>
         <button type="button"  className="btn btn-primary btn-sm">Remove all</button>
        </div>
      </ul>
      <div>
        <div className="table table table-striped">
            {

              list.map((elem , ind)=>{
                return(
                  <>
                <div className="eachitem" key={elem.id}>
                  {/* <h1>Kishan Patel</h1> */}
                  <h3>{ind+1}</h3>
                  <h4>{elem.data}</h4>
                  <span className="buttonnormal">
                    <a type="button" className="check" onClick={()=>dispatch(chekedTodo(elem.id))}><i className="bi-check-circle"></i></a>
                    <a type="button" className="update" onClick={()=>dispatch(editTodo(elem.id),setToggleSubmit(false)) }><i className="bi bi-pencil-square "></i></a>  
                    <a type="button" className="delete" onClick={()=>dispatch(deleteTodo(elem.id))}><i className="bi bi-trash "></i></a>
                  </span>
                </div>  
                  </>
                )
              })
            }
        </div>
      </div>
    </div>
  );
};

export default Student;
