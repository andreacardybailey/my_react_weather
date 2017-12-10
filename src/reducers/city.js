const city = (state = [], action) => {
  console.log("The city will change");
  console.log(state, action);
  return state;
}

export default city;