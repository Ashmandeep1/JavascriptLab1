// Name: Ashmandeep kaur
// Student id: 200555988
// Lab Assignment 1

// Importing the 'fs' module, this module is used to read or write the files
let fs = require('fs');

// Read the contents of the file asynchronously i.e.non-blocking
// fs.readfile method is used to read the files
// (err, data) => {} is a call back function, 
// Once file reading is done by fs.readFile module, this callback function will be called by node.js, this callback function supports non-blocking operation. if there is an error in file reading, it will be stored in err, otherwise the content will be stored in data if the file is read successfully.
// 

fs.readFile('sampleText.txt', 'utf8', (err, data) => {
    // if function checks for errors. In case, there is an error reading the given file, it shows the error along with the given message and the function exits. The rest of the code will not run in case of an error.
    if (err) {
        console.error('There is an error reading the file:', err);
        return;
    }

    // Show the given text to the terminal
    console.log('The file content is:');
    // This shows the content of the file stoed in data paramter of the call back function.
    console.log(data);
});