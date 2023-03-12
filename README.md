# Repository for hosting the website of **status_code_0**

## Prerequisites
* npm 

## How to run the website on your local machine

* fork all the **branches** of the repository
* Clone your fork using the command
  * ```git clone https://github.com/<username>/Hackathon-website-2023.git```
  * replace the `<username>` with your github username
* `cd hackathon-website-2023` 
* `npm install` 
* `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
  * You can write `css` in either ***vanilla/normal*** or using ***tailwindcss***
  * to write ***vanilla/normal*** css, after running the command in a terminal, leave the terminal running and write the css in `src/input.css`
    * tailwind will compile your css into the `dist/output.css` which we be later shipped to `deploy` branch for deployment
* For ***tailwind*** simply follow the normal tailwind procedure  listed [here](https://tailwindcss.com/docs/installation) 
