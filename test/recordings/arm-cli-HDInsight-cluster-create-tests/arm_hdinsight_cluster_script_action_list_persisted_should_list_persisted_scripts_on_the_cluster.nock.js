// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796/scriptActions?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"testscriptname\",\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"applicationName\":null}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2054fc6e-0a1f-4a0c-b75c-a9125a528056',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14932',
  'x-ms-correlation-request-id': '34ddd6d5-de48-40c4-bc62-204a24e8bdaa',
  'x-ms-routing-request-id': 'WESTUS:20160426T211817Z:34ddd6d5-de48-40c4-bc62-204a24e8bdaa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 21:18:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796/scriptActions?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"testscriptname\",\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"applicationName\":null}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2054fc6e-0a1f-4a0c-b75c-a9125a528056',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14932',
  'x-ms-correlation-request-id': '34ddd6d5-de48-40c4-bc62-204a24e8bdaa',
  'x-ms-routing-request-id': 'WESTUS:20160426T211817Z:34ddd6d5-de48-40c4-bc62-204a24e8bdaa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 21:18:16 GMT',
  connection: 'close' });
 return result; }]];