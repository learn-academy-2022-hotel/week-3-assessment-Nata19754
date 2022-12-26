# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: 

JSX allows us to write HTML in React and stands for Javascript XML. I would say that one of the syntax differences between HTML and JSX would be that you use fragments to wrap tags such as headers, etc in JSX. Fragments essential allows you to put multiple elments of code into a return. 

Researched answer: 

JSX stands for JavaScript XML. It is a javaScript extension syntax used in React to write code 100 times easier. Now, you're probably curious as to what I mean when I say that it makes it easier. What I mean by this, is that it makes it easier to write and add HTML in React, and over all easier to develop react applications. Something that I did find extremely interesting about JSX, is that it is not mandatory to use. I was also able to learn that JSX allows us to put HTML elements in DOM without using appendChild() or the createElement() method. The main syntax difference between JSX and HTML  would be fragments that are used in the return, that allows for multiple elements to be returned. Below, you can see an example of what JSX looks like in React.

example:

const App = () => {


return (
    <>
    <h1>Annabeles Bakery</h1>
    <h3>Menu</h3>
    </>
)
}
2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: 

Yarn is a package manager. Some files that are modified in a React application when you run the command yarn in your terminal would be package.json and the yarn.lock file.

Researched answer:

Yarn is a package manager for our code that helps to manage project dependencies like NPM. It is a fast, reliable, and secure dependency management tool. Something that I found really interesting was that yarn stores dependencies locally, which avoids the download of these pacakes multiple times. Also, if its required, it can easily be reinstalled without internet because it fetches from the disk when executing yarn.add. Yarn auto generatez a yarn.lock file when you run yarn in your terminal.This helps when you add/upgrade/remove dependencies with the yarn CLI, it will automatically update yarn.lock file. Tje yarn.lock is generated according to the contents of package.json. Something new and actually really interesting that I learned about yarn while doing my research on the topic, is that when you install yarn, it is broken down into 3 steps;

1) Resolution, which is where yarn starts resolving dependencies by making request to the registry and recursively looking up each dependency.

2) Fetching, which is where yarn looks in a global cache directory to see if the package needed has already been downloaded.If it hasnt, yarn fetches the tarball for the package and places it in the globall cache so it can work offline and wont need to download dependences more than once.

3) Linking, in this step, yarn links everything together by copying all the files needed from the global cache into the local node modules directory.

I personally think its incredible how fast this happens, I have installed yarn before, and have seen this steps be listed in the installment process, but little did I know how much was actually  going into this process. I just think its amazing.

3. What is a React component?

Your answer: 

React components are containers of reusable code. They can be stored in separate files in a components folder to keep organized and imported into the application.

Researched answer: 

Components come in 2 types and are independent and reusable bits of code. React components serve pretty much the same purpose as JavaScript function, but they work in isolation and return HTML. The 2 types of components are class components and function components.To elavorate a little more on each of these components, functional components can be easily explained by telling you that they are basically JavaScript functions. Function components is what I have been using and learning in the learning code journey. Class components can be considered to be more complex, this would be because class components can work with each other. Meaning, that with class components, data and information can be passed from one to another. Isnt that incredible?

 I have learned that keeping components in separate files is very useful and keeps everything looking neater, but when keeping components in separate files, you must import the file in your application in order for it to work. This little tip has allowed me to keep good track of where everything is and has made my projects and challenges just look so much nicer.


4. What is the difference between state values and props in React?

Your answer: 

State is a variable that stores data and determines how that data gets rendered and how it behaves. Props on the other hand, allow you to access that data and pass it from one component to the other.

Researched answer: 

The difference between state and props in React, is that state is an entity with some details that can alter during the components lifetime.State is an updated structure that is used to contain, and can modify data or that specific information about the component over time. On the contrary, props (short for properties) allow you to customize your components. It allows you to re-use a component by passing properties into it.

An analogy that has helped me understand this concept better, is that state is the heart of our application. It stores our data and later pumps that information to our components for rendering, giving our app life.Props on the other hand, are the blood, they pass the necessary data to our components. 

5. What is the DOM?

Your answer: 

DOM stands for document object model, it represents the document as nodes and objects. It is what the users see when looking at a page or application.

Researched answer: 

The DOM, which stands for document object model, is a tree-like structure that contains all the elements and its properties of a website as its nodes. It is a structure representstion of HTML in the webpage or web application, so that programms can change the document structure, style, and content. An interesting part about the DOM, is that it is separated into 3 parts;
the Core,HTML, and XML. Below you can see an example of the topic being discussed.

Example: document.getElementbyId('some-id').innerValue= 'updated value';

6. STRETCH: Which is the difference between a div and a span?

Your answer: 

The difference is that div is used to divide parts of a page ( groups bigger chuncks of code) and span is used for smaller chunks of html inside of a line or paragraph.

Researched answer: 

The difference between a div and span, would be that a div is a block element, while a span is an inline element. Div is known as the division tag, it is usually used wrap sections of a document . Span, is a generic inline container for inline elements and content. It should be used to wrap small portions of text, images,etc.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
(OOP)- Proggramming paradigm built around objects or entities. OOP has four pillars that help you write clean object-oriented-code . These are;
Abstraction
Encapsulation
Inheritance
Polymorphism

2. Ruby: 
Programming language that supports multiple programming paradigms. Ruby is designed for front- and back-end web development.

3. Implicit return: 
In Ruby implicit return means that if a return is the last expression in a specific path of execution, there will be  no need for the retun keyword. This is possible because when you use Ruby, it automatically returns the last evaluated expression

4. Ruby blocks:
 Ruby blocks consist of code between curly brackets or a do/end pair and are anonymous Functions whose return value will eventually be applied to that method that it will invoke.

5. Ruby hashes:
 Multiple unique keys and the values assigned to each. Although Ruby hashes are similar to arrays, they are very different in the sense that they have arbitrary objects as indexes.
