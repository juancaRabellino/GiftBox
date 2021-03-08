const { Builder, By } = require ("selenium-webdriver")
const chrome = require ("selenium-webdriver/chrome")

const options = new chrome.Options()
const GiftBox = async () => {
    let webDriver = await new Builder().forBrowser("chrome").setChromeOptions(options).build()
    await webDriver.get("http://localhost:3000")
    await webDriver.findElement(By.css("#headerContainer > div.headerUser.centerVerticalColumn > div.abrirRegalo.centerCenterRow > a")).click()
    await webDriver.findElement(By.name("nombre")).sendKeys("Lucio")
}

GiftBox()
