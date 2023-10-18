// import { writeFileSync } from 'fs';

// // // Import the data module
// import {  transactions } from './data.js';

// // // // Define a function to remove "$" from values recursively
// function removeDollarSign(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === 'string' && obj[key].startsWith('$')) {
//       obj[key] = parseFloat(obj[key].substring(1));
//     } else if (typeof obj[key] === 'object') {
//       removeDollarSign(obj[key]);
//     }
//   }
// }

// // // // Call the function to update the data
// // // removeDollarSign(kpis);
//    // removeDollarSign(products);
// removeDollarSign(transactions);

// // // // Create an object containing the updated data
// const updatedData = {
// //   kpis,
// //   products
//   transactions,
// };

// // // // Convert the object to a JSON string with unquoted keys
// const updatedDataString = JSON.stringify(updatedData, null, 2)
//   .replace(/"(\w+)"\s*:/g, '$1:'); // Remove quotes around keys

// // // // Write the updated data back to the file
// writeFileSync('./data.js', `export default ${updatedDataString};\n`, 'utf-8');

// console.log('Dollar signs removed and data updated in data.js');




  
  