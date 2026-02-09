package com.salesforce.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class LoginPage {

    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement usernameInput;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement passwordInput;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMeCheckbox;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement errorMessage;

    @FindBy(xpath = "//a[contains(@id,'forgot_password_link')]")
    private WebElement forgotPasswordLink;

    @FindBy(xpath = "//span[@id='idcard-identity']")
    private WebElement loggedInUserIdentity;

    public LoginPage(WebDriver driver) throws Exception {
        if (driver == null) {
            throw new Exception("WebDriver instance is null");
        }
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        PageFactory.initElements(driver, this);
    }

    public void enterUsername(String username) throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(usernameInput));
            usernameInput.clear();
            usernameInput.sendKeys(username);
        } catch (Exception e) {
            throw new Exception("Failed to enter username: " + e.getMessage());
        }
    }

    public void enterPassword(String password) throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(passwordInput));
            passwordInput.clear();
            passwordInput.sendKeys(password);
        } catch (Exception e) {
            throw new Exception("Failed to enter password: " + e.getMessage());
        }
    }

    public void clickLoginButton() throws Exception {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(loginButton));
            loginButton.click();
        } catch (Exception e) {
            throw new Exception("Failed to click login button: " + e.getMessage());
        }
    }

    public void clickRememberMe() throws Exception {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(rememberMeCheckbox));
            if (!rememberMeCheckbox.isSelected()) {
                rememberMeCheckbox.click();
            }
        } catch (Exception e) {
            throw new Exception("Failed to click remember me checkbox: " + e.getMessage());
        }
    }

    public void doLogin(String username, String password) throws Exception {
        try {
            enterUsername(username);
            enterPassword(password);
            clickLoginButton();
        } catch (Exception e) {
            throw new Exception("Login operation failed: " + e.getMessage());
        }
    }

    public void doLoginWithRememberMe(String username, String password) throws Exception {
        try {
            enterUsername(username);
            enterPassword(password);
            clickRememberMe();
            clickLoginButton();
        } catch (Exception e) {
            throw new Exception("Login with remember me operation failed: " + e.getMessage());
        }
    }

    public String getErrorMessage() throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(errorMessage));
            return errorMessage.getText();
        } catch (Exception e) {
            throw new Exception("Failed to get error message: " + e.getMessage());
        }
    }

    public boolean isErrorMessageDisplayed() throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(errorMessage));
            return errorMessage.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    public boolean isLoginPageDisplayed() throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(loginButton));
            return loginButton.isDisplayed();
        } catch (Exception e) {
            throw new Exception("Failed to verify login page display: " + e.getMessage());
        }
    }

    public boolean isUsernameFieldEmpty() throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(usernameInput));
            return usernameInput.getAttribute("value").isEmpty();
        } catch (Exception e) {
            throw new Exception("Failed to check if username field is empty: " + e.getMessage());
        }
    }

    public boolean isPasswordFieldEmpty() throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(passwordInput));
            return passwordInput.getAttribute("value").isEmpty();
        } catch (Exception e) {
            throw new Exception("Failed to check if password field is empty: " + e.getMessage());
        }
    }

    public void clickForgotPassword() throws Exception {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(forgotPasswordLink));
            forgotPasswordLink.click();
        } catch (Exception e) {
            throw new Exception("Failed to click forgot password link: " + e.getMessage());
        }
    }

    public String getPageTitle() throws Exception {
        try {
            return driver.getTitle();
        } catch (Exception e) {
            throw new Exception("Failed to get page title: " + e.getMessage());
        }
    }

    public String getCurrentUrl() throws Exception {
        try {
            return driver.getCurrentUrl();
        } catch (Exception e) {
            throw new Exception("Failed to get current URL: " + e.getMessage());
        }
    }

    public boolean isRememberMeChecked() throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(rememberMeCheckbox));
            return rememberMeCheckbox.isSelected();
        } catch (Exception e) {
            throw new Exception("Failed to check remember me status: " + e.getMessage());
        }
    }

    public void waitForPageLoad() throws Exception {
        try {
            wait.until(ExpectedConditions.visibilityOf(loginButton));
        } catch (Exception e) {
            throw new Exception("Page load wait failed: " + e.getMessage());
        }
    }
}
