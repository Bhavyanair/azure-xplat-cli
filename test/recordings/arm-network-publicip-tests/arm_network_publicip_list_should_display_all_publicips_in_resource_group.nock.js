// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses?api-version=2016-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-ip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n      \"etag\": \"W/\\\"46dc44b7-74af-407d-b0bf-25127338c073\\\"\",\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"6bb7d7de-8ec8-4689-9b09-484f60392f96\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 15,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"bar-domain126\",\r\n          \"fqdn\": \"bar-domain126.westus.validation.cloudapp.azure.com\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '96393b11-2bdc-42f8-8acf-94925bb58740',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'f245ab4b-4245-40a1-bfa8-19d05c9b1074',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T154141Z:f245ab4b-4245-40a1-bfa8-19d05c9b1074',
  date: 'Mon, 15 Aug 2016 15:41:40 GMT' });
 return result; }]];