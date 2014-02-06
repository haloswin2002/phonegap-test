var TEST = (function(module) {
  module.PushMe = function(resultObject) {
    resultObject.prepend(
      Date() + '<br/>' +
      device.uuid + '</br>'
    );
  };

  return module;
}(TEST || {}));
