module.exports = (on, config) => {
   require('@cypress/code-coverage/task')(on, config)
   // include any other plugin code...
  
  
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
  
   // It's IMPORTANT to return the config object
   // with any changed environment variables
   return config
 
  }