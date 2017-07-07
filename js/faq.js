var content_array = [
  {"question":"<p>What is  Harit Kranti?</p>","answer":"<p>1.	As the name reflects the vrinda(holy basils) Plant, Van-Forest. Vrindavan  is sacred forest where Priya and priyatam  perform raas vihaar leela ,around 500 years ago the place was densely covered with forest,</p><p>2.	vrindavan is known for greenery Yamuna and raas vihar leela of Radha Krishna</p><p>3.	you find something more here  in the woods of vrindavan than in the books ..the woods and the trees are the main roots and soul of this divine love land  so to protect the ancient look of vrindavan we have intitated the step of green revolution.</p>"},
  {"question":"<p>Why there is a need?</p>","answer":"<p>1.	If we look around around vrindavan, vrindavan has been the commercial market for various tourist, builders across the world in past decade, heavy population, commercial complex and high rising buildings  has been emerging at very fast pace.</p><p>2.	All this commercial developments has created lots of pollution in vrindavan and Yamuna </p><p>3.	It  has also badly impacted the greenery of  this sacred Vana.</p><p>4.	The trees (vana) is the soul part of vrindavan ..they are the deariest  to priya priyatam and hence dear to their loved ones (bhakts ) also there presence creates a mood of divine peace and energy in your soul thus help the loved ones(bhakts) to stay enchanted in the leela of radha Krishna</p><p>6.	They  also act as a source of shelter and food for many birds and animals here </p>"},
  {"question":"<p>Our aim (mission)?</p>","answer":"<p>1.	For our selfish greeds in the name of needs we are destroying the roots of vrindavan </p><p>2.	Today what we are doing to the forest is the mirror reflection of what we are doing to ourselves and one another </p><p>3.	The image that creates in our mind when we only hear the word “vrindavan “ can be a reality and not fantasy with a true positive initiative </p><p>4.	The main aim is not only protect but also revive the natural mood of vrindavan</p><p>5.	Revival of the traditions of vrindavan like samaj gayan , raas leela ,sanjhi and many more </p><p>6.	Revival of the ancient look of vrindavan with dense forest and trees around </p><p>7.	Creating awareness regarding culture and traditions that used to be an identity of vrindavan few years before</p>"},
  {"question":"<p>What we are doing?</p>","answer":"<p>1.	The Goswami family(Shri Hit Mohit Maral Goswami) has taken initiative to revive the ancient look of the divya raas stathli of priya pritam by planting 1.25 lacs trees(more and more trees) in and around Vrindavan. The name Vrindavan itself reveals that this was and should remain a forest area, filled with kunjas and nikunjas. Vrindavan today is undergoing rapid urbanization and construction due to which it is losing its natural form, so we feel that it is our urgent duty to promote and protect this concept of Vrindavan.”</p>"},
  {"question":"<p>How one  can participate?","answer":"<p>1.	You  can also be part of this Harit kranti and  plant Trees  or  can gift a tree to any of of your loved one in Vrindavan, </p><p>2.	You just need to contact the goswami  family of RadhaVallabh Mandir.and contribute an amount of 2500 that is initiated for the overall plantation and maintainence  process to take place </p><p>3.	For further guidance and informations  Contact details are also available in our website </p><p>4.	your plant will be looked after for 3 years from the date of plantation the trees, dedicated staff will look after and monitor the growth of plants</p><p>5.	daily check and supply of water , development of protective fences around the plant with the users name , changing of the fence or plant in case of any damage due to natural or accidental circumstances ,</p><p>6.	and monthly update of your plants status or condition on our website all are included in your contribution  towards this initiative to grow more </p><p>7.	For all this sewa of your plant there is a very small contriburtion of Rs 2500 and can be offered to the goswami family of RadhaVallabh Mandir.</p>"},
  {"question":"<p>Why parikrama marg?</p>","answer":"<p>The project of harit kranti has been started by growing trees on both the sides of the parikrama marg of Vrindavan </p><p>Trees are being planted on the parikrama marg  for providing  a cool shady environment to the devotees who walk along the lane of the parikrama marg </p><p>Trees help to reduce the pollution and noise effect by its absorption tendency thus decrease the nuisance caused by vehicles on the parikrama road</p><p>They will  also act as a source of food and shelter for the birds around ,monkeys ,squirrels etc, cutting down of the trees for the sake of construction has made them homeless thus you can find them usually on the streets of vrindavan in search of food and shelter</p><p>The parikrama marg once used to be filled with flowering and fruiting trees  that provided pleasure not only to the devotees but also to the animals and birds living here in vrindavan</p>"},
  {"question":"<p>Highlights</p>","answer":"<p>1.	People across the world can participated in this Harit kranti and keep a check on growth and maintenance of their plants </p><p>2.	one can visit and see trees growing  around the parikrama marg of Vrindavan </p><p>3.	if visiting is not possible one can visit our online website to keep a monitor on our work and their plants</p><p>4.	Monthly update of the tree planted by the user is provided online which makes the monitoring work convenient</p>"}
];
$(document).ready(function(){
  //logo();
  createaboutCarousel();
});
function createaboutCarousel(){
	var arrayLength = content_array.length;
	for(index in content_array){
		var temp = '<div class="quo">'+content_array[index].question+'</div><div class="ans">'+content_array[index].answer+'</div>';
		$("#accordion").append(temp);
	}
	var acc = $("#accordion .quo");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc.on("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
}