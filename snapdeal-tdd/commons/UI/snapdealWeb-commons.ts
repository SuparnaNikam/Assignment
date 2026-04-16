import { type Page, type Locator, expect } from '@playwright/test';


export class WebCommons
    {

    page: Page;
    //webElement : Locator;
    constructor(page: Page) {
        this.page = page

    }


    //common method to genrate web element 

    async getWebElement(locator: string): Promise<Locator> {
      
                return this.page.locator(locator);
        }

/*
     async scollToElement(locator: string): Promise<void> {
const  weElement = await this.getWebElement(locator);
  await weElement.scrollIntoViewIfNeeded();
        
    } */
      async scrollToElement(locator: string): Promise<void> {
        const element = await this.getWebElement(locator);
        await element.scrollIntoViewIfNeeded();
    }





 async launchApplication(url: string, title?: string): Promise<void> {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }


    async clickElement(locator: string): Promise<void> {
        const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.click();
    }
    async dblclickElement(locator: string): Promise<void> {
	 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.dblclick();
    }
    async rightElement(locator: string): Promise<void> {
	 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.click({ button: 'right' });
    }
    async leftElement(locator: string): Promise<void> {
	 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.click({ button: 'left' });
    }
    async hoverElement(locator: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        await webElement.hover();
    }
    async forceElement(locator: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.click({ force: true });
    }
    async clearTextElement(locator: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.clear();
    }
    async typeTextIntoElement(locator: string, textToFill: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.fill(textToFill);

    }
    async selectOptionDropdown(locator: string, option: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.selectOption(option);
    }

    async getTextElement(locator: string, expected: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        await expect(webElement).toHaveText(expected);
    }

    async geAttributeElement(locator: string, attribute: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        await expect(webElement).toHaveAttribute(attribute);
    }
    async uploadFile(locator: string, path: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        webElement.setInputFiles(path);
    }

    async isElementVisible(locator: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
            await webElement.scrollIntoViewIfNeeded();
   await expect(webElement).toBeVisible();
        
    }
    async isElementEnable(locator: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        await expect(webElement).toBeEnabled();
    }
    async isElementEditable(locator: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        await expect(webElement).toBeEditable();
    }


    async isElementHidden(locator: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        await webElement.scrollIntoViewIfNeeded();
        await expect(webElement).toBeHidden();
    }

    async takescreenshot(path: string): Promise<void> {
		 const  webElement = await this.getWebElement(locator);
        this.page.screenshot({ path });
    }
    async compaireText(actual: string, expected: string): Promise<void> {
        expect(actual).toBe(expect);

    }

    //common method to handle alert pop up
    async handleAlert(action: 'accept' | 'dismiss', textToEnter: string): Promise<void> {
        this.page.on('dialog', async (dialog) => {
            if (action == "accept") {
                await dialog.accept(textToEnter);
            }
            else {
                await dialog.dismiss();
            }
        });
    }
}
