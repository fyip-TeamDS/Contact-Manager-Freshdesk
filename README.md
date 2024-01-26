# Contact Manager for FreskDesk
This application supports **only** the hard-deletion of **inactive** contacts in FreshDesk Contacts. 
This application was not built Responsive.

## Technologies Used
* HTML
* CSS
* Javascript
* Freshdesk API
<hr>

## Rundown of application capabilities
The frontend shows four buttons where a function gets executed:
##### Contacts + No Company + No Job title
This function filters for **inactive** contacts where company_id and job_title is null.
##### Contacts + Company
This function filters for **inactive** contacts where there is a value in company_id but job_title is null.
##### Contacts + Job Title
This function filters for **inactive** contacts where company_id is null but there is a value in job_title.
##### Delete Selected
This function **hard** deletes any contact that has been selected. All deletions executed by this function cannot be restored.
##### Multi Select
It is possible to select everything in the table by checking the SELECT ALL box.
<hr>

## How to use this source code 
You will need an IDE for this, this tutorial uses Visual Studio Code, add the extension Live Server.
Download or clone the repository to your computer. 
Open the folder in your IDE.
In index.js, fill in the values for the variables fddomain and apiKey.
The values go between the open inverted commas ' '.
<img width="744" alt="Screenshot 2024-01-26 at 09 55 53" src="https://github.com/fyip-TeamDS/Contact-Manager-Freshdesk/assets/157478176/f484805f-3b67-4a6a-b0f0-038af90a7fe5">

##### Where to find the domain?
In the Freskdesk url, grab this entire part. Below is an example of what the url would look like, 'your domain' is a just a placeholder.
| https://yourdomain.freshdesk.com/

##### Where to find the API key?
After you are logged into Freshdesk, go to profile settings by clicking the rightmost button that shows your initials. 
![Screenshot 2024-01-26 at 09 54 03](https://github.com/fyip-TeamDS/Contact-Manager-Freshdesk/assets/157478176/2162d44b-d8a3-488d-81d8-664e9e38e989)

##### Running the Application
You can run Live Server by right clicking on index.html and then clicking Open with Live Server
Or 
You can click Go Live at the bottom of the IDE.
<img width="1429" alt="Screenshot 2024-01-26 at 10 01 48" src="https://github.com/fyip-TeamDS/Contact-Manager-Freshdesk/assets/157478176/6d9c3b7b-a9ad-4c95-ad5d-43815dbafb3e">
