# Zodifac Report 

# Introduction 
What are you building? 
- A fun Zodiac App called Zodifac! We want everyone to find out their future
Why are you building it? 
- It's something different that we thought would be fun for the user

# Project scope 
What are you not building? 
- We didn't make a game as suggested in the criteria but we tried to add interactivity
How did you decide what features were important?
- We decided it was important to get as much data for the user as we could, as technically it isn't a game!

# Project plan 
- We split the tasks by having a project board, and using checkboxes to tick off tasks as they were done
- We started the first day by doing the file setup and initial components together and the second day,
  we were physically working in the same place so we all worked on separate tasks and checked in with each other regularly.

# Project learnings 
We worked together well and stuck to our chosen roles also, but Quality Assurance did get neglected

# Implementation/Build 
We worked from the React Fetch workshop to fetch our data from the Horoscope APi at first, but refactored this to tailor it to
fetch many different pieces of data from the JSON response object.

# What interesting technical problems did you have to solve?
- Remembering to add API keys to the Netlify settings and keeping the .env file secret from Github
- We were using Vite to run our server to see our React App locally, and we realised that we needed to look at the Vite Docs to import our API keys

# Test 
How did you verify your project worked correctly?
- We used console.logs() to check our code work correctly, we neglected Github Actions and any React Testing Libraries such as Jest

# Deploy 
Where/how did you deploy your application?
- Netlify

# What problems did you encounter during deployment?
- This was tricky adjusting to a new web hosting service, as the files need to be in the right pathway to deploy
