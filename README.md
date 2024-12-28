# Cool playwright screenshots and scrapeing

## Tests
in test-example > example-spec.js we goto a webpage and expects that webpage to have heading with specified text to be visiable
then npx playwright test will test above code in 3 headless browser {chromium,firefox,webkit}. to view report npx playwright show-report

## screenshots 
in root created a script file, 
  - first it imports headless browsers (i chose firfox and webkit),
  - then opens browser instance
  - gives context
  - opens new page
  - goto url
  - then set view port
  - then takes screenshot with path (changed my path so it wont get replaced everytime), to take full screenshot use fullpage: true,
  - closes browser


more on https://playwright.dev/docs/intro
