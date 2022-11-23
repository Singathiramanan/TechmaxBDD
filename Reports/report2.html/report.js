$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Disk2/Eclipse/TechmaxBDD/src/test/java/com/features/Inventory_techmax.feature");
formatter.feature({
  "line": 1,
  "name": "Inventory",
  "description": "",
  "id": "inventory",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Title of your scenario",
  "description": "",
  "id": "inventory;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "lauch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login the application",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "creat supplier",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "create product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on inventory",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "check the product",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "logout the application",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.login_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.creat_supplier()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.create_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_inventory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.check_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.logout_the_application()"
});
formatter.result({
  "status": "skipped"
});
});