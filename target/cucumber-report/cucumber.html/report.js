$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EligibilityChecker.feature");
formatter.feature({
  "line": 1,
  "name": "Eligibility Checker",
  "description": "",
  "id": "eligibility-checker",
  "keyword": "Feature"
});
formatter.before({
  "duration": 22896245300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Wales Test Ticket - Acceptance Criteria",
  "description": "",
  "id": "eligibility-checker;wales-test-ticket---acceptance-criteria",
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
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I put my GP Practice",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Put my Dental Practice",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I put my Date Of Birth",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I live with a partner or not",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I put my or my partner claim any benefits or tax credits?",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Put my pregnant or have you given birth in the last 12 months?",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I put my have an injury or illness caused by serving in the armed forces?",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I put my or my partner live permanently in a care home?",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I put my and my partner have more than £16,000 in savings, investments or property?",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmAPersonFromWales()"
});
formatter.result({
  "duration": 3695885100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyGPPractice()"
});
formatter.result({
  "duration": 2759928900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyDentalPractice()"
});
formatter.result({
  "duration": 1348388900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyDateOfBirth()"
});
formatter.result({
  "duration": 1703727600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iLiveWithAPartnerOrNot()"
});
formatter.result({
  "duration": 1204171700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyOrMyPartnerClaimAnyBenefitsOrTaxCredits()"
});
formatter.result({
  "duration": 1231241500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "MyStepdefs.iPutMyPregnantOrHaveYouGivenBirthInTheLastMonths(int)"
});
formatter.result({
  "duration": 1332429300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyHaveAnInjuryOrIllnessCausedByServingInTheArmedForces()"
});
formatter.result({
  "duration": 1243024100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyOrMyPartnerLivePermanentlyInACareHome()"
});
formatter.result({
  "duration": 2559705000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 40
    },
    {
      "val": "000",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.iPutMyAndMyPartnerHaveMoreThan£InSavingsInvestmentsOrProperty(int,int)"
});
formatter.result({
  "duration": 2732497000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldGetAResultOfWhetherIWillGetHelpOrNot()"
});
formatter.result({
  "duration": 20117073000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[@id\u003d\u0027result-heading\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.120)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.1.159\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [78ddc3be171527747802c85f5fb50b3a, findElement {using\u003dxpath, value\u003d//h1[@id\u003d\u0027result-heading\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49993}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49993/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 78ddc3be171527747802c85f5fb50b3a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat uk.co.nhs.utility.Utility.getTextFromElement(Utility.java:122)\r\n\tat uk.co.nhs.pages.EligibilityChecker.VerifyResultMsg(EligibilityChecker.java:194)\r\n\tat uk.co.nhs.cucumber.steps.MyStepdefs.iShouldGetAResultOfWhetherIWillGetHelpOrNot(MyStepdefs.java:85)\r\n\tat ✽.Then I should get a result of whether I will get help or not(EligibilityChecker.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 251865800,
  "status": "passed"
});
});