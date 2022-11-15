package com.testRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import com.TechMax.utility.FileUtility;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		"E:\\Disk2\\Eclipse\\TechmaxBDD\\src\\test\\java\\com\\features\\Inventory_techmax.feature" }, glue = "com.stepDefinition",
				dryRun = false,monochrome=true,strict=false,plugin={"pretty","json:Reports/report2.json","html:Reports/report2.html","junit:Reports/report2.xml",
		})

public class InventoryTest {
	public static FileUtility fLib = new FileUtility();
	public static WebDriver driver;

	@BeforeClass
	public static void launchBrowser() throws Throwable {
		System.out.println("=============Launch the Browser=======");
		String browser = fLib.getPropertyKeyValue("browser");
		if (browser.equalsIgnoreCase("msedge")) {
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
		} else if (browser.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else {
			System.out.println("invalid browser");
		}

	}

	@AfterClass
	public static void configAC() {
		System.out.println("=============Close the Browser=======");
		driver.quit();
	}

}
