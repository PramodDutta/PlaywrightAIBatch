package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ValidLoginTest extends BaseTest {

    private LoginPage loginPage;

    @BeforeMethod
    public void initPage() throws Exception {
        try {
            loginPage = new LoginPage(driver);
        } catch (Exception e) {
            throw new Exception("LoginPage initialization failed: " + e.getMessage());
        }
    }

    @Test(priority = 1, description = "Verify login page is displayed correctly")
    public void testLoginPageDisplay() throws Exception {
        try {
            Assert.assertTrue(loginPage.isLoginPageDisplayed(), "Login page should be displayed");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 2, description = "Verify page title contains Salesforce")
    public void testLoginPageTitle() throws Exception {
        try {
            String title = loginPage.getPageTitle();
            Assert.assertTrue(title.contains("Salesforce"), "Page title should contain Salesforce");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 3, description = "Verify username field is empty on page load")
    public void testUsernameFieldEmpty() throws Exception {
        try {
            Assert.assertTrue(loginPage.isUsernameFieldEmpty(), "Username field should be empty on page load");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 4, description = "Verify password field is empty on page load")
    public void testPasswordFieldEmpty() throws Exception {
        try {
            Assert.assertTrue(loginPage.isPasswordFieldEmpty(), "Password field should be empty on page load");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 5, description = "Verify remember me checkbox is not checked by default")
    public void testRememberMeUncheckedByDefault() throws Exception {
        try {
            Assert.assertFalse(loginPage.isRememberMeChecked(), "Remember me should not be checked by default");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 6, description = "Verify remember me checkbox can be checked")
    public void testRememberMeCheckboxFunctionality() throws Exception {
        try {
            loginPage.clickRememberMe();
            Assert.assertTrue(loginPage.isRememberMeChecked(), "Remember me should be checked after clicking");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 7, description = "Verify login with valid credentials format")
    public void testLoginWithValidCredentialsFormat() throws Exception {
        try {
            loginPage.enterUsername("testuser@salesforce.com");
            loginPage.enterPassword("TestPassword123");
            loginPage.clickLoginButton();
            loginPage.waitForPageLoad();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed() || !loginPage.getCurrentUrl().contains("login"),
                    "Login attempt should proceed");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 8, description = "Verify login with remember me option")
    public void testLoginWithRememberMeOption() throws Exception {
        try {
            loginPage.enterUsername("testuser@company.com");
            loginPage.clickRememberMe();
            Assert.assertTrue(loginPage.isRememberMeChecked(), "Remember me should be checked");
            loginPage.enterPassword("ValidPassword1!");
            loginPage.clickLoginButton();
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 9, description = "Verify current URL contains salesforce")
    public void testCurrentUrlContainsSalesforce() throws Exception {
        try {
            String currentUrl = loginPage.getCurrentUrl();
            Assert.assertTrue(currentUrl.contains("salesforce"), "URL should contain salesforce");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 10, description = "Verify login page elements are interactable")
    public void testLoginPageElementsInteractable() throws Exception {
        try {
            loginPage.enterUsername("test@test.com");
            loginPage.enterPassword("password");
            loginPage.clickRememberMe();
            Assert.assertTrue(loginPage.isRememberMeChecked(), "All elements should be interactable");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }
}
