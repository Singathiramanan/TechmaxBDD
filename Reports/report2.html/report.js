$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Disk2/Eclipse/TechmaxBDD/src/test/java/com/features/AmazonAllPhones.feature");
formatter.feature({
  "line": 1,
  "name": "AmazonSearchPhones",
  "description": "",
  "id": "amazonsearchphones",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "FetchAllMobiles",
  "description": "",
  "id": "amazonsearchphones;fetchallmobiles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open Amazon Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Fetch All Mobile",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check all pages",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAmazon.open_Amazon_Application()"
});
formatter.result({
  "duration": 17090991000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAmazon.fetch_All_Mobile()"
});
formatter.result({
  "duration": 7240913900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAmazon.check_all_pages()"
});
formatter.result({
  "duration": 78663607700,
  "status": "passed"
});
});