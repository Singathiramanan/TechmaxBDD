package com.stepDefinition;

import com.TechMax.Pomrepositorylib.InventoryPage;
import com.TechMax.Pomrepositorylib.SingletonDesignPattern;
import com.TechMax.Pomrepositorylib.SupplierPage;
import com.TechMax.utility.ExcelUtility;
import com.TechMax.utility.FileUtility;
import com.TechMax.utility.JavaUtility;
import com.TechMax.utility.WebDriverUtility;
import com.testRunner.InventoryTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	public JavaUtility jLib = new JavaUtility();
	public WebDriverUtility wLib = new WebDriverUtility();
	public FileUtility fLib = new FileUtility();
	public ExcelUtility eLib = new ExcelUtility();
	SingletonDesignPattern s = new SingletonDesignPattern(InventoryTest.driver);
	String company="", pcode="";

	@Given("^lauch the url$")
	public void lauch_the_url() throws Throwable {

	}

	@Given("^login the application$")
	public void login_the_application() throws Throwable {
		/* common Data */
		String url = fLib.getPropertyKeyValue("url");
		String admin_UN = fLib.getPropertyKeyValue("admin_username");
		String admin_PW = fLib.getPropertyKeyValue("admin_password");
		/* step 1 : login */
		SingletonDesignPattern s = new SingletonDesignPattern(InventoryTest.driver);
		s.getLoginPage().loginToApplication(url, admin_UN, admin_PW);
	}

	@When("^creat supplier$")
	public void creat_supplier() throws Throwable {
		// Fetching data from excel
		String companyName = eLib.getExcelData("Sheet1", 17, 2);
		String Province = eLib.getExcelData("Sheet1", 17, 3);
		String City = eLib.getExcelData("Sheet1", 17, 4);
		String PhoneNumber = eLib.getExcelData("Sheet1", 17, 5);

		// Click on Supplier major tab
		s.getHomePage().getNavigateToSupplier().click();

		// Create a supplier
		SupplierPage sp = new SupplierPage(InventoryTest.driver);
		sp.getCreateSupplierAddIcon().click();
		company = companyName + "_" + jLib.getRanDomNumber();
		sp.CreateSupplier(company, Province, City, PhoneNumber);
		System.out.println("supplier is created");
	}

	@When("^create product$")
	public void create_product() throws Throwable {
		String p_code = eLib.getExcelData("Sheet1", 17, 6);
		String p_name = eLib.getExcelData("Sheet1", 17, 7);
		String descrpition = eLib.getExcelData("Sheet1", 17, 9);
		String quantity = eLib.getExcelData("Sheet1", 17, 10);
		String on_hand = eLib.getExcelData("Sheet1", 17, 11);
		String price = eLib.getExcelData("Sheet1", 17, 12);
		String catagory = eLib.getExcelData("Sheet1", 17, 13);
		s.getHomePage().getNavigateToProduct().click();

		s.getProductPage().getCreateProductAddIcon().click();
		pcode = p_code + "_" + jLib.getRanDomNumber();
		s.getProductPage().CreateProduct(pcode, p_name, descrpition, quantity, on_hand, price, catagory, company);
		System.out.println("Product is created");
	}

	@When("^click on inventory$")
	public void click_on_inventory() throws Throwable {
		s.getHomePage().getNavigateToInventory().click();
		System.out.println("Inventory page is displayed");
	}

	@Then("^check the product$")
	public void check_the_product() throws Throwable {
		InventoryPage inventory=new InventoryPage(InventoryTest.driver);
		inventory.getSearch_TF().sendKeys(pcode);
		System.out.println("product details is present");
	}
	@Then("^logout the application$")
	public void logout_the_application() throws Throwable {
		s.getLoginPage().LogoutToApplication();
	}

}
