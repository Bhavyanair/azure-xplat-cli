// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate8853/providers/Microsoft.Compute/availabilitySets?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"properties\": {\r\n        \"platformUpdateDomainCount\": 3,\r\n        \"platformFaultDomainCount\": 3,\r\n        \"virtualMachines\": []\r\n      },\r\n      \"type\": \"Microsoft.Compute/availabilitySets\",\r\n      \"location\": \"southeastasia\",\r\n      \"tags\": {},\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate8853/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6500\",\r\n      \"name\": \"xplatTestaAvail6500\",\r\n      \"sku\": {\r\n        \"name\": \"Classic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '554',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'e586b1e0-90fe-41d0-a518-8982b6501d8f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14899',
  'x-ms-correlation-request-id': 'd74e3d57-a956-43b6-b41c-4abd7b9a985e',
  'x-ms-routing-request-id': 'WESTUS:20170602T151748Z:d74e3d57-a956-43b6-b41c-4abd7b9a985e',
  date: 'Fri, 02 Jun 2017 15:17:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate8853/providers/Microsoft.Compute/availabilitySets?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"properties\": {\r\n        \"platformUpdateDomainCount\": 3,\r\n        \"platformFaultDomainCount\": 3,\r\n        \"virtualMachines\": []\r\n      },\r\n      \"type\": \"Microsoft.Compute/availabilitySets\",\r\n      \"location\": \"southeastasia\",\r\n      \"tags\": {},\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate8853/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6500\",\r\n      \"name\": \"xplatTestaAvail6500\",\r\n      \"sku\": {\r\n        \"name\": \"Classic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '554',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'e586b1e0-90fe-41d0-a518-8982b6501d8f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14899',
  'x-ms-correlation-request-id': 'd74e3d57-a956-43b6-b41c-4abd7b9a985e',
  'x-ms-routing-request-id': 'WESTUS:20170602T151748Z:d74e3d57-a956-43b6-b41c-4abd7b9a985e',
  date: 'Fri, 02 Jun 2017 15:17:48 GMT',
  connection: 'close' });
 return result; }]];