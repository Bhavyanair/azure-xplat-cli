/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

/*

Generated Command List:

azure vmss-ext config virtual-machine-scale-set-extension set
--parameter-file $f
--parse
--name $name
--force-update-tag $forceUpdateTag
--publisher $publisher
--type $type
--type-handler-version $typeHandlerVersion
--auto-upgrade-minor-version $autoUpgradeMinorVersion
--settings $settings
--protected-settings $protectedSettings
--provisioning-state $provisioningState
--id $id

azure vmss-ext config virtual-machine-scale-set-extension delete
--parameter-file $f
--name
--force-update-tag
--publisher
--type
--type-handler-version
--auto-upgrade-minor-version
--settings
--protected-settings
--provisioning-state
--id

azure vmss-ext create 
--resource-group $p0
--name $p1
--vm-extension-name $p2
--extension-parameters $p3

azure vmss-ext config generate 
--parameter-file $f

azure vmss-ext config patch 
--parameter-file $f

azure vmss-ext delete 
--resource-group $p0
--name $p1
--vm-extension-name $p2

azure vmss-ext show 
--resource-group $p0
--name $p1
--vm-extension-name $p2
--expand $p3

azure vmss-ext list 
--resource-group $p0
--name $p1


*/

'use strict';
var fs = require('fs');
var jsonpatch = require('fast-json-patch');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;
function beautify(jsonText) {
  var obj = JSON.parse(jsonText);
  return JSON.stringify(obj, null, 2);
}
function capitalize(str) {
  if (str && str.length >= 1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  else {
    return str;
  }
}

function makeTuple(k, v, d) {
  return { key : k, value : v, depth : d };
}

function displayImpl(o, key, depth, arr) {
  if ((!!o) && (o.constructor === Object || o.constructor === Array)) {
    arr.push(makeTuple(key, '', depth));
    var len = 0;
    Object.keys(o).forEach(function(k1) {
      var v1 = o[k1];
      var p1 = o.constructor === Array ? '#' : '';
      var w = displayImpl(v1, p1 + k1, depth + 1, arr);
      if (w > len) {
        len = w;
      }
    });
    return len;
  }
  else {
    arr.push(makeTuple(key, o ? o.toString() : '', depth));
    return depth * 2 + (key ? key.toString().length : 0);
  }
}

function display(cli, o) {
  var arr = [];
  var width = displayImpl(o, '', 0, arr);
  for (var t in arr) {
    var prebuf = new Array(arr[t].depth * 2).join(' ');
    var key = arr[t].key ? arr[t].key : '';
    var postLen = width - (prebuf.length + key.length);
    var postbuf = new Array(postLen > 0 ? postLen : 0).join(' ');
    var str = prebuf + capitalize(key) + postbuf;
    if (arr[t].value) {
      str += ' : ' + arr[t].value;
    }
    cli.output.data(str);
  }
}
exports.init = function (cli) {



/*
  VirtualMachineScaleSetExtensions CreateOrUpdate
  --resource-group
  --name
  --vm-extension-name
  --extension-parameters
=============================================
{
  "name":"",
  "forceUpdateTag":"",
  "publisher":"",
  "type":"",
  "typeHandlerVersion":"",
  "autoUpgradeMinorVersion":null,
  "settings":{
  },
  "protectedSettings":{
  },
  "provisioningState":"",
  "id":null
}
*/
  var virtualMachineScaleSetExtensionsCreateOrUpdate = cli.category('vmss-ext')
  .description($('Commands to manage your virtual machine scale set extensions.  '));
  virtualMachineScaleSetExtensionsCreateOrUpdate.command('create [resource-group] [name] [vm-extension-name] [extension-parameters]')
  .description($('The operation to create or update an extension.'))
  .usage('[options] <resource-group> <name> <vm-extension-name> <extension-parameters>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('--vm-extension-name <vm-extension-name>', $('vm-extension-name'))
  .option('--extension-parameters <extension-parameters>', $('extension-parameters'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, vMssExtensionName, extensionParameters, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!vMssExtensionName) {
      vMssExtensionName = cli.interaction.promptIfNotGiven($('vm-extension-name : '), vMssExtensionName, _);
    }

    cli.output.verbose('vMssExtensionName = ' + vMssExtensionName);
    if (!extensionParameters) {
      extensionParameters = cli.interaction.promptIfNotGiven($('extension-parameters : '), extensionParameters, _);
    }

    cli.output.verbose('extensionParameters = ' + extensionParameters);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetExtensions.createOrUpdate(resourceGroup, name, vMssExtensionName, extensionParameters, _);
    if (result) {
      cli.output.json(result);
    }
  });
  var virtualMachineScaleSetExtensionsCreateOrUpdatecreateOrUpdateParameters3 = virtualMachineScaleSetExtensionsCreateOrUpdate.category('config')
  .description($('Commands to manage configuration of virtual-machine-scale-set-extensions in the parameter file.'));
  virtualMachineScaleSetExtensionsCreateOrUpdatecreateOrUpdateParameters3.command('create')
  .description($('Generate virtualMachineScaleSetExtensionsCreateOrUpdate parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options, _) {
    cli.output.verbose('{\"name\":\"\",\"forceUpdateTag\":\"\",\"publisher\":\"\",\"type\":\"\",\"typeHandlerVersion\":\"\",\"autoUpgradeMinorVersion\":null,\"settings\":{},\"protectedSettings\":{},\"provisioningState\":\"\",\"id\":null}', _);
    var filePath = 'virtualMachineScaleSetExtensionsCreateOrUpdate_createOrUpdate.json';
    if (options.parameterFile) {
      filePath = options.parameterFile;
    }
    fs.writeFileSync(filePath, beautify('{\r\n\"name\":\"\",\r\n\"forceUpdateTag\":\"\",\r\n\"publisher\":\"\",\r\n\"type\":\"\",\r\n\"typeHandlerVersion\":\"\",\r\n\"autoUpgradeMinorVersion\":null,\r\n\"settings\":{\r\n},\r\n\"protectedSettings\":{\r\n},\r\n\"provisioningState\":\"\",\r\n\"id\":null\r\n}'));
    cli.output.verbose('=====================================');
    cli.output.verbose('Parameter file output to: ' + filePath);
    cli.output.verbose('=====================================');
  });

  virtualMachineScaleSetExtensionsCreateOrUpdatecreateOrUpdateParameters3.command('patch')
  .description($('Command to patch virtualMachineScaleSetExtensionsCreateOrUpdate parameter JSON file.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--operation <operation>', $('The JSON patch operation: add, remove, or replace.'))
  .option('--path <path>', $('The JSON data path, e.g.: \"foo/1\".'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .execute(function(options, _) {
    cli.output.verbose(options.parameterFile, _);
    cli.output.verbose(options.operation);
    cli.output.verbose(options.path);
    cli.output.verbose(options.value);
    cli.output.verbose(options.parse);
    if (options.parse) {
      options.value = JSON.parse(options.value);
    }
    cli.output.verbose(options.value);
    cli.output.verbose('=====================================');
    cli.output.verbose('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.verbose('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var extensionParametersObj = JSON.parse(fileContent);
    cli.output.verbose('JSON object:');
    cli.output.verbose(JSON.stringify(extensionParametersObj));
    if (options.operation == 'add') {
      jsonpatch.apply(extensionParametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    else if (options.operation == 'remove') {
      jsonpatch.apply(extensionParametersObj, [{op: options.operation, path: options.path}]);
    }
    else if (options.operation == 'replace') {
      jsonpatch.apply(extensionParametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var updatedContent = JSON.stringify(extensionParametersObj);
    cli.output.verbose('=====================================');
    cli.output.verbose('JSON object (updated):');
    cli.output.verbose(JSON.stringify(extensionParametersObj));
    cli.output.verbose('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.verbose('=====================================');
    cli.output.verbose('Parameter file updated at: ' + options.parameterFile);
    cli.output.verbose('=====================================');
  });

  //config set virtual-machine-scale-set-extension
  var catparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension01 = cli.category('vmss-ext');
  var parametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension01 = catparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension01.category('config')
  .description($('Commands to manage configuration of virtual-machine-scale-set-extensions in the parameter file.'));
  var setparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension01 = parametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension01.category('virtual-machine-scale-set-extension')
  .description($('Commands to configure virtual-machine-scale-set-extension of vmss-ext in config file.'));
  setparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension01.command('set')
  .description($('Set virtual-machine-scale-set-extension in config string or files, e.g. \r\n{\r\n  "name":"",\r\n  "forceUpdateTag":"",\r\n  "publisher":"",\r\n  "type":"",\r\n  "typeHandlerVersion":"",\r\n  "autoUpgradeMinorVersion":null,\r\n  "settings":{\r\n  },\r\n  "protectedSettings":{\r\n  },\r\n  "provisioningState":"",\r\n  "id":null\r\n}\r\n         There are two sets of commands:\r\n           1) function commands that are used to manage Azure resources in the cloud, and \r\n           2) parameter commands that generate & edit input files for the other set of commands.\r\n         For example, \'vmss show/list/stop\' are the function commands that call get, list and stop operations of \r\n         virtual machine scale set, whereas \'vmss config * generate/create/set/delete/add\' commands \r\n         are used to configure the input parameter file. The \'vmss config\' command takes a parameter \r\n         file as for the VM scale set configuration, and creates it online.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--parse', $('Parse the input string, i.e. str, for parameters to a JSON object, e.g. JSON.parse(str).'))
  .option('--name <name>', $('Set the name value.'))
  .option('--force-update-tag <forceUpdateTag>', $('Set the force-update-tag value.'))
  .option('--publisher <publisher>', $('Set the publisher value.'))
  .option('--type <type>', $('Set the type value.'))
  .option('--type-handler-version <typeHandlerVersion>', $('Set the type-handler-version value.'))
  .option('--auto-upgrade-minor-version <autoUpgradeMinorVersion>', $('Set the auto-upgrade-minor-version value.'))
  .option('--settings <settings>', $('Set the settings value.'))
  .option('--protected-settings <protectedSettings>', $('Set the protected-settings value.'))
  .option('--provisioning-state <provisioningState>', $('Set the provisioning-state value.'))
  .option('--id <id>', $('Set the id value.'))
  .execute(function(options, _) {
    cli.output.verbose(JSON.stringify(options), _);
    if (!options.parameterFile) {
      options.parameterFile = cli.interaction.promptIfNotGiven($('parameter-file : '), options.parameterFile, _);
    }

    cli.output.verbose('=====================================');
    cli.output.verbose('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.verbose('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.verbose('JSON object:');
    cli.output.verbose(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '';
    var error = jsonpatch.validate([{op: 'remove', path: options.path}], parametersObj);
    if (typeof error !== 'undefined') {
      jsonpatch.apply(parametersObj, [{op: 'add', path: options.path, value: {}}]);
    }
    var paramPath = options.path + '/' + 'name';
    if (options.name) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.name);
      cli.output.verbose('================================================');
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = options.path + '/' + 'forceUpdateTag';
    if (options.forceUpdateTag) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.forceUpdateTag);
      cli.output.verbose('================================================');
      if (options.parse && options.forceUpdateTag) {
        options.forceUpdateTag = JSON.parse(options.forceUpdateTag);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.forceUpdateTag}]);
    }
    paramPath = options.path + '/' + 'publisher';
    if (options.publisher) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.publisher);
      cli.output.verbose('================================================');
      if (options.parse && options.publisher) {
        options.publisher = JSON.parse(options.publisher);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.publisher}]);
    }
    paramPath = options.path + '/' + 'type';
    if (options.type) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.type);
      cli.output.verbose('================================================');
      if (options.parse && options.type) {
        options.type = JSON.parse(options.type);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.type}]);
    }
    paramPath = options.path + '/' + 'typeHandlerVersion';
    if (options.typeHandlerVersion) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.typeHandlerVersion);
      cli.output.verbose('================================================');
      if (options.parse && options.typeHandlerVersion) {
        options.typeHandlerVersion = JSON.parse(options.typeHandlerVersion);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.typeHandlerVersion}]);
    }
    paramPath = options.path + '/' + 'autoUpgradeMinorVersion';
    if (options.autoUpgradeMinorVersion) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.autoUpgradeMinorVersion);
      cli.output.verbose('================================================');
      if (options.parse && options.autoUpgradeMinorVersion) {
        options.autoUpgradeMinorVersion = JSON.parse(options.autoUpgradeMinorVersion);
      }
      options.autoUpgradeMinorVersion = JSON.parse(options.autoUpgradeMinorVersion);
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.autoUpgradeMinorVersion}]);
    }
    paramPath = options.path + '/' + 'settings';
    if (options.settings) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.settings);
      cli.output.verbose('================================================');
      if (options.parse && options.settings) {
        options.settings = JSON.parse(options.settings);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.settings}]);
    }
    paramPath = options.path + '/' + 'protectedSettings';
    if (options.protectedSettings) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.protectedSettings);
      cli.output.verbose('================================================');
      if (options.parse && options.protectedSettings) {
        options.protectedSettings = JSON.parse(options.protectedSettings);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.protectedSettings}]);
    }
    paramPath = options.path + '/' + 'provisioningState';
    if (options.provisioningState) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.provisioningState);
      cli.output.verbose('================================================');
      if (options.parse && options.provisioningState) {
        options.provisioningState = JSON.parse(options.provisioningState);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.provisioningState}]);
    }
    paramPath = options.path + '/' + 'id';
    if (options.id) {
      cli.output.verbose('================================================');
      cli.output.verbose('Path  : ' + paramPath);
      cli.output.verbose('Value : ' + options.id);
      cli.output.verbose('================================================');
      if (options.parse && options.id) {
        options.id = JSON.parse(options.id);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.id}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.verbose('=====================================');
    cli.output.verbose('JSON object (updated):');
    cli.output.verbose(JSON.stringify(parametersObj));
    cli.output.verbose('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.verbose('=====================================');
    cli.output.verbose('Parameter file updated at: ' + options.parameterFile);
    cli.output.verbose('=====================================');
  });

  //config delete virtual-machine-scale-set-extension
  var catparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension11 = cli.category('vmss-ext');
  var parametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension11 = catparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension11.category('config')
  .description($('Commands to manage configuration of virtual-machine-scale-set-extensions in the parameter file.'));
  var deleteparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension11 = parametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension11.category('virtual-machine-scale-set-extension')
  .description($('Commands to configure virtual-machine-scale-set-extension of vmss-ext in config file.'));
  deleteparametersCreateOrUpdateVirtualMachineScaleSetExtensionsVirtualMachineScaleSetExtension11.command('delete')
  .description($('Remove virtual-machine-scale-set-extension in config string or files, e.g. \r\n{\r\n  "name":"",\r\n  "forceUpdateTag":"",\r\n  "publisher":"",\r\n  "type":"",\r\n  "typeHandlerVersion":"",\r\n  "autoUpgradeMinorVersion":null,\r\n  "settings":{\r\n  },\r\n  "protectedSettings":{\r\n  },\r\n  "provisioningState":"",\r\n  "id":null\r\n}\r\n         There are two sets of commands:\r\n           1) function commands that are used to manage Azure resources in the cloud, and \r\n           2) parameter commands that generate & edit input files for the other set of commands.\r\n         For example, \'vmss show/list/stop\' are the function commands that call get, list and stop operations of \r\n         virtual machine scale set, whereas \'vmss config * generate/create/set/delete/add\' commands \r\n         are used to configure the input parameter file. The \'vmss config\' command takes a parameter \r\n         file as for the VM scale set configuration, and creates it online.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--name', $('Remove the name value.'))
  .option('--force-update-tag', $('Remove the force-update-tag value.'))
  .option('--publisher', $('Remove the publisher value.'))
  .option('--type', $('Remove the type value.'))
  .option('--type-handler-version', $('Remove the type-handler-version value.'))
  .option('--auto-upgrade-minor-version', $('Remove the auto-upgrade-minor-version value.'))
  .option('--settings', $('Remove the settings value.'))
  .option('--protected-settings', $('Remove the protected-settings value.'))
  .option('--provisioning-state', $('Remove the provisioning-state value.'))
  .option('--id', $('Remove the id value.'))
  .execute(function(options, _) {
    cli.output.verbose(JSON.stringify(options), _);
    if (!options.parameterFile) {
      options.parameterFile = cli.interaction.promptIfNotGiven($('parameter-file : '), options.parameterFile, _);
    }

    cli.output.verbose('=====================================');
    cli.output.verbose('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.verbose('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.verbose('JSON object:');
    cli.output.verbose(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '';
    var anySubItem = false || options.name || options.forceUpdateTag || options.publisher || options.type || options.typeHandlerVersion || options.autoUpgradeMinorVersion || options.settings || options.protectedSettings || options.provisioningState || options.id;
    if (anySubItem) {
      var subItemPath = null;
      if (options.name) {
        subItemPath = options.path + '/name';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.forceUpdateTag) {
        subItemPath = options.path + '/forceUpdateTag';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.publisher) {
        subItemPath = options.path + '/publisher';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.type) {
        subItemPath = options.path + '/type';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.typeHandlerVersion) {
        subItemPath = options.path + '/typeHandlerVersion';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.autoUpgradeMinorVersion) {
        subItemPath = options.path + '/autoUpgradeMinorVersion';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.settings) {
        subItemPath = options.path + '/settings';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.protectedSettings) {
        subItemPath = options.path + '/protectedSettings';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.provisioningState) {
        subItemPath = options.path + '/provisioningState';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
      if (options.id) {
        subItemPath = options.path + '/id';
        jsonpatch.apply(parametersObj, [{op: options.operation, path: subItemPath}]);
      }
    }
    else {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    }
    
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.verbose('=====================================');
    cli.output.verbose('JSON object (updated):');
    cli.output.verbose(JSON.stringify(parametersObj));
    cli.output.verbose('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.verbose('=====================================');
    cli.output.verbose('Parameter file updated at: ' + options.parameterFile);
    cli.output.verbose('=====================================');
  });

/*
  VirtualMachineScaleSetExtensions Delete
  --resource-group
  --name
  --vm-extension-name
*/
  var virtualMachineScaleSetExtensionsDelete = cli.category('vmss-ext')
  .description($('Commands to manage your virtual machine scale set extensions.  '));
  virtualMachineScaleSetExtensionsDelete.command('delete [resource-group] [name] [vm-extension-name]')
  .description($('The operation to delete the extension.'))
  .usage('[options] <resource-group> <name> <vm-extension-name>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('--vm-extension-name <vm-extension-name>', $('vm-extension-name'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, vMssExtensionName, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!vMssExtensionName) {
      vMssExtensionName = cli.interaction.promptIfNotGiven($('vm-extension-name : '), vMssExtensionName, _);
    }

    cli.output.verbose('vMssExtensionName = ' + vMssExtensionName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetExtensions.deleteMethod(resourceGroup, name, vMssExtensionName, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  VirtualMachineScaleSetExtensions Get
  --resource-group
  --name
  --vm-extension-name
  --expand
*/
  var virtualMachineScaleSetExtensionsGet = cli.category('vmss-ext')
  .description($('Commands to manage your virtual machine scale set extensions.  '));
  virtualMachineScaleSetExtensionsGet.command('show [resource-group] [name] [vm-extension-name] [expand]')
  .description($('The operation to get the extension.'))
  .usage('[options] <resource-group> <name> <vm-extension-name> <expand>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('--vm-extension-name <vm-extension-name>', $('vm-extension-name'))
  .option('--expand <expand>', $('expand'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, vMssExtensionName, expand, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!vMssExtensionName) {
      vMssExtensionName = cli.interaction.promptIfNotGiven($('vm-extension-name : '), vMssExtensionName, _);
    }

    cli.output.verbose('vMssExtensionName = ' + vMssExtensionName);
    if (!expand) {
      expand = cli.interaction.promptIfNotGiven($('expand : '), expand, _);
    }

    cli.output.verbose('expand = ' + expand);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetExtensions.get(resourceGroup, name, vMssExtensionName, expand, _);
    if (cli.output.format().json) {
      cli.output.json(result);
    }
    else {
      display(cli, result);
    }
  });
/*
  VirtualMachineScaleSetExtensions List
  --resource-group
  --name
*/
  var virtualMachineScaleSetExtensionsList = cli.category('vmss-ext')
  .description($('Commands to manage your virtual machine scale set extensions.  '));
  virtualMachineScaleSetExtensionsList.command('list [resource-group] [name]')
  .description($('Gets a list of all extensions in a VM scale set.'))
  .usage('[options] <resource-group> <name>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetExtensions.list(resourceGroup, name, _);
    var nextPageLink = result.nextLink;
    while (nextPageLink) {
      var pageResult = computeManagementClient.virtualMachineScaleSetExtensions.listNext(nextPageLink, _);
      pageResult.forEach(function(item) {
        result.push(item);
      });
      nextPageLink = pageResult.nextLink;
    }

    if (cli.output.format().json) {
      cli.output.json(result);
    }
    else {
      cli.output.table(result, function (row, item) {
        var rgName = item.id ? utils.parseResourceReferenceUri(item.id).resourceGroupName : null;
        row.cell($('ResourceGroupName'), rgName);
        row.cell($('Name'), item.name);
        row.cell($('ProvisioningState'), item.provisioningState);
        row.cell($('Location'), item.location);
      });
    }
  });


};
