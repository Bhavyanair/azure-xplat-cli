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

azure vmssvm deallocate 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm delete 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm show 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm get-instance-view 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm list 
--resource-group $p0
--name $p1

azure vmssvm power-off 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm reimage 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm reimage-all 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm restart 
--resource-group $p0
--name $p1
--instance-id $p2

azure vmssvm start 
--resource-group $p0
--name $p1
--instance-id $p2


*/

'use strict';

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;
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
  VirtualMachineScaleSetVMs Deallocate
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsDeallocate = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsDeallocate.command('deallocate [resource-group] [name] [instance-id]')
  .description($('Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.deallocate(resourceGroup, name, instanceId, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  VirtualMachineScaleSetVMs Delete
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsDelete = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsDelete.command('delete [resource-group] [name] [instance-id]')
  .description($('Deletes a virtual machine from a VM scale set.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.deleteMethod(resourceGroup, name, instanceId, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  VirtualMachineScaleSetVMs Get
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsGet = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsGet.command('show [resource-group] [name] [instance-id]')
  .description($('Gets a virtual machine from a VM scale set.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.get(resourceGroup, name, instanceId, _);
    if (cli.output.format().json) {
      cli.output.json(result);
    }
    else {
      display(cli, result);
    }
  });
/*
  VirtualMachineScaleSetVMs GetInstanceView
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsGetInstanceView = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsGetInstanceView.command('get-instance-view [resource-group] [name] [instance-id]')
  .description($('Gets the status of a virtual machine from a VM scale set.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.getInstanceView(resourceGroup, name, instanceId, _);
    if (cli.output.format().json) {
      cli.output.json(result);
    }
    else {
      display(cli, result);
    }
  });
/*
  VirtualMachineScaleSetVMs List
  --resource-group
  --name
*/
  var virtualMachineScaleSetVMsList = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsList.command('list [resource-group] [name]')
  .description($('Gets a list of all virtual machines in a VM scale sets.'))
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
    var result = computeManagementClient.virtualMachineScaleSetVMs.list(resourceGroup, name, _);
    var nextPageLink = result.nextLink;
    while (nextPageLink) {
      var pageResult = computeManagementClient.virtualMachineScaleSetVMs.listNext(nextPageLink, _);
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
/*
  VirtualMachineScaleSetVMs PowerOff
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsPowerOff = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsPowerOff.command('power-off [resource-group] [name] [instance-id]')
  .description($('Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.powerOff(resourceGroup, name, instanceId, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  VirtualMachineScaleSetVMs Reimage
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsReimage = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsReimage.command('reimage [resource-group] [name] [instance-id]')
  .description($('Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.reimage(resourceGroup, name, instanceId, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  VirtualMachineScaleSetVMs ReimageAll
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsReimageAll = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsReimageAll.command('reimage-all [resource-group] [name] [instance-id]')
  .description($('Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This operation is only supported for managed disks.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.reimageAll(resourceGroup, name, instanceId, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  VirtualMachineScaleSetVMs Restart
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsRestart = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsRestart.command('restart [resource-group] [name] [instance-id]')
  .description($('Restarts a virtual machine in a VM scale set.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.restart(resourceGroup, name, instanceId, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  VirtualMachineScaleSetVMs Start
  --resource-group
  --name
  --instance-id
*/
  var virtualMachineScaleSetVMsStart = cli.category('vmssvm')
  .description($('Commands to manage your virtual machine scale set vm.  '));
  virtualMachineScaleSetVMsStart.command('start [resource-group] [name] [instance-id]')
  .description($('Starts a virtual machine in a VM scale set.'))
  .usage('[options] <resource-group> <name> <instance-id>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-d, --instance-id <instance-id>', $('instance-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, instanceId, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resourceGroup = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!instanceId) {
      instanceId = cli.interaction.promptIfNotGiven($('instance-id : '), instanceId, _);
    }

    cli.output.verbose('instanceId = ' + instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.start(resourceGroup, name, instanceId, _);
    if (result) {
      cli.output.json(result);
    }
  });


};
