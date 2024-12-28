const { firefox, webkit } = require("playwright");

async function screenshots(params) {
    const broswer = await firefox.launch();
    const context = await broswer.newContext();
    const page = await context.newPage();

    await page.goto("https://devfaizan.github.io/about.html");
    await page.setViewportSize({ width: 400, height: 640 });
    await page.screenshot({ path: `mobile-${new Date().getTime()}.png`, fullPage: true });
    await broswer.close();
}

screenshots();