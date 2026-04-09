import { type Page, type Locator, expect } from '@playwright/test';



export class WebCommons {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // common  method to genrate web element from the locator 
    async element(locator: string): Promise<Locator> {
        return this.page.locator(locator);
    }

    //common method to launch the application
    async launchApplication(url: string, title?: string): Promise<void> {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }

    //Common method to scroll page to locate element
    async scollToElement(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }
  
//common  method to method to click  element
async  clickElement(locator:string):Promise<void>{
    const element = await  this.element(locator);
await this.scollToElement(locator);
    await element.click();
}

//common  method to method to  double click  element
async   doubleClickElement   (locate: string): Promise<void>{
    const webElement = await this.element(locate);
    await  this.scollToElement(locate);
    await webElement.dblclick();
}
// common  method to right click

async rightClickElement(locator :string): Promise<void>{

    const webElement  = await this.element(locator);
    await this.scollToElement(locator);
    await webElement.click({button:'right'});
    }
 // common  method to perfom hover on an elemet

async hoverElement (locator : string): Promise<void>{
 const webElement =  await this.element(locator);
 await this.scollToElement(locator);
 await webElement.hover();

}

 // common  method to perfom force click

 async forceClickElement(locator: string): Promise<void>{
const webElement = await this.element(locator);
await this.scollToElement(locator);
await webElement.click({force: true});
 }

 //Common method to clear text from element
 async clearText(locator:string):Promise<void>{
    const webElement = await this.element(locator);
    await this.scollToElement(locator);
    await webElement.clear();
 } 

 //Common method to type text in to  element
async typeText( locator:string, text: string):Promise<void>{
    const webElement = await this.element(locator);
    await this.scollToElement(locator);
    await this.clearText(locator);
    await this.clickElement(loclocatorate);
    await webElement.fill(text);
}

// Common method to  select an option from a dropdown
 async selectOption(locator: string, option: string) : Promise<void>{
    const webElement = await this.element(locator);
    await this.scollToElement(locator);
    await webElement.selectOption(option);
 }
// Common method to  get text from element
async getElementText(locator : string): Promise<string | null>{
    const webElement= await this.element(locator);
    await this.scollToElement(locator);
return await webElement.textContent();
}
// common method to get attribute value of an element

async getElementAttribute(locator : string,  attribute: string): Promise<string | null>{
    const webElement = await this.element(locator);
await this.scollToElement(locator);
return await webElement.getAttribute(attribute);
}
//common method to upload file

async uploadFile(locator : string,  filepath: string): Promise<void>{
    const webElement = await this.element(locator);
await this.scollToElement(locator);
 await webElement.setInputFiles(filepath);
}

//common method to check element is visible or not
async isElementVisible(locator : string): Promise<boolean>{
    const webElement = await this.element(locator);
await this.scollToElement(locator);
 return await webElement.isVisible();
}

//common method to check element is Enable or not
async isElementEnable(locator : string): Promise<boolean>{
    const webElement = await this.element(locator);
await this.scollToElement(locator);
 return await webElement.isEnabled();
}
//common method to check element is hidden or not
async isElementHidden(locator : string): Promise<boolean>{
    const webElement = await this.element(locator);
await this.scollToElement(locator);
 return await webElement.isHidden();
}

//common method to handle alert pop up
async handleAlert(action: 'accept' | 'dismiss', textToEnter : string): Promise<void>{
this.page.on('dialog', async(dialog) =>{
    if (action == "accept"){
        await dialog.accept(textToEnter);}
        else{
            await dialog.dismiss();
        }
    });

}
//common method to take screenshot

async takeScreenshot(path : string): Promise<void>{
await this.page.screenshot({path});
} 
}