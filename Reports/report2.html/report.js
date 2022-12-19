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
  "duration": 3788049500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.login_the_application()"
});
formatter.result({
  "duration": 5305596100,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_NAME_NOT_RESOLVED\n  (Session info: chrome\u003d108.0.5359.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EM3OVKO\u0027, ip: \u0027192.168.195.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.100, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Umamani\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60099}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bf6369e4368e13e41a1afcf64aa716fa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.TechMax.Pomrepositorylib.LoginPage.loginToApplication(LoginPage.java:70)\r\n\tat com.stepDefinition.StepDefinition.login_the_application(StepDefinition.java:38)\r\n\tat ✽.And login the application(E:/Disk2/Eclipse/TechmaxBDD/src/test/java/com/features/Inventory_techmax.feature:6)\r\n",
  "status": "failed"
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