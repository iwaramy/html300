$(document).ready(function(){
  const people = [
    {"image": "img/profile-photo.jpg",
     "name": "Steve Smith",
     "jobTitle": "Project Manager",
     "Company": "Front End Dev Co",
     "Experience": "3 years",
     "School": "UW",
     "Major": "Marketing",
     "Email": "steve@fedc.com",
     "LinkedInUrl": "steve.linkedinprofile.com"},
    {"image": "img/aaronsorkin.jpg",
     "name": "Aaron Katz",
     "jobTitle": "Full Stack Developer",
     "Company": "Web Sites and More",
     "Experience": "5 years",
     "School": "SU",
     "Major": "Computer Science",
     "Email": "aaronNotMyEmail@uw.com",
     "LinkedInUrl": "aaron.linkedinprofile.com"},
    {"image": "img/kyle-hendricks.jpg",
     "name": "Kyle Hendricks",
     "jobTitle": "Starting Pitcher",
     "Company": "Chicago Cubs",
     "Experience": "12 years",
     "School": "USC",
     "Major": "Pitching",
     "Email": "kyleH@cubs.com",
     "LinkedInUrl": "kyle.linkedinprofile.com"},
    {"image": "img/michael-jordan.jpg",
     "name": "Michael Jordan",
     "jobTitle": "Point Guard",
     "Company": "Chicago Buls",
     "Experience": "20 years",
     "School": "UNC",
     "Major": "Trash Talking",
     "Email": "mJordan@bulls.com",
     "LinkedInUrl": "mJordan.linkedinprofile.com"}
   ];

  let peopleHTML = people.map(function(el) {
    return person =
    `<div class="flex-container">
      <section class="photo">
  			<img src="${el.image}"
  					 alt="${el.name}">
  			<h1>${el.name}</h1>
  			<h2><em>${el.jobTitle}</em></h2>
	    </section>
		  <section class="info">
  			<ul>
          <li class="person_name"><strong>Name:</strong> ${el.name}</li>
  				<li class="person_title"><strong>Title:</strong> ${el.jobTitle}</li>
  				<li class="person_company"><strong>Company:</strong> ${el.Company}</li>
  				<li class="person_experience"><strong>Experience:</strong> ${el.Experience}</li>
  				<li class="person_school"><strong>School:</strong> ${el.School}</li>
  				<li class="person_major"><strong>Major:</strong> ${el.Major}</li>
          <li class="person_email"><strong>Email:</strong> ${el.Email}</li>
  				<li class="person_linkedin"><i class="fab fa-linkedin"></i> <a href="#">${el.LinkedInUrl}</a></li>
  			</ul>
		  </section>
     <div>`
   });
   $(".template-hook").append(peopleHTML);
})
