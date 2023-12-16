let add = document.querySelector('#add');
let cross = document.querySelector('.fa-xmark')

let from = document.querySelector('.from');

let button = document.querySelector('button')

add.addEventListener('click', function(){
    from.style.display = 'block';
    document.body.style.backgroundColor = 'gray';
})

cross.addEventListener('click', function(){
    from.style.display = 'none';
    document.body.style.backgroundColor = ''; // or document.body.style.backgroundColor = null;

})

button.addEventListener('click', function(){
     // Get the data you want to store in JSON format (replace this with your own logic)
  const dataToStore = {
    key1: 'value1',
    key2: 'value2',
    // ... add more properties as needed
  };

  // Convert the data to a JSON string
  const jsonData = JSON.stringify(dataToStore);

  // Store the JSON data in local storage
  localStorage.setItem('myDataKey', jsonData);

  // Optionally, you can also update the UI or perform other actions after storing the data
   console.log(JSON.stringify(jsonData))
})