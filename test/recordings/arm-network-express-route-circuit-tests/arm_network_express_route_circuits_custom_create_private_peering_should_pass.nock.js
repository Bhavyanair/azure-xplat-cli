// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df410d17-25c9-48ce-a34e-e20f8d538acb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'ba3d0fe7-813f-4e9a-b597-5d3531683f36',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111156Z:ba3d0fe7-813f-4e9a-b597-5d3531683f36',
  date: 'Fri, 01 Sep 2017 11:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df410d17-25c9-48ce-a34e-e20f8d538acb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'ba3d0fe7-813f-4e9a-b597-5d3531683f36',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111156Z:ba3d0fe7-813f-4e9a-b597-5d3531683f36',
  date: 'Fri, 01 Sep 2017 11:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"7d0f2a0c-b2b3-463b-b980-b86ef6cc622c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 0,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"state\": \"Disabled\",\r\n    \"vlanId\": 200,\r\n    \"lastModifiedBy\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '625',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '056e6ad9-0d01-46d0-b38e-142b9574bf2c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/056e6ad9-0d01-46d0-b38e-142b9574bf2c?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'a804ecff-164b-4cf8-b675-81deedc99bad',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111158Z:a804ecff-164b-4cf8-b675-81deedc99bad',
  date: 'Fri, 01 Sep 2017 11:11:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"7d0f2a0c-b2b3-463b-b980-b86ef6cc622c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 0,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"state\": \"Disabled\",\r\n    \"vlanId\": 200,\r\n    \"lastModifiedBy\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '625',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '056e6ad9-0d01-46d0-b38e-142b9574bf2c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/056e6ad9-0d01-46d0-b38e-142b9574bf2c?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'a804ecff-164b-4cf8-b675-81deedc99bad',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111158Z:a804ecff-164b-4cf8-b675-81deedc99bad',
  date: 'Fri, 01 Sep 2017 11:11:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/056e6ad9-0d01-46d0-b38e-142b9574bf2c?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e10db884-8923-4e3a-8b89-3275d7d7c833',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '27f3cda4-29d1-4307-8ade-e2d9b88f83d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111229Z:27f3cda4-29d1-4307-8ade-e2d9b88f83d3',
  date: 'Fri, 01 Sep 2017 11:12:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/056e6ad9-0d01-46d0-b38e-142b9574bf2c?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e10db884-8923-4e3a-8b89-3275d7d7c833',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '27f3cda4-29d1-4307-8ade-e2d9b88f83d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111229Z:27f3cda4-29d1-4307-8ade-e2d9b88f83d3',
  date: 'Fri, 01 Sep 2017 11:12:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/056e6ad9-0d01-46d0-b38e-142b9574bf2c?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '80d0aa3c-4d42-4b28-8dc0-5a6988819e65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'e0a64958-509b-4889-9241-18edaf37a2be',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111300Z:e0a64958-509b-4889-9241-18edaf37a2be',
  date: 'Fri, 01 Sep 2017 11:13:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/056e6ad9-0d01-46d0-b38e-142b9574bf2c?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '80d0aa3c-4d42-4b28-8dc0-5a6988819e65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'e0a64958-509b-4889-9241-18edaf37a2be',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111300Z:e0a64958-509b-4889-9241-18edaf37a2be',
  date: 'Fri, 01 Sep 2017 11:13:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"3d31b0fb-7493-43aa-b240-3efb1f001fbe\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '782',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3de2c5e-bb32-4df5-ba09-57ed4e6fbbec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4d9a8b65-8291-4fde-b688-28dc0027acd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111302Z:4d9a8b65-8291-4fde-b688-28dc0027acd9',
  date: 'Fri, 01 Sep 2017 11:13:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"3d31b0fb-7493-43aa-b240-3efb1f001fbe\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '782',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3de2c5e-bb32-4df5-ba09-57ed4e6fbbec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4d9a8b65-8291-4fde-b688-28dc0027acd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111302Z:4d9a8b65-8291-4fde-b688-28dc0027acd9',
  date: 'Fri, 01 Sep 2017 11:13:02 GMT',
  connection: 'close' });
 return result; }]];