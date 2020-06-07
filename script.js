const quotes = [
{
	name : 'Gautama Buddha',
	image :'images/gautam.jpg',
	quote : 'All that we are is the result of what we have thought. The mind is everything. What we think we become.'
},

{
	name : 'Jawaharlal Nehru',
	image :'images/nehru.jpg',
	quote : 'Democracy is good. I say this because other systems are worse.'
},
{
	name : 'Salman Rushdie',
	image :'images/Salman-rushdie.jpg',
	quote : 'Prophet Mohammed would have no objection to The Satanic Verses.'
},

{
	name : 'Swami Vivekananda',
	image :'images/swami-vivekananda.jpg',
	quote : 'Arise, Awake and Stop not until the goal is reached.'
},

{
	name : 'Manmohan Singh',
	image :'images/manmohan-singh.jpg',
	quote : 'I am not very good at statistics. I am also a poor thinker.'
},

{
	name : 'Mahatma Gandhi',
	image :'images/mahatma-gandhi.jpg',
	quote : 'You must be the change you want to see in the world.'
},

{
	name : 'Sonia Gandhi',
	image :'images/sonia-gandhi.jpg',
	quote : 'I am an Indian. In fact, I feel like a foreigner when I go abroad.'
},
{
	name : 'George Fernandes',
	image :'images/George-Fernandes.jpg',
	quote : 'A politician should not be written off till he or she is cremated.'
},

{
	name : 'Abdul Kalam',
	image :'images/abdul-kalam.jpg',
	quote : 'To succeed in your mission, you must have single-minded devotion to your goal.'
},

{
	name : 'Mother Teresa',
	image :'images/mother-terresa.jpg',
	quote : 'The biggest problem in the world today is not poverty or disease but the lack of love and charity and the feeling of being unwanted.'
}

];


const quoteBtn =document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
const image = document.querySelector('#image');


quoteBtn.addEventListener('click', displayQuote);


function  displayQuote(){
	let number =Math.floor(Math.random()*quotes.length);
	
	quoteAuthor.innerHTML = quotes[number].name;
	quote.innerHTML = quotes[number].quote;

	  // image.innerHTML= quotes[number].image;
	  // var img = document.createElement('img'); 
	  // img.src = quotes[number].image; 
	  document.getElementById('image').src= quotes[number].image;

}