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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"virtualNetworkPeeringName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n      \"etag\": \"W/\\\"4fcef45c-cd33-4e66-a1da-99da45291238\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"peeringState\": \"Initiated\",\r\n        \"remoteVirtualNetwork\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n        },\r\n        \"allowVirtualNetworkAccess\": false,\r\n        \"allowForwardedTraffic\": false,\r\n        \"allowGatewayTransit\": false,\r\n        \"useRemoteGateways\": false,\r\n        \"remoteAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"11.0.0.0/8\"\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '960',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8e4a7f36-ce57-4dbb-9e06-e3f10ed174f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '40e87d62-2c23-4915-a47a-66d465fd4001',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130110Z:40e87d62-2c23-4915-a47a-66d465fd4001',
  date: 'Fri, 01 Sep 2017 13:01:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"virtualNetworkPeeringName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n      \"etag\": \"W/\\\"4fcef45c-cd33-4e66-a1da-99da45291238\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"peeringState\": \"Initiated\",\r\n        \"remoteVirtualNetwork\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n        },\r\n        \"allowVirtualNetworkAccess\": false,\r\n        \"allowForwardedTraffic\": false,\r\n        \"allowGatewayTransit\": false,\r\n        \"useRemoteGateways\": false,\r\n        \"remoteAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"11.0.0.0/8\"\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '960',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8e4a7f36-ce57-4dbb-9e06-e3f10ed174f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '40e87d62-2c23-4915-a47a-66d465fd4001',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130110Z:40e87d62-2c23-4915-a47a-66d465fd4001',
  date: 'Fri, 01 Sep 2017 13:01:10 GMT',
  connection: 'close' });
 return result; }]];