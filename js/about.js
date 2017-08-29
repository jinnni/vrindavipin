var content_array = [
  {"description":"<p>This  organization Plantation At Vrindavan (vrindavipin.org) under the guiding force of The Goswami family(Shri Hit Mohit Maral Goswami) has been developed to plant trees throughout the town.(Vrindavan)</p><p>The trees, hills, peacocks, cows and Yamuna resemble the Vraja bhumi. They should be protected at any cost.</p><p>The name Vrindavan itself reveals that this was and should remain a forest area, filled with kunjas and nikunjas.</p>"},
  {"description":"<p>Vrindavan today is undergoing rapid urbanization and construction due to which it is losing its natural form, the essence of this land of love is hiding away  in todays modern world of technology</p><p>The soul of Vrindavan lies in its vana ,the kunj and nikunj</p><p>Not only in religious terms but also in scientific term a tree flourishes and grows healthy only  if it remains attached to its roots.., deprived from the roots the fall is ensured</p><p>The roots of this Vrindavan lies in its vana you find something more here in the woods than in the books</p>"},
  {"description":"<p>, so we feel that it is our urgent duty to promote and protect this concept of Vrindavan</p><p>OUR EFFORTS are for the Plantation of more and  more  trees with the best of the techniques for their  protection ,maintainance and growth </p><p>The project has begun with plantation of trees along the parikrama marg every plant is looked after with the help of the supporting staff</p><p>“We want to bring back the greenery, which will not only beautify the environment, but will give habitat to the bird species that have been avoiding the town ,such as peacocks, parrots and cuckoos. Our motto is ‘Increase the green and save the environment!’</p>"},
  {"description":"<p>This is the vision of Vrindavan we believe shri Harivansh Mahaprabhuji would have approved of.”</p><p>Shri HIT Harivansh Mahaprabhu is the founder of Radhavallabh Sampradaya. Born in Baad Graam on 11th Day of Boishakh.</p><p>He is the incarnation of Lord Krishna's Flute. A follower of Prema Bhakti and devotee of Radharani the Supreme power.</p><p> His preaching of Radha Krishna being Ek Pran Dou Deh -One Soul Two Bodies; has been the valuable asset of this Sampradaya. The unique Yugal Darshan of Radhavallabh Temple are based on the same preaching.</p>"},
  {"description":"<p>Shri Hit Harivansh Ji Mahaprabhu is considered as the <b>Avatar</b> of Lord Krishna ' s Flute. Shri Radhavallabh ji Temple is one of the most famous temples of Thakur of Vrindavan including Sri Bankey Bihari Ji, Shri Govind Dev ji, Shri Madan Mohan Ji, Shri Gopinath Ji, Shri Radha Raman Ji and Shri Radha Damodar Ji Shri Hit Harivansh Chandra, came to Vrindavan in 1506 with Shri Radhavallabh Lalji, establishing the deity’s seva on the 13th day of the bright fortnight in Karttik,</p>"},
  {"description":"<p>This took place at Madan Tera (Varaha Ghat) in old Vrindavan. At the time there was no temple of stone and brick, mahaprabhu throughout his lifetime lived and continued his seva in the natural environment of Vrindavan. </p><p>He always cherished ,glorified the love of Vrindavan  and remained enchanted  with the woods of Vrindavan</p><p>He drank in with his eyes the essence of bliss and gave it to every desirous, dedicated person </p><p>After  Harivansh mahaprabhu’s disappearance in 1545, is when the first temple was constructed in 1585, </p>"},
  {"description":"<p>His  son shri Vana Chandra continued the tradition, as have their successors.</p><p>Radha Vallabh Ji has since become one of the most popular temples in Vrindavan.</p><p>“Harivansh Mahaprabhu was a lover of nature and he would no doubt have liked to see Vrindavan preserved in its original form, as a place of natural forest and wildlife.</p><p>Vrindavan, now the onus is on the saints and devotees of Vrindavan to revive the Vraja forests.</p>"},
  {"description":"<p>They should immediately begin the preaching on protecting the forests and wildlife of Vraja. They should ask their followers to plant the maximum trees in Vraja, which is of a great virtue.</p><p>“We hope that all those who have faith in Sri Radha Vallabh Lal will help us to achieve these goals, serving with body and mind to make them possible.</p><p class='highlight'>JAI JAI RADHAVALLABH SHREE HARIVANSH </p><p class='highlight'>JAI JAI SHREE VRINDAVAN SHREE VANCHANDRA …</p>"}
];
$(document).ready(function(){
  //logo();
  createaboutCarousel();
});
function createaboutCarousel(){
	var arrayLength = content_array.length;
	for(index in content_array){
		var temp = '<div class="owl-item"><p>'+content_array[index].description+'</p></div>';
		$(".about_wrapper .owl-carousel").append(temp);
	}
	$(".owl-carousel").owlCarousel({
		loop:false,
		nav:true,
		dots:true,
		items:1,
		margin:30,
		responsive:{
			0:{
				items:1
			}
		}
	});
	$(".about_wrapper .owl-carousel").height($(".owl-stage-outer").height());
}
