export default function AppReducer(state,action){
        switch(action.type){
            case 'DELETE_TRANSACTION':return{
                  ...state,
                  transactions:state.transactions.filter(x=>x.id!==action.payload)


            }
            case 'ADD_TRANSACTION':return{
                  ...state,
                  // transactions:[action.payload,...state.transactions]
                  transactions:state.transactions.push(action.payload)


            }
              default: return state;
        }
    
}