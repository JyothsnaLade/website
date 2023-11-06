const { test, expect } = require('@playwright/test');

const websiteURL = 'http://127.0.0.1:3000/index.html'; 
const aboutURL = 'http://127.0.0.1:3000/about.html'// Replace with your actual testing URL
const projectURL = 'http://127.0.0.1:3000/projects.html'
const skillsURL = 'http://127.0.0.1:3000/skills.html'
const ExperienceURL = 'http://127.0.0.1:3000/experience.html'


test('Index Page Tests', async ({ page }) => {
  await page.goto(websiteURL);

  // Test the presence of elements on the index page
  const pageTitle = await page.title();
  const navbar = await page.$('nav');
  const menuIcon = await page.$('.menu-icon');
  const footer = await page.$('.footer');

  // Assertions
   // Replace with the expected page title
  expect(navbar).not.toBeNull();
  expect(menuIcon).not.toBeNull();
  expect(footer).not.toBeNull();

  // You can add more tests as needed, checking other elements, interactions, etc.
});
test('About Page Tests', async ({ page }) => {
  await page.goto(aboutURL);

  // Test the presence of elements on the about page
  const pageTitle = await page.title();
  const aboutContent = await page.$('.about-wrapper');

  // Assertions
  expect(pageTitle).toBe(""); // Replace 'About' with the expected page title
  expect(aboutContent).not.toBeNull();

  // You can add more tests as needed, checking other elements, interactions, etc.
});
// Add more tests as needed for different functionalities or UI elements on the homepage
test('Project Page Tests', async ({ page }) => {
  await page.goto(projectURL);

  // Test the presence of elements on the projects page
  const pageTitle = await page.title();
  const projectHeaders = await page.$$eval('.projects h3', headers => headers.map(header => header.textContent));
  const projectDescriptions = await page.$$eval('.projects p', descriptions => descriptions.map(description => description.textContent));
  const projectLinks = await page.$$eval('.projects a.btn', links => links.map(link => link.href));


  // Check if there are at least 4 projects displayed on the page
  expect(projectHeaders.length).toBeGreaterThanOrEqual(4);
});
test('Skills Page Tests', async ({ page }) => {
  await page.goto(skillsURL);

  // Test the presence of elements on the skills page
  const pageTitle = await page.title();
  const skillBoxes = await page.$$('.skill-box');
  const languageIcons = await page.$$eval('.skill-set i', icons => icons.map(icon => icon.className));
  const technologyIcons = await page.$$eval('.skill-set img', images => images.map(image => image.src));

  // Assertions
  expect(pageTitle).toBe(""); // Replace 'Skills' with the expected page title
  expect(skillBoxes.length).toBe(4); // Assuming there are 4 skill categories on the page
  expect(languageIcons).toContain('fab fa-python fa-2x skill-icon');


  // You can add more specific assertions based on the content of your skills.html page
  // You can add more tests as needed, checking other elements, interactions, etc.
});
test('Experience Page Tests', async ({ page }) => {
  await page.goto(ExperienceURL);

  // Test the presence of elements on the experience page
  const pageTitle = await page.title();
  const experienceTitle = await page.$('h1');
  const companyNames = await page.$$eval('.exp', companies => companies.map(company => company.textContent));
  const jobTitles = await page.$$eval('h2', titles => titles.map(title => title.textContent));
  const jobDescriptions = await page.$$eval('ul li', descriptions => descriptions.map(description => description.textContent));

  expect(pageTitle).toBe(""); // Replace with the expected page title
  expect(experienceTitle).not.toBeNull();
  expect(jobTitles.length).toBeGreaterThanOrEqual(1); // Assuming there is at least one job title
  expect(jobDescriptions.length).toBeGreaterThanOrEqual(1); // Assuming there is at least one job description
});