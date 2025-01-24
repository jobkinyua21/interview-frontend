About the Project :
This project integrates OAuth authentication into a web application Pike Store. The application allow users to sign in using their SSO (single sign on) accounts.
It also has the creation of pdf output using HTML and CSS. The application in responsive across multiple devices. For state management the application uses Pinia to store the logged in user data.

Technologies Used :
Frontend: Vue.js, Tailwind CSS, Html,p 

1.landing page : 
This is the first page the user will see when they access the website and they will have a login button to sign in to the system
 ![Screenshot from 2025-01-24 10-12-51](https://github.com/user-attachments/assets/d6c00a72-b46f-4f86-8a2a-250f20e3c6d1)

2.Authorization :
On clicking the login button, user is then redirected to https://test.sso.pesaflow.com/en/ where the process of authentication,token handling and fetch of the authorized user information happens.

3. Home page :
Upon successfull authentication the user gets to the home page ,where there is a card showing the logged in user names. The page also shows a list of some of the products the customer can browse  
![Screenshot from 2025-01-24 10-28-27](https://github.com/user-attachments/assets/2d9d263d-646e-47e0-953d-b638d84bdc9b)


4. Logout button :
The logout button functions by clearing the user data that was stored in the pinia store and navigating the user out of the application.

5. PDF Output :
There a receipt.html file which has a design of a sample pdf otput created using html and css
![Screenshot from 2025-01-24 10-30-40](https://github.com/user-attachments/assets/2c38cbc5-4f7d-44bd-8750-2f9633fe4aab)
![Screenshot from 2025-01-24 10-30-40](https://github.com/user-attachments/assets/2b0f02ad-ca80-4a98-a1fc-5c7819ab56e3)


Installation :
Follow these steps to set up the project locally:

Prerequisites :
Ensure you have Node.js and npm installed.

Clone the repository:
git clone https://github.com/your-username/your-project-name.git
cd your-project-name

