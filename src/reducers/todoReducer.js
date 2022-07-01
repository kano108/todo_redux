const initialData={
    list : [],
    updateValue: {},
    // filterdata:{}
}

const todoReducers = (state=initialData , action) =>{
    switch(action.type){
        case "ADD_TODO" :
    const {id , data , done} = action.payload;
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data,
                        done:done
                    }
                ]
            }
        case "DELETE_TODO" :

            const newList = state.list.filter((elem)=>elem.id != action.id)   
            // console.log("state+++++",state)
            // console.log("action+++++",action)         
            return {
                ...state,
                list : newList
            }
        case "EDIT_TODO":
            const newEditItem=state.list.find((elem)=>elem.id == action.id)
            // console.log("++++++++++fetchdata:",newEditItem)
            // console.log("++++++state",state)
            // console.log("+++++action",action)
            return{
                
                ...state,
                // list :newEditItem
                updateValue: newEditItem
              
            } 
        case "UPDATE_TODO" :
            let newData = state.list  
            let dummyData = newData.filter(item=>{
                
                if(item.id === action.payload.id)
                {
                    item["data"] = action.payload.data
                    return item
                }
                return item
            })
            console.log("dummyData",dummyData);
            return{
                ...state,
                list:dummyData,
                updateValue:{} //update button par click kartya pase input box clean karva mate(atle object clean kare) 
                
            }
        case "CHECKED_TODO":
            let DoneData=state.list
            let done_data = DoneData.map((elem)=>{
             
                if(elem.id === action.payload.id)
                {
                return {...elem , done : !elem.done}
                }
            //console.log("++++++++elem",elem);
            return elem
             })
             console.log("+++++done_dtaa",done_data);
            return{
                ...state,
                list:done_data
            }

        case "FILTER_DATA":
            let filterdata=state.list
            if(action.payload.e == "active")
            {
                const Filter_Data=filterdata.filter((elem)=>{
                    return elem.done == false;
                });
                return{
                  
                   list: Filter_Data
                }
            }
            else  if(action.payload.e == "complet")
            {
                const Filter_Data=filterdata.filter((elem)=>{
                    return elem.done == true;
                });
                console.log("+++++alldata",Filter_Data);
                return{
                    state,
                   list: Filter_Data
                }
            }
            else  if(action.payload.e == "all")
            {
                const Filter_Data=filterdata
                console.log("+++++alldata",Filter_Data);
                return{
                    state,
                   list: Filter_Data
                }
            }

            // case "ACTIVE_DATA":
            //     let activedata=state.list
            //     const update_active=activedata.filter((elem)=>{
            //         return elem.done == false
            //     })
            //     return{
                 
            //         list:update_active
            //     }

            // case  "COMPLET_DATA":
            //     let completdata=state.list
            //     const update_complet=completdata.filter((elem)=>{
            //         return elem.done == true
            //        });
            //     return{
                    
            //         list:update_complet
            //     }

        
            default : return state;
    }
}
 export default todoReducers;