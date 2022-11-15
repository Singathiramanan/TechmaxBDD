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
formatter.match({
  "location": "StepDefinition.lauch_the_url()"
});
formatter.result({
  "duration": 810740600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.login_the_application()"
});
formatter.result({
  "duration": 5078967400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.creat_supplier()"
});
formatter.result({
  "duration": 8278083600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.create_product()"
});
formatter.result({
  "duration": 4211752200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_inventory()"
});
formatter.result({
  "duration": 317382800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.check_the_product()"
});
formatter.result({
  "duration": 205314900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.logout_the_application()"
});
formatter.result({
  "duration": 522349900,
  "status": "passed"
});
});