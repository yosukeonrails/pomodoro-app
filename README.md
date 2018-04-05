
## Pomodor App TomatoTracker

By [Yosuke Hishinuma](mailto:yosukeonrails@gmail.com)

[yosukeonrails.github.io](https://github.com/yosukeonrails)

## Installations and Instructions

1. Clone or download the file from:
   https://github.com/yosukeonrails/pomodoro-app

   or use the Terminal or Command Line:

   $git clone https://github.com/yosukeonrails/pomodoro-app.git

2. Navigate to the folder with Terminal or Command Line:

   $cd pomodoro-app

3. Make sure to have the latest version of Node.
 
   For Macs install through terminal with:

   $brew install node

   or to upgrade node:

   $brew upgrade node 

   Or for Windows install through the website:
   https://nodejs.org/en/download/

4. Once in the directory, run `npm install` in order to install all dependencies. 
   
5. Run the program with `npm start`. This will start a server on localhost port 3000 and the application!

   Open your browser of choice and navigate to: http://localhost:3000/ and enjoy!

8. Navigate files inside "pomodoro-app" to see further in the code and the comments associated to the most relevant methods.


   ## Technologies and Dependancies 
    
    * React
    * Redux
    * React-Router 4
    * LESS/CSS
    * NODE/EXPRESS
    * Webpack
    * ES6

   ## Problem

    Create a Pomodoro timer and a task list to use for completing work. The pomodoro timer will follow the classic pattern of 4 rounds of 25 minutes with a 3-5 minute break and then after 4 rounds a break of 15-30 minutes. Additionally a task list will also be available for tracking the work that needs to be completed.

    The Application is a single user application and information does not need to be shared with anyone else.
    The Developer has full discretion on the user experience and interface.
    The code must be checked in to a public Github repository.


   ## The Process

   The first step in creating this application was to create a mock wireframe which consisted mostly of scribbles on paper. After much brainstorming and putting all my creativity on paper, the challenge now was to bring the imagination into code. White-boarded solutions to all the functionality and one by one developed the components that make up the TomatoTracker app. 

   ## How it works?

   See src folder in the main directory for reference.

   ### `TimeTracker`

    The `TimeTracker` is the star of the show in this application. It is the round clock on the left center of the app. It has a button to `start` the Pomodoro timer and also a `reset` button to start over without having to refresh the page. The `start` button in turns becomes a `pause` button after the timer starts.
    At the beginning, you might notice the circle is light-blue but as time passes, you might also notice that it gradually turns black. That is the timer, way to show how much time is left, as well as the minutes and seconds shown inside the circle!

   ## `timer-message`

    As you start the timer, you might notice a very quick message pop up. This is the application's way of letting you know when the time is up or when the next session starts. If the break is over for example, it will show "It's crunch time!" as to say it's time to go back to work. Sad face... Also when it is a time for a break, it will say "It's break time!" to let you know that it's time for making another pot of coffee or to take a quick walk. 
    

   ### `TodoApp`

    The `TodoApp` app is located on the right of the application and it simply offers the basic todo application functuonality. Input a description for a todo and just press `Enter` or click `Add` to add it to the list. You can also check the todo, when you are done with a task just by clicking once on the todo. This will cross the todo and put it in the bottom of the list. The trash can icon is a button in case you would like to remove a todo from the list.

   ## Bonuses!

   #### Besides the implementation of the main requirements, some additional functionalities were added to the application.

   ### `TomatoTracker`

    The `TomatoTracker` sits right on top of the TimeTracker's progress tag. It consists of 4 gray tomatoes in a rectangular box. You might not notice right away, but as you start completing those pomodoros, the gray tomato suddenly will turn red, showing how many pomodoros you have completed! How convenient! 


   



