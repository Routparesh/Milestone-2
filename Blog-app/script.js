let add = document.querySelector('#add');
let cross = document.querySelector('.fa-xmark')
let from = document.querySelector('.from');
let button = document.querySelector('button')
let blog_url = document.querySelector('#blog_url');
let blog_title = document.querySelector('#blog_title');
let blog_description = document.querySelector('#blog_description');
let blog_textarea = document.querySelector('#blog_textarea');

add.addEventListener('click', function(){
    from.style.display = 'block';
    document.body.style.backgroundColor = 'gray';
})

cross.addEventListener('click', function(){
    from.style.display = 'none';
    document.body.style.backgroundColor = ''; // or document.body.style.backgroundColor = null;

})

button.addEventListener('click', function(e){
  e.stopPropagation()
     // Get the data you want to store in JSON format (replace this with your own logic)
  const dataToStore = {
    blog_url: blog_url.value,
    blog_title: blog_title.value,
    blog_description: blog_description.value,
    blog_textarea: blog_textarea.value 
  };

  // Convert the data to a JSON string
  const jsonData = JSON.stringify(dataToStore);

  // Store the JSON data in local storage
  localStorage.setItem('myDataKey', jsonData);

  // Optionally, you can also update the UI or perform other actions after storing the data
  
    console.log(jsonData.blog_url);
 
})