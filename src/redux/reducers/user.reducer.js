import axios from "axios";
const initialState = {
    userInfo: {},
    status: false,
  };
  
  function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN': {
        console.log("🚀 ~ file: user.reducer.js ~ line 8 ~ userReducer ~ state", state)      
        const username = action.payload;
        let isVal = false;
        let userI = {}; 
        axios.post("http://localhost:5000/post/login",username)
        .then(response => {
          if(response.data.user){
            isVal= true;
            console.log("🚀 ~ file: user.reducer.js ~ line 18 ~ userReducer ~ isVal", isVal)
            userI= response.data.user
            console.log("🚀 ~ file: user.reducer.js ~ line 20 ~ userReducer ~ userI", userI)
          }
          return {
            ...state,
            userInfo: response.data.user ,
            status: true
          };   
        })
      }

      case 'LOGOUT': {
        return {
          ...state,
          userInfo: {},
        };
      }
      default: {
        return state;
      }
    }
  }
  
  export default userReducer;
  