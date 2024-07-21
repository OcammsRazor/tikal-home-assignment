# Tikal Code Challenge

It's time for me to show what i got.

Hope you'll enjoy it :D

![show-me-what-u-got](https://i1.sndcdn.com/artworks-000296902254-4ez6z7-t200x200.jpg)

## Index

- [technologies](###technologies)
- [how to run](###how-to-run)
- [project structure](###project-structure)
- [notes](###notes)

### Technologies

in this project i used the following technologies:

- vite (create-react-app alternative)
- yarn
- react
- axios
- sass (scss modules)

### How To Run

<ins>installation</ins>

1. clone this project
2. run `yarn` in the root folder to install dependencies

<ins>how to run</ins>

to run local server you can use the following command: `yarn dev`

the app should be running on the followig url: `http:/localhost:4173/`

<ins>how to build</ins>

to build run the following command: `yarn build`

your build output should be located at `./dist`

### Project Structure

in each component you'll find the following files, this is the meaning behind the formats:

- `*.hooks.tsx` - hooks for the component
- `*.methods.ts` - helper methods (like search, manipulate data etc...)
- `*.module.scss` - scss module to provide styles for the component
- `*.texts.json` - json file to provide texts
- `*.types.ts` - types for the following excercise/ component
- `PascalCase.tsx` - the component itself

<ins>folder structure</ins>

- `./src/api-clients` - my axios client (and more clients if it was a bigger project)

- `./components` - basically, excercises and menu. each excercise has it's own components inside it's folder since i did not find any scenario to share components here.

### Notes

that was a really cool and fun project to do at home.
i didn't know about this api and it was really fun to challenge myself with a fun context.

in the middle of the development i found out that they export a rest client which is fully typed.
although it would ease my development, i have decided to stick with axios since requirements asked not to use any api wrapper.
this also provided an insight about how i build api-clients.

<ins>what i would add if i had more time</ins>

1. tests
2. paths, most likely for common folders like `api-clients`
3. loaders
