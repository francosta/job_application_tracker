# Job Application Tracker Overview

This is a Job Application Tracker. It consists of a dashboard where a user can create and track its job applications, along with specific tasks for each application. The user can also write and store cover letters for specific applications, through the built-in cover letter bank.
Additionally, the app is connected to the Reed job API which lists current job openings for the user's chosen city and industry.

# Motivation

I have built this app as the final project for my Javascript module of the Flatiron School Software Engineering bootcamp. The brief for the project was a single page application, using vanilla Javascript as the frontend and a Ruby on Rails backend.
Having gone through the process of searching and applying for jobs, I have found that a job application tracker dashboard would be very useful.

# Server

The backend was built using Ruby on Rails with an SQL database, using an object-oriented programming approach.
The app has 4 models: User, Application, Task and Cover Letter.

A user has many applications. An application has many tasks and has many cover letters.

There are API endpoints for all models. The app uses mainly the User endpoint.
Authentication is done through a Rails sessions controller, using bcrypt for encyption.

# Client

The client-side of the application is built in vanilla Javascript. I have used a template for a dashboard by Creative Tim, which I have adapted (Material Dashboard - https://demos.creative-tim.com/material-dashboard/examples/dashboard.html).

I have added Bootstrap on top of the template. Many of the elements that support the single-page requirement of the app are taken from Bootstrap, e.g., modals for editing profile, adding applications or searching for jobs.

# Screenshots and Demo



![LoginPage](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.27.22.png)
Login Page

![Dashboard](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.27.31.png)
Dashboard

![UserProfile](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.27.59.png)
User Profile

![CoverLetterBank](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.28.28.png)
Cover Letter Bank

![JobFinder](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.28.36.png)
Job Finder Tool

# Initialization

1. Clone and open the project in a code editor.
2. Go into the `tracker-backend` by running `cd tracker-backend`
3. Run `rails db:migrate` to create the database.
4. Run `rails db:seed` to create the seed data.
5. Go to the `tracker-frontend` directory.
6. Run `open index.html`
7. Login with the test user, using the following credentials: Email: "user@user.com"; Password: "password".
