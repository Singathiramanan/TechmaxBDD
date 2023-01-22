package com.stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import com.testRunner.AmazonProducts;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionAmazon extends AmazonProducts{
	 

	@Given("^Open Amazon Application$")
	public void open_Amazon_Application() throws Throwable {
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://www.amazon.in/");
	}

	@When("^Fetch All Mobile$")
	public void fetch_All_Mobile() throws Throwable {
		driver.findElement(By.xpath("//input[@id='twotabsearchtextbox']")).sendKeys("Nokia 105", Keys.ENTER);
	}

	@Then("^check all pages$")
	public void check_all_pages() throws Throwable {
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
