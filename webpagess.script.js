const { firefox, webkit } = require("playwright");

async function pageAndBrowser() {
    const broswer = await firefox.launch();
    const context = await broswer.newContext();
    const page = await context.newPage();
    return { broswer, page };

}

async function screenshotWeb() {
    const { broswer, page } = await pageAndBrowser();
    await page.goto("https://devfaizan.github.io/about.html");
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({ path: `Web-1080-${new Date().getTime()}.png`, fullPage: true });
    await broswer.close();
}
async function screenshotMobile() {
    const { broswer, page } = await pageAndBrowser();
    await page.goto("https://devfaizan.github.io/about.html");
    await page.setViewportSize({ width: 412, height: 915 });
    await page.screenshot({ path: `Mobile-${new Date().getTime()}.png`, fullPage: true });
    await broswer.close();
}

screenshotWeb();
screenshotMobile();