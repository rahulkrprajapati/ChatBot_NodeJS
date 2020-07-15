function register(event){
    event.preventDefault();
    var name= document.getElementById('name').value;
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(password);

  

    axios.post('http://localhost:3000/api/register', {
        name: `${name}`,
        email: `${username}`,
        password: `${password}`
      })
      .then(function (response) {
        alert('USER REGISTERED');
        window.location.href="login.html";
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

};


function login(event){
  event.preventDefault();
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;

  if(username=='admin@gmail.com' && password=='password')
  {
    window.location.href="admin.html";
  }
  axios.post('http://localhost:3000/api/login',{
    username: `${username}`,
    password:`${password}`
  })
  .then(function(response){
    console.log(response.data);
    if(response.data.message==='Login Successful'){
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('email',response.data.email);
      localStorage.setItem('token',response.data.token);
      window.location.href="chatbot.html";
    }
  })
  .catch(function(error){
    console.log(error)
  })
}

function logout(){
  localStorage.clear();
  window.location.href="index.html";
}

