var TEST = (function(module) {
  module.PushMe = function(resultObject) {
    resultObject.prepend(
      device.name + '(' + device.uuid + ')' + ': ' + Date() + '<br/>'
    );
  };

  return module;
}(TEST || {}));
