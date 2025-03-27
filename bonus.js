//TC4: Verify menu navigation links 
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function userInteractionTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://su-p.undertone.com/125173');
        
        await driver.findElement(By.xpath("//span[@automation-id='demoCreativeID']"));
        await driver.sleep(3000);
        
        console.log("The Creative Id has been located successfully");
        await driver.sleep(5000); 

    } catch (error) {
        console.error("Creative Id Test Failed:", error);
    } finally {
        await driver.quit();
    }
})();
