const content = `
# Title Test App

## Intro
I started to build this website out of curiosity. In the beginning I did not know much about web developement but
was curious how websites are created. Although its absolute overkill to build a small website using 
frontend libraries, webservers and deploy them in the cloud, it is perfect for learning.
I try to give an idea about what is important when starting with web developement and what were my
key take aways from this project.

### Tech Stack

    - Frontend: React
    - Server: Express / Nodes.js
    - Api: Flask (Python)
    - Hosting: Azure App-Service

There are loads of other Frameworks and libraries out there and even more blog posts about pros and cons.
At some point I had to decide and I am still happy with my choice. 

### Idea

I wanted to build a developer website that gives me the oportunity to present my projects.
To make the page a little more interesting I added a FIFA Search which queries the API I built with Flask.
This way visitors can search FIFA datasets to find the most promissing players.

### Tipps

    - good understanding of JavaScript and React
        - Good starting point is codecademy
        - React documentation is super helpful
    - read about project structure to extend easily in the future
        - start small and refactor regularly while expanding
    - use middleware in express to secure your website, the documentation holds all the info
    - use docker and github actions for CI/CD
        - put the server, api and proxy in docker containers to easily deploy them
        - automatically build and deploy website after changes

### Links
[codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet)
[react documentation](https://reactjs.org/docs/thinking-in-react.html)
`;

const summary = `
    I started to build this website out of curiosity. In the beginning I did not know much about web developement but
    was curious how websites are created. Although its absolute overkill to build a small website using 
    frontend libraries, webservers and deploy them in the cloud it is perfect for learning.
    I try to give an idea about what is important when starting with web developement and what were my
    key take aways from this project.
`;

const title = `How to Build a Website`;

const webapp = {
    title: title,
    summary: summary,
    content: content,
};

export { webapp };
