package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {

    private LoginPage loginPage;

    @BeforeMethod
    public void initPage() throws Exception {
        try {
            loginPage = new LoginPage(driver);
        } catch (Exception e) {
            throw new Exception("LoginPage initialization failed: " + e.getMessage());
        }
    }

    @Test(priority = 1, description = "Verify error message with empty username and empty password")
    public void testEmptyCredentials() throws Exception {
        try {
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for empty credentials");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 2, description = "Verify error message with empty username")
    public void testEmptyUsername() throws Exception {
        try {
            loginPage.enterPassword("TestPassword123");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for empty username");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 3, description = "Verify error message with empty password")
    public void testEmptyPassword() throws Exception {
        try {
            loginPage.enterUsername("testuser@salesforce.com");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for empty password");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 4, description = "Verify error message with invalid username format")
    public void testInvalidUsernameFormat() throws Exception {
        try {
            loginPage.enterUsername("invalidusername");
            loginPage.enterPassword("TestPassword123");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for invalid username format");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 5, description = "Verify error message with invalid credentials")
    public void testInvalidCredentials() throws Exception {
        try {
            loginPage.enterUsername("invaliduser@invalid.com");
            loginPage.enterPassword("InvalidPassword123");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for invalid credentials");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 6, description = "Verify error message with special characters in username")
    public void testSpecialCharactersInUsername() throws Exception {
        try {
            loginPage.enterUsername("user<>@test.com");
            loginPage.enterPassword("Password123!");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for special characters in username");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 7, description = "Verify error message with SQL injection attempt in username")
    public void testSqlInjectionInUsername() throws Exception {
        try {
            loginPage.enterUsername("' OR '1'='1");
            loginPage.enterPassword("password");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for SQL injection attempt");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 8, description = "Verify error message with very long username")
    public void testVeryLongUsername() throws Exception {
        try {
            String longUsername = "a".repeat(500) + "@test.com";
            loginPage.enterUsername(longUsername);
            loginPage.enterPassword("Password123");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for very long username");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 9, description = "Verify error message with spaces only in username")
    public void testSpacesOnlyUsername() throws Exception {
        try {
            loginPage.enterUsername("     ");
            loginPage.enterPassword("Password123");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error message should be displayed for spaces only username");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 10, description = "Verify error message with XSS attempt in password")
    public void testXssAttemptInPassword() throws Exception {
        try {
            loginPage.enterUsername("user@test.com");
            loginPage.enterPassword("<script>alert('xss')</script>");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for XSS attempt");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 11, description = "Verify user stays on login page after failed login")
    public void testStaysOnLoginPageAfterFailedLogin() throws Exception {
        try {
            loginPage.enterUsername("invalid@invalid.com");
            loginPage.enterPassword("wrongpassword");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.getCurrentUrl().contains("login"),
                    "User should stay on login page after failed login");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 12, description = "Verify error message contains relevant text")
    public void testErrorMessageContainsRelevantText() throws Exception {
        try {
            loginPage.enterUsername("test@test.com");
            loginPage.enterPassword("wrongpass");
            loginPage.clickLoginButton();
            String errorText = loginPage.getErrorMessage();
            Assert.assertNotNull(errorText, "Error message should not be null");
            Assert.assertFalse(errorText.isEmpty(), "Error message should not be empty");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 13, description = "Verify multiple failed login attempts")
    public void testMultipleFailedLoginAttempts() throws Exception {
        try {
            for (int i = 0; i < 3; i++) {
                loginPage.enterUsername("invalid@invalid.com");
                loginPage.enterPassword("WrongPassword" + i);
                loginPage.clickLoginButton();
                Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                        "Error should be displayed on attempt " + (i + 1));
            }
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 14, description = "Verify login with case sensitivity in password")
    public void testPasswordCaseSensitivity() throws Exception {
        try {
            loginPage.enterUsername("testuser@salesforce.com");
            loginPage.enterPassword("PASSWORD123");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(),
                    "Error should be displayed for incorrect password case");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }

    @Test(priority = 15, description = "Verify login with unicode characters in username")
    public void testUnicodeCharactersInUsername() throws Exception {
        try {
            loginPage.enterUsername("用户@test.com");
            loginPage.enterPassword("Password123");
            loginPage.clickLoginButton();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error should be displayed for unicode username");
        } catch (Exception e) {
            throw new Exception("Test failed: " + e.getMessage());
        }
    }
}
