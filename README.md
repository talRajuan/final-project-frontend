
YogaZone  

YogaZone is a website that allowes yoga teachers to publish their classes and allowes users to sign up for a class of their choise. 

The website is built with React for the frontend and nodeJS for the backend with the request go throw REST API Routes.

The website has a Home page with some "demo" content at the moment but the idear is to have some articles and some cards that contains products in them. 

The About page describe the idear behind the website so that teachers, students and local stors can understand what is the porpes of it. 

The Register page allowes "students" sign up as users and will direct them streight throw the login page and in to the home page automatically.
*for a "student" user the navbar will show thier email, as well as Home page, About page, sign up for a class page - were they are able to see all the lessons published by all the teacher in the site, 
they can click on the "more info" button to get a popp that shows more information abaout the specific card and they can add lessons to thier shopping cart and see them in the cart page, they can also remove cards from thier cart page if they want by clicking the delete button.

The register as a teacher page allowes a person to register to the site as a teacher which gives them the option of adding lessons cards that later can be seen in the "sign up for a class" page. 
when a person signes up as a teacher he\she is directed to a "create lesson card" page where they fill in a form that contains name, description, adress of the class, phone number, image if they want and more information.

by clicking on submit the teacher is then directed to a dashboard page were they can view all of thier added cards, there they have the option to click on "Edit" which will display a popup that they can use to adit the spacific card and by clicking the "Delete" button they will remove the spacific card from their dashboard (also from the database and there for from the classes store page). 

When a user signes in, the navbar turnes from red to green to indicate that they are logged in. 

The token is saved in the localStorage in order to prevent the browser from "throwing" the user out in case of a refresh.  

The cards that are being made are saved in the MongoDB database in a collection called cards and are asigned with an id that relates them to the user which created them. The cards that are saved to the cart are saved in the users collection indside of an array in the spacific user who saved the card to his cart. The only thing that is being saved in this array is the id of the card and not the intire card info. it is then agregated in to the cart page and showes the whole card. 

In the cart page the user can press the "delete" button in order to remove the spacific card from the cart.

