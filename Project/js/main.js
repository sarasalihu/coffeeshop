let navbar = document.querySelector('.navbar');

function myFunction(x) {
	x.classList.toggle("change");
  }
  
document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
	cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
	cartItem.classList.toggle('active');
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
}

window.onscroll = () =>{
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
}
function validateform(){  
	var name=document.myform.name.value;  
	var password=document.myform.password.value;  
	  
	if (name==null || name==""){  
	  alert("Name can't be blank");  
	  return false;  
	}else if(password.length<6){  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	  }  
	}  