import { type } from "@testing-library/user-event/dist/type";

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      done: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};

export const editTodo = (id, data) => {
  return {
    type: "EDIT_TODO",
    id: id,
    data: data,
  };
};
export const updateTodo = (id, data) => {
    console.log("ididid",id);
    console.log("datadatadata",data);
  return {
    type: "UPDATE_TODO",
    payload: {
      id: id,
      data: data,
    },
  };
};

export const chekedTodo = (id) => {
  return {
    type: "CHECKED_TODO",
    payload: {
        id:id,       
    },
  };
};

export const onfilter =(done,e)=>{
  return {
    type : "FILTER_DATA",
    payload:{
      done:done,
      e:e,
     },
  };
};

// export const alldata=()=>{
//   return {
//     type : "ALL_DATA",
    
//   }
// }

// export const active=(done)=>{
//   return{
//     type : "ACTIVE_DATA",
//     payload:{
//       done:done,
      
//     },
//   };
// };

// export const complet=(done)=>{
//   return{
//     type : "COMPLET_DATA",
//     payload:{
//       done:done
//     }

//   }
// }

