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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"e8870548-3302-489e-9d22-ff79a213141f\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e8870548-3302-489e-9d22-ff79a213141f"',
  'x-ms-request-id': 'c4dd5a99-8361-4ab9-a799-8f81eacfc27d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'fdcca26e-2e43-41e6-be70-5691fb282451',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110925Z:fdcca26e-2e43-41e6-be70-5691fb282451',
  date: 'Tue, 15 Aug 2017 11:09:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"e8870548-3302-489e-9d22-ff79a213141f\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e8870548-3302-489e-9d22-ff79a213141f"',
  'x-ms-request-id': 'c4dd5a99-8361-4ab9-a799-8f81eacfc27d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'fdcca26e-2e43-41e6-be70-5691fb282451',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110925Z:fdcca26e-2e43-41e6-be70-5691fb282451',
  date: 'Tue, 15 Aug 2017 11:09:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/topology?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"id\": \"7671427b-6757-4831-bc95-4e64b114cb87\",\r\n  \"createdDateTime\": \"2017-08-15T11:09:26.3490649Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/11edddc8-5878-4b61-9ffa-40da50eff2e4?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '11edddc8-5878-4b61-9ffa-40da50eff2e4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/11edddc8-5878-4b61-9ffa-40da50eff2e4?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bf5b83c1-25f1-4fb2-85d4-9c9571748868',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110927Z:bf5b83c1-25f1-4fb2-85d4-9c9571748868',
  date: 'Tue, 15 Aug 2017 11:09:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/topology?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"id\": \"7671427b-6757-4831-bc95-4e64b114cb87\",\r\n  \"createdDateTime\": \"2017-08-15T11:09:26.3490649Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/11edddc8-5878-4b61-9ffa-40da50eff2e4?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '11edddc8-5878-4b61-9ffa-40da50eff2e4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/11edddc8-5878-4b61-9ffa-40da50eff2e4?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bf5b83c1-25f1-4fb2-85d4-9c9571748868',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110927Z:bf5b83c1-25f1-4fb2-85d4-9c9571748868',
  date: 'Tue, 15 Aug 2017 11:09:26 GMT',
  connection: 'close' });
 return result; }]];