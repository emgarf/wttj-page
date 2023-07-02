# Welcome to the WTTJ test project

## Getting Started

You must use `yarn install` to setup the project

Then, run the development server:

```bash
yarn dev
```

run `yarn test` to launch all the tests of the project

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Actions possible on the project

- Search for a specific job
- Sort the jobs by department (by default), by office or by nothing
- Filter the jobs by type of contracts (Full-time, internship, temporary, other)
- Click on the title of each job to see more information inside a modal
- Click on the "See more" button to also see more information inside a modal
- Click on the Apply button to get redirected to another page

## Other informations

The site has a live version accessible here: https://wttj-page.netlify.app/

Here are some screenshots of the app running:

![alt text](https://github.com/emgarf/wttj-page/assets/5755673/ded9d260-e313-4824-acda-f7be48cb8e24)
![alt text](https://github.com/emgarf/wttj-page/assets/5755673/cfb726e1-4620-44ad-9c95-75347a684553)
![alt text](https://github.com/emgarf/wttj-page/assets/5755673/608045e6-a2e2-488a-bfb3-82a7a5e4fba8)

## Troubleshooting

There is an issue installing the project with `npm install` caused by what seems to be peer-dependancies
You can bypass it by doing `npm install --legacy-peer-deps` but I advise to use `yarn install` as specified in the "Getting Started" section

## What's next

What can possibly be improved:

- Adding a Dark/Light theme
- Change the lazyLoading to have a skeletton loading
- Add a Pagination or a loading on scroll
- Add more filters
- Better search (handle typos)
