import {test,expect} from "@playwright/test"


test("demo test" , async({page,context })=>{
    // open page 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/auth/login");

    // fetch password text 
    const forgotPassword = await page.locator(".forgot-password-link").innerText();
    const pass = await forgotPassword.split(" ");
    const finalPass = await pass[1].toUpperCase().split("?")[0];

    // match final password 
    await expect(finalPass).toBe("PASSWORD");

    // switch to new tab 
    const newPage = await context.newPage();
    await newPage.bringToFront();
    await newPage.goto("https://rahulshettyacademy.com/");
    await expect(newPage).toHaveURL("https://rahulshettyacademy.com/");

    // fetch text from new tab 
    const heading = await newPage.getByText("An Academy to").innerText();
    const Nhead = heading.split(" Academy to\nLearn & Shine\nin your QA/AI Ca")
    const Fhead = Nhead[1].split(".")[0];    
    const finalEmail = Nhead[0].concat(Fhead);
    await expect(finalEmail).toBe("Anreer");

    // switch to main page 
    await page.bringToFront();


    //fill wrong details 
    await page.locator("#userEmail").fill(finalEmail);
    await page.locator("#userPassword").fill(finalPass);
    await page.locator("#login").click();

    
    // fetch error msg 
    let msgToster = page.getByText("*Enter Valid Email");
    await msgToster.waitFor("visible");

    const msg = await page.getByText("*Enter Valid Email").innerText();
    await expect(msg).toBe("*Enter Valid Email");
    await msgToster.waitFor("hidden");

  
    // fill valid details
    await page.locator("#userEmail").fill("garvitchugh66@gmail.com");
    await page.locator("#userPassword").fill("Test@1234");
    await page.locator("#login").click();
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
    // await page.pause();
}) 