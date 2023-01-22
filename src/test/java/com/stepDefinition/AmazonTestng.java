package com.stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AmazonTestng extends com.testRunner.AmazonTestng{
	WebDriver driver;
	@Given("^Open Amazon Applicationng$")
	public void open_Amazon_Applicationng() throws Throwable {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://www.amazon.in/");
	}

	@When("^Fetch All Mobileng$")
	public void fetch_All_Mobileng() throws Throwable {
		driver.findElement(By.xpath("//input[@id='twotabsearchtextbox']")).sendKeys("Nokia 105", Keys.ENTER);

	}

	@Then("^check all pagesng$")
	public void check_all_pagesng() throws Throwable {
		String page = driver.findElement(By.xpath("//a[@aria-label='Go to page 5']")).getText();
		int no = Integer.parseInt(page);
		int count = 0;
		while (no >= 1) {
			Thread.sleep(15000);
			List<WebElement> names = driver.findElements(By.xpath(
					"//div[@class='s-main-slot s-result-list s-search-results sg-row']/descendant::span[@class='a-size-medium a-color-base a-text-normal']"));
			System.out.println(names.size());
			for (WebElement ele : names) {
				String name = ele.getText();
				count++;

				System.out.println(count + " " + name);
			}
			no--;
			if (no < 1)
				break;
			driver.findElement(By.xpath("//a[contains(.,'Next')]")).click();
			
		}
	}

}
