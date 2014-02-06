var TEST = (function(module) {
  module.PushMe = function(resultObject) {
    resultObject.prepend(
      Date() + '<br/>'
    );
  };

  return module;
}(TEST || {}));
