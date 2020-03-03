module.exports = {

    flattenErrorsToArr(errorsObj) {
      const errorMsgs = [];
  
      for (const key in errorsObj.errors) {
        const errorObj = errorsObj.errors[key];
        errorMsgs.push(errorObj.message);
  
        // shorthand
        // errorMsgs.push(errorsObj.errors[key].message);
      }
      return errorMsgs;
    },
  
  }