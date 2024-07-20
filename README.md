### `npm install`

Grabs all of your dependancies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Notes!

Thank you for taking the time to look at this project. It was a fun puzzle and it really sucked me in! I hope you find the code simple to read and understand.

#### State Management 

State is managed between components. It works well, but by the time I got to the thrid component deep, I realized it's probably just better to start with Redux. I'm not a fan of prop drilling.

#### Architecture and Component Design

I tried to separate concerns as much as I could, through clean component design. Sometimes you can overdo it though, and I tried not to do that. For example, the items in the sidebar component, `SidePanel`, are just rendered inline. They could have been components, but for this purpose that would be overkill.

On the other hand I made sure to break the editor out into its own component. The editor could essentially be another application in itself. I know this because I've built them so many times :D. It would have been fun to implement markdown in it! That's also another reason I chose to go with a `contenteditable` div over an `input` -- the options it gives you in rendering the text.

I used Sass for styles because of its compact nature. I'm _just_ at that point now, where I should start breaking main.scss apart into smaller files, preferably along components, to keep things neater.

#### For Serious Nerds Only

I wanted to show what it would look like if I was actually hitting real api endpoints, and then processing the data for the application. I used [Mock Service Worker](https://mswjs.io/) to help me do this. It runs a separate server inside a worker in the browser, so we can simulate api endpoints. The rest of the application doesn't know they are fake, it's making _real http calls_ to it.

This is AMAZING for testing. Rather than stressing about mocking out every little api call, you can use mock service worker, and then it makes it MUCH less tedious to write unit tests, because you don't need to change as much in your actual application code to write your tests.
