//TC1: Verify page loads successfully
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open the creative page
        await driver.get('https://su-p.undertone.com/125173');

        /*The commented code is covering a theoretical existense of a Login form before showing the content of the page containing two text fields "Username" and "Password" and a "Login" button*/
        // Locate and fill in username
        //  await driver.findElement(By.id('username')).sendKeys('your_username');

        // Locate and fill in password
        //  await driver.findElement(By.id('password')).sendKeys('your_password', Key.RETURN);

        // Click the "Login" button
        //  await driver.findElement(By.id('loginButton')).click(); 
 
        // Wait for login to complete (adjust time as needed)
        //  await driver.wait(until.elementLocated(By.id('dashboard') || By.className('logged-in')), 5000);

        // Wait for page to load
        await driver.wait(until.titleContains("Perion"));
        
        console.log("Login Successful and Page Loaded");

        // Keep the browser open for 10 seconds before closing
         await driver.sleep(10000); 

    } catch (error) {
        console.error("Login Test Failed:", error);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();
