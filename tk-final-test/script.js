// Write all your Javascript here!
let getdata(){
	document.querySelector(".card-text").style.display="block";
}
$.ajax({
	url:`https://techkaro-test.herokuapp.com/api/v1/getdata`
	success function (lang){
		console.log(lang);

		
	}

})