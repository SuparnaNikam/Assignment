
import { test, expect, type Locator, type Page} from '@playwright/test';
import  HomePageElement from '../page-elements/homePageElement-Snapdeal.json' with { type: 'json' };
import { WebCommons} from  '../../commons/UI/snapdealWeb-commons.ts';
//import { WebCommons } from  '../../commons/UI/WebCommons.ts'
import config from '../../config/config.json' with {type: 'json'};





export class HomePageSteps {
  page: Page;
  webCommonsMethod: WebCommons;

  constructor(page: Page) {
    this.page = page;
    this.webCommonsMethod = new WebCommons(this.page);
  }


  async lanchApplication(url: string, title: string): Promise<void> {
   await  this.webCommonsMethod.launchApplication(url, title);
  }


  async verifyPageTitile(url: string, title: string): Promise<void> {
    await this.webCommonsMethod.launchApplication(url, title);
  }

  async verifyTopHeader(): Promise<void> {
      await this.webCommonsMethod.getWebElement(HomePageElement.TopHeader_locator);
  await this.webCommonsMethod.scrollToElement(HomePageElement.TopHeader_locator);
  await  this.webCommonsMethod.isElementVisible(HomePageElement.TopHeader_locator);
     }

 async searchBoxValidation(): Promise<void>{
await this.webCommonsMethod.getWebElement(HomePageElement.TopHeader_locator);
 await  this.webCommonsMethod.scrollToElement(HomePageElement.SearchBox_locator);
await this.webCommonsMethod.isElementVisible(HomePageElement.SearchBox_locator);
await this.webCommonsMethod.clickElement(HomePageElement.SearchBox_locator);
await this.webCommonsMethod.clearTextElement(HomePageElement.SearchBox_locator);
await this.webCommonsMethod.typeTextIntoElement(HomePageElement.SearchBox_locator, "Mobile");
} 
}