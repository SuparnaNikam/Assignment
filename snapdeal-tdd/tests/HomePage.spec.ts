import { test, expect } from '@playwright/test';
import HomePageElement from '../page-objects/page-elements/homePageElement-Snapdeal.json' with { type: 'json' };
import { WebCommons } from '../commons/UI/snapdealWeb-commons.ts';
import { HomePageSteps } from '../page-objects/page-steps/HomePage-steps.ts';
import config from '../config/config.json' with {type: 'json'};
import { type Page } from '@playwright/test';


let HomePage: HomePageSteps;
let WebCommonsMethod: WebCommons;
test.describe('Snapdeal Home Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        WebCommonsMethod = new WebCommons(page);
        HomePage = new HomePageSteps(page);

    });

    //TC01 :launch application and verify the title of web page 
    test('Launch Application', async ({ page }) => {

        await HomePage.lanchApplication(config.app.url, "Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items");
    })
    ///Tc02 Verify TopHeader
    test('Verify top header display', async ({ page }) => {
        await HomePage.verifyTopHeader();
    });

    //Tc03 serch box validation 
    test('Validate Serch Box', async ({ page }) => {
        await HomePage.searchBoxValidation();

    })


})



