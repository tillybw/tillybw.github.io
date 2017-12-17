function askQuestions(){
	//console.log('test');

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName
	console.log(fullName);

	var age = prompt('How old are you?');

	age = parseInt(age);
	console.log('You are ' + age + ' years old');

	if (age>=18){
		//console.log('You are and adult');
		//you\'re - this is called escaping allowing you to abbreviate words
		console.log('You\'re and adult');
	} else if (age>=13){
			console.log('you are a teenager');
	} else{
		console.log('You are a child');
	}

	//if the user's first name is 'General' and their last name is NOT 'Assembly', then greet the general! (hint: use console.log)//

	if (firstName. toLowerCase()==='general' && lastName.toLowerCase() !=='assembly'){
		console.log('Hello General!');
	}
}

//$ equaal to JQUERY
 
//when the page has loaded - listening out for an event
$(function () {
	//when the user clicks on the image, ask questions
	$('img').on('click', askQuestions);

	//when the user clicks an h3 - event
	$('h3').on('click', function() {
		//slideToggle the next element - event
		$(this).next().slideToggle(350);

	});

});