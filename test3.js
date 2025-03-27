//TC15, TC18 and TC19
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function userInteractionTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://su-p.undertone.com/125173');

       // Enter values for Zip in the Geo subsection
        zipField = await driver.findElement(By.xpath("//input[@name='sf_ut_zip_code']"))
        zipField.clear();
        await driver.sleep(2000);
        zipField.sendKeys("12345")

        // Click Submit button
        await driver.findElement(By.xpath("//button[text()='Submit']")).click();
        await driver.sleep(3000);

         // Click Restart Ad button
         await driver.findElement(By.xpath("//div[@automation-id='settingsRestartAd']")).click();
         await driver.sleep(3000);

        // Click Monitor button
        await driver.findElement(By.xpath("//div[@automation-id='settingsToggleMonitor']")).click();
        await driver.sleep(3000);
     

        console.log("All user interactions executed successfully");

    } catch (error) {
        console.error("User Interaction Test Failed:", error);
    } finally {
        await driver.quit();
    }
})();
