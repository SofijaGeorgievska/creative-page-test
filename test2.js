//TC4: Verify menu navigation links 
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function userInteractionTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://su-p.undertone.com/125173');
        await driver.sleep(100000); 
        
         // Click the X icon on the Ad to close it
         await driver.findElement(By.xpath("//div[@id='close_125173_0_0']")).click();
         await driver.sleep(2000);
              
        
        // Click on navbar menu items
        let navItems = ['Home', 'About', 'Work', 'Contact'];
        for (let item of navItems) {
            let link = await driver.wait(
                until.elementLocated(By.xpath(`//li[contains(text(), '${item}')]`)), 
                5000
            );
            await link.click();
            await driver.sleep(1000);
        }  

        console.log("All menu item links are redirecting appropriately");

    } catch (error) {
        console.error("Menu Items Navigation Test Failed:", error);
    } finally {
        await driver.quit();
    }
})();
