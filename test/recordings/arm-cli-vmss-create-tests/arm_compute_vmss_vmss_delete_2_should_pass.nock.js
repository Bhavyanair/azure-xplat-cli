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
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '9ba1b912-2786-43ac-b340-706e6269e9f1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '878e3652-3e8f-4d04-8b86-66f7f314aed5',
  'x-ms-routing-request-id': 'WESTUS:20170602T140754Z:878e3652-3e8f-4d04-8b86-66f7f314aed5',
  date: 'Fri, 02 Jun 2017 14:07:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '9ba1b912-2786-43ac-b340-706e6269e9f1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '878e3652-3e8f-4d04-8b86-66f7f314aed5',
  'x-ms-routing-request-id': 'WESTUS:20170602T140754Z:878e3652-3e8f-4d04-8b86-66f7f314aed5',
  date: 'Fri, 02 Jun 2017 14:07:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '1a8a8448-bd17-43f2-8c02-d4ad87722b5e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14895',
  'x-ms-correlation-request-id': 'a6724971-0368-489b-a4d4-7157f2216e33',
  'x-ms-routing-request-id': 'WESTUS:20170602T140825Z:a6724971-0368-489b-a4d4-7157f2216e33',
  date: 'Fri, 02 Jun 2017 14:08:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '1a8a8448-bd17-43f2-8c02-d4ad87722b5e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14895',
  'x-ms-correlation-request-id': 'a6724971-0368-489b-a4d4-7157f2216e33',
  'x-ms-routing-request-id': 'WESTUS:20170602T140825Z:a6724971-0368-489b-a4d4-7157f2216e33',
  date: 'Fri, 02 Jun 2017 14:08:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'ed7613f3-5f2d-4317-bda3-6eac49767616',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14899',
  'x-ms-correlation-request-id': '7c9900f7-a561-42aa-bcbb-b8b8d8710435',
  'x-ms-routing-request-id': 'WESTUS:20170602T140855Z:7c9900f7-a561-42aa-bcbb-b8b8d8710435',
  date: 'Fri, 02 Jun 2017 14:08:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'ed7613f3-5f2d-4317-bda3-6eac49767616',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14899',
  'x-ms-correlation-request-id': '7c9900f7-a561-42aa-bcbb-b8b8d8710435',
  'x-ms-routing-request-id': 'WESTUS:20170602T140855Z:7c9900f7-a561-42aa-bcbb-b8b8d8710435',
  date: 'Fri, 02 Jun 2017 14:08:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'e7afda6f-278a-48ea-92c7-325840b4feb5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a6064a2b-c92f-47ca-92c3-b6dfc236a4d1',
  'x-ms-routing-request-id': 'WESTUS:20170602T140926Z:a6064a2b-c92f-47ca-92c3-b6dfc236a4d1',
  date: 'Fri, 02 Jun 2017 14:09:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'e7afda6f-278a-48ea-92c7-325840b4feb5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a6064a2b-c92f-47ca-92c3-b6dfc236a4d1',
  'x-ms-routing-request-id': 'WESTUS:20170602T140926Z:a6064a2b-c92f-47ca-92c3-b6dfc236a4d1',
  date: 'Fri, 02 Jun 2017 14:09:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '8babde43-a3db-4ef5-8995-0fb8b588d286',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b3d54503-e001-4fc7-994f-846911918e1a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T140957Z:b3d54503-e001-4fc7-994f-846911918e1a',
  date: 'Fri, 02 Jun 2017 14:09:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '8babde43-a3db-4ef5-8995-0fb8b588d286',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b3d54503-e001-4fc7-994f-846911918e1a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T140957Z:b3d54503-e001-4fc7-994f-846911918e1a',
  date: 'Fri, 02 Jun 2017 14:09:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '67c0c54b-067e-4c09-9503-1d0d62f63c2b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '5703675e-aecc-46a7-bb99-950871b40f29',
  'x-ms-routing-request-id': 'WESTUS2:20170602T141028Z:5703675e-aecc-46a7-bb99-950871b40f29',
  date: 'Fri, 02 Jun 2017 14:10:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '67c0c54b-067e-4c09-9503-1d0d62f63c2b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '5703675e-aecc-46a7-bb99-950871b40f29',
  'x-ms-routing-request-id': 'WESTUS2:20170602T141028Z:5703675e-aecc-46a7-bb99-950871b40f29',
  date: 'Fri, 02 Jun 2017 14:10:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"endTime\": \"2017-06-02T14:10:35.2429696+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '6daf65ab-b3a3-42e4-828c-3cf5c190f1ad',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '39966ce9-ec74-49cf-a3a0-38889d7964e7',
  'x-ms-routing-request-id': 'WESTUS2:20170602T141059Z:39966ce9-ec74-49cf-a3a0-38889d7964e7',
  date: 'Fri, 02 Jun 2017 14:10:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/9ba1b912-2786-43ac-b340-706e6269e9f1?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:07:54.2885476+00:00\",\r\n  \"endTime\": \"2017-06-02T14:10:35.2429696+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"9ba1b912-2786-43ac-b340-706e6269e9f1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '6daf65ab-b3a3-42e4-828c-3cf5c190f1ad',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '39966ce9-ec74-49cf-a3a0-38889d7964e7',
  'x-ms-routing-request-id': 'WESTUS2:20170602T141059Z:39966ce9-ec74-49cf-a3a0-38889d7964e7',
  date: 'Fri, 02 Jun 2017 14:10:59 GMT',
  connection: 'close' });
 return result; }]];