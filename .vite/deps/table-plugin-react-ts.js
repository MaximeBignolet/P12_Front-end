import {
  require_react
} from "./chunk-URNRBCZE.js";
import {
  __commonJS,
  __toESM
} from "./chunk-LNEMQRCO.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn2, construct) {
          if (!fn2 || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn2);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn2, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn2.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn2();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn2.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn2.displayName);
                        }
                        {
                          if (typeof fn2 === "function") {
                            componentFrameCache.set(fn2, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn2 ? fn2.displayName || fn2.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn2 === "function") {
              componentFrameCache.set(fn2, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn2, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn2, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e2) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/table-plugin-react-ts/dist/components/Table/index.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/table-plugin-react-ts/dist/components/Pagination/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var l = ({
  currentPage: t,
  totalPages: o,
  handlePagination: a
}) => (0, import_jsx_runtime.jsx)("div", { children: Array.from({ length: o }, (n, r) => r + 1).map((n) => (0, import_jsx_runtime.jsx)(
  "button",
  {
    onClick: () => a(n),
    className: t === n ? "active pagination" : "pagination",
    children: n
  },
  n
)) });

// node_modules/table-plugin-react-ts/dist/components/Table/index.js
import "/Users/mbignolet/Documents/OC/Front/P12_Front-end/node_modules/table-plugin-react-ts/dist/assets/index.css";
function Jt(e2, t) {
  var n = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e2, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function p(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jt(Object(n), true).forEach(function(a) {
      q(e2, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach(function(a) {
      Object.defineProperty(e2, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e2;
}
function Ze(e2) {
  "@babel/helpers - typeof";
  return Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ze(e2);
}
function va(e2, t) {
  if (!(e2 instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pa(e2, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(e2, a.key, a);
  }
}
function ba(e2, t, n) {
  return t && pa(e2.prototype, t), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function q(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[t] = n, e2;
}
function Mt(e2, t) {
  return ya(e2) || wa(e2, t) || jn(e2, t) || ka();
}
function je(e2) {
  return ga(e2) || ha(e2) || jn(e2) || xa();
}
function ga(e2) {
  if (Array.isArray(e2))
    return ht(e2);
}
function ya(e2) {
  if (Array.isArray(e2))
    return e2;
}
function ha(e2) {
  if (typeof Symbol < "u" && e2[Symbol.iterator] != null || e2["@@iterator"] != null)
    return Array.from(e2);
}
function wa(e2, t) {
  var n = e2 == null ? null : typeof Symbol < "u" && e2[Symbol.iterator] || e2["@@iterator"];
  if (n != null) {
    var a = [], r = true, i2 = false, o, s;
    try {
      for (n = n.call(e2); !(r = (o = n.next()).done) && (a.push(o.value), !(t && a.length === t)); r = true)
        ;
    } catch (f) {
      i2 = true, s = f;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i2)
          throw s;
      }
    }
    return a;
  }
}
function jn(e2, t) {
  if (e2) {
    if (typeof e2 == "string")
      return ht(e2, t);
    var n = Object.prototype.toString.call(e2).slice(8, -1);
    if (n === "Object" && e2.constructor && (n = e2.constructor.name), n === "Map" || n === "Set")
      return Array.from(e2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ht(e2, t);
  }
}
function ht(e2, t) {
  (t == null || t > e2.length) && (t = e2.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e2[n];
  return a;
}
function xa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ka() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Zt = function() {
};
var jt = {};
var Ln = {};
var Dn = null;
var Fn = {
  mark: Zt,
  measure: Zt
};
try {
  typeof window < "u" && (jt = window), typeof document < "u" && (Ln = document), typeof MutationObserver < "u" && (Dn = MutationObserver), typeof performance < "u" && (Fn = performance);
} catch {
}
var Aa = jt.navigator || {};
var Qt = Aa.userAgent;
var en = Qt === void 0 ? "" : Qt;
var ce = jt;
var Y = Ln;
var tn = Dn;
var ze = Fn;
ce.document;
var fe = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function";
var $n = ~en.indexOf("MSIE") || ~en.indexOf("Trident/");
var Ye;
var We;
var Ue;
var He;
var qe;
var ie = "___FONT_AWESOME___";
var wt = 16;
var zn = "fa";
var Yn = "svg-inline--fa";
var be = "data-fa-i2svg";
var xt = "data-fa-pseudo-element";
var Ea = "data-fa-pseudo-element-pending";
var Lt = "data-prefix";
var Dt = "data-icon";
var nn = "fontawesome-i2svg";
var Oa = "async";
var Sa = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var Wn = function() {
  try {
    return false;
  } catch {
    return false;
  }
}();
var z = "classic";
var U = "sharp";
var Ft = [z, U];
function Le(e2) {
  return new Proxy(e2, {
    get: function(n, a) {
      return a in n ? n[a] : n[z];
    }
  });
}
var _e = Le((Ye = {}, q(Ye, z, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), q(Ye, U, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ye));
var Ie = Le((We = {}, q(We, z, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), q(We, U, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), We));
var Re = Le((Ue = {}, q(Ue, z, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), q(Ue, U, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Ue));
var Pa = Le((He = {}, q(He, z, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), q(He, U, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), He));
var Ta = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/;
var Un = "fa-layers-text";
var Ca = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var _a = Le((qe = {}, q(qe, z, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), q(qe, U, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), qe));
var Hn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var Ia = Hn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var Ra = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var ve = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var Ne = /* @__PURE__ */ new Set();
Object.keys(Ie[z]).map(Ne.add.bind(Ne));
Object.keys(Ie[U]).map(Ne.add.bind(Ne));
var Na = [].concat(Ft, je(Ne), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ve.GROUP, ve.SWAP_OPACITY, ve.PRIMARY, ve.SECONDARY]).concat(Hn.map(function(e2) {
  return "".concat(e2, "x");
})).concat(Ia.map(function(e2) {
  return "w-".concat(e2);
}));
var Te = ce.FontAwesomeConfig || {};
function Ma(e2) {
  var t = Y.querySelector("script[" + e2 + "]");
  if (t)
    return t.getAttribute(e2);
}
function ja(e2) {
  return e2 === "" ? true : e2 === "false" ? false : e2 === "true" ? true : e2;
}
if (Y && typeof Y.querySelector == "function") {
  La = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  La.forEach(function(e2) {
    var t = Mt(e2, 2), n = t[0], a = t[1], r = ja(Ma(n));
    r != null && (Te[a] = r);
  });
}
var La;
var qn = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: zn,
  replacementClass: Yn,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
Te.familyPrefix && (Te.cssPrefix = Te.familyPrefix);
var Ee = p(p({}, qn), Te);
Ee.autoReplaceSvg || (Ee.observeMutations = false);
var y = {};
Object.keys(qn).forEach(function(e2) {
  Object.defineProperty(y, e2, {
    enumerable: true,
    set: function(n) {
      Ee[e2] = n, Ce.forEach(function(a) {
        return a(y);
      });
    },
    get: function() {
      return Ee[e2];
    }
  });
});
Object.defineProperty(y, "familyPrefix", {
  enumerable: true,
  set: function(t) {
    Ee.cssPrefix = t, Ce.forEach(function(n) {
      return n(y);
    });
  },
  get: function() {
    return Ee.cssPrefix;
  }
});
ce.FontAwesomeConfig = y;
var Ce = [];
function Da(e2) {
  return Ce.push(e2), function() {
    Ce.splice(Ce.indexOf(e2), 1);
  };
}
var le = wt;
var ae = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function Fa(e2) {
  if (!(!e2 || !fe)) {
    var t = Y.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e2;
    for (var n = Y.head.childNodes, a = null, r = n.length - 1; r > -1; r--) {
      var i2 = n[r], o = (i2.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (a = i2);
    }
    return Y.head.insertBefore(t, a), e2;
  }
}
var $a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Me() {
  for (var e2 = 12, t = ""; e2-- > 0; )
    t += $a[Math.random() * 62 | 0];
  return t;
}
function Oe(e2) {
  for (var t = [], n = (e2 || []).length >>> 0; n--; )
    t[n] = e2[n];
  return t;
}
function $t(e2) {
  return e2.classList ? Oe(e2.classList) : (e2.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Vn(e2) {
  return "".concat(e2).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function za(e2) {
  return Object.keys(e2 || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(Vn(e2[n]), '" ');
  }, "").trim();
}
function nt(e2) {
  return Object.keys(e2 || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e2[n].trim(), ";");
  }, "");
}
function zt(e2) {
  return e2.size !== ae.size || e2.x !== ae.x || e2.y !== ae.y || e2.rotate !== ae.rotate || e2.flipX || e2.flipY;
}
function Ya(e2) {
  var t = e2.transform, n = e2.containerWidth, a = e2.iconWidth, r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i2 = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), f = {
    transform: "".concat(i2, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: f,
    path: c
  };
}
function Wa(e2) {
  var t = e2.transform, n = e2.width, a = n === void 0 ? wt : n, r = e2.height, i2 = r === void 0 ? wt : r, o = e2.startCentered, s = o === void 0 ? false : o, f = "";
  return s && $n ? f += "translate(".concat(t.x / le - a / 2, "em, ").concat(t.y / le - i2 / 2, "em) ") : s ? f += "translate(calc(-50% + ".concat(t.x / le, "em), calc(-50% + ").concat(t.y / le, "em)) ") : f += "translate(".concat(t.x / le, "em, ").concat(t.y / le, "em) "), f += "scale(".concat(t.size / le * (t.flipX ? -1 : 1), ", ").concat(t.size / le * (t.flipY ? -1 : 1), ") "), f += "rotate(".concat(t.rotate, "deg) "), f;
}
var Ua = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Xn() {
  var e2 = zn, t = Yn, n = y.cssPrefix, a = y.replacementClass, r = Ua;
  if (n !== e2 || a !== t) {
    var i2 = new RegExp("\\.".concat(e2, "\\-"), "g"), o = new RegExp("\\--".concat(e2, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(i2, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
var an = false;
function ft() {
  y.autoAddCss && !an && (Fa(Xn()), an = true);
}
var Ha = {
  mixout: function() {
    return {
      dom: {
        css: Xn,
        insertCss: ft
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        ft();
      },
      beforeI2svg: function() {
        ft();
      }
    };
  }
};
var oe = ce || {};
oe[ie] || (oe[ie] = {});
oe[ie].styles || (oe[ie].styles = {});
oe[ie].hooks || (oe[ie].hooks = {});
oe[ie].shims || (oe[ie].shims = []);
var Q = oe[ie];
var Bn = [];
var qa = function e() {
  Y.removeEventListener("DOMContentLoaded", e), Qe = 1, Bn.map(function(t) {
    return t();
  });
};
var Qe = false;
fe && (Qe = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), Qe || Y.addEventListener("DOMContentLoaded", qa));
function Va(e2) {
  fe && (Qe ? setTimeout(e2, 0) : Bn.push(e2));
}
function De(e2) {
  var t = e2.tag, n = e2.attributes, a = n === void 0 ? {} : n, r = e2.children, i2 = r === void 0 ? [] : r;
  return typeof e2 == "string" ? Vn(e2) : "<".concat(t, " ").concat(za(a), ">").concat(i2.map(De).join(""), "</").concat(t, ">");
}
function rn(e2, t, n) {
  if (e2 && e2[t] && e2[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e2[t][n]
    };
}
var lt = function(t, n, a, r) {
  var i2 = Object.keys(t), o = i2.length, s = n, f, c, l2;
  for (a === void 0 ? (f = 1, l2 = t[i2[0]]) : (f = 0, l2 = a); f < o; f++)
    c = i2[f], l2 = s(l2, t[c], c, t);
  return l2;
};
function Xa(e2) {
  for (var t = [], n = 0, a = e2.length; n < a; ) {
    var r = e2.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      var i2 = e2.charCodeAt(n++);
      (i2 & 64512) == 56320 ? t.push(((r & 1023) << 10) + (i2 & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
function kt(e2) {
  var t = Xa(e2);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ba(e2, t) {
  var n = e2.length, a = e2.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e2.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function on(e2) {
  return Object.keys(e2).reduce(function(t, n) {
    var a = e2[n], r = !!a.icon;
    return r ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function At(e2, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.skipHooks, r = a === void 0 ? false : a, i2 = on(t);
  typeof Q.hooks.addPack == "function" && !r ? Q.hooks.addPack(e2, on(t)) : Q.styles[e2] = p(p({}, Q.styles[e2] || {}), i2), e2 === "fas" && At("fa", t);
}
var Ve;
var Xe;
var Be;
var we = Q.styles;
var Ga = Q.shims;
var Ka = (Ve = {}, q(Ve, z, Object.values(Re[z])), q(Ve, U, Object.values(Re[U])), Ve);
var Yt = null;
var Gn = {};
var Kn = {};
var Jn = {};
var Zn = {};
var Qn = {};
var Ja = (Xe = {}, q(Xe, z, Object.keys(_e[z])), q(Xe, U, Object.keys(_e[U])), Xe);
function Za(e2) {
  return ~Na.indexOf(e2);
}
function Qa(e2, t) {
  var n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e2 && r !== "" && !Za(r) ? r : null;
}
var ea = function() {
  var t = function(i2) {
    return lt(we, function(o, s, f) {
      return o[f] = lt(s, i2, {}), o;
    }, {});
  };
  Gn = t(function(r, i2, o) {
    if (i2[3] && (r[i2[3]] = o), i2[2]) {
      var s = i2[2].filter(function(f) {
        return typeof f == "number";
      });
      s.forEach(function(f) {
        r[f.toString(16)] = o;
      });
    }
    return r;
  }), Kn = t(function(r, i2, o) {
    if (r[o] = o, i2[2]) {
      var s = i2[2].filter(function(f) {
        return typeof f == "string";
      });
      s.forEach(function(f) {
        r[f] = o;
      });
    }
    return r;
  }), Qn = t(function(r, i2, o) {
    var s = i2[2];
    return r[o] = o, s.forEach(function(f) {
      r[f] = o;
    }), r;
  });
  var n = "far" in we || y.autoFetchSvg, a = lt(Ga, function(r, i2) {
    var o = i2[0], s = i2[1], f = i2[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: f
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: f
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Jn = a.names, Zn = a.unicodes, Yt = at(y.styleDefault, {
    family: y.familyDefault
  });
};
Da(function(e2) {
  Yt = at(e2.styleDefault, {
    family: y.familyDefault
  });
});
ea();
function Wt(e2, t) {
  return (Gn[e2] || {})[t];
}
function er(e2, t) {
  return (Kn[e2] || {})[t];
}
function pe(e2, t) {
  return (Qn[e2] || {})[t];
}
function ta(e2) {
  return Jn[e2] || {
    prefix: null,
    iconName: null
  };
}
function tr(e2) {
  var t = Zn[e2], n = Wt("fas", e2);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ue() {
  return Yt;
}
var Ut = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function at(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, a = n === void 0 ? z : n, r = _e[a][e2], i2 = Ie[a][e2] || Ie[a][r], o = e2 in Q.styles ? e2 : null;
  return i2 || o || null;
}
var sn = (Be = {}, q(Be, z, Object.keys(Re[z])), q(Be, U, Object.keys(Re[U])), Be);
function rt(e2) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.skipLookups, r = a === void 0 ? false : a, i2 = (t = {}, q(t, z, "".concat(y.cssPrefix, "-").concat(z)), q(t, U, "".concat(y.cssPrefix, "-").concat(U)), t), o = null, s = z;
  (e2.includes(i2[z]) || e2.some(function(c) {
    return sn[z].includes(c);
  })) && (s = z), (e2.includes(i2[U]) || e2.some(function(c) {
    return sn[U].includes(c);
  })) && (s = U);
  var f = e2.reduce(function(c, l2) {
    var u = Qa(y.cssPrefix, l2);
    if (we[l2] ? (l2 = Ka[s].includes(l2) ? Pa[s][l2] : l2, o = l2, c.prefix = l2) : Ja[s].indexOf(l2) > -1 ? (o = l2, c.prefix = at(l2, {
      family: s
    })) : u ? c.iconName = u : l2 !== y.replacementClass && l2 !== i2[z] && l2 !== i2[U] && c.rest.push(l2), !r && c.prefix && c.iconName) {
      var b = o === "fa" ? ta(c.iconName) : {}, h = pe(c.prefix, c.iconName);
      b.prefix && (o = null), c.iconName = b.iconName || h || c.iconName, c.prefix = b.prefix || c.prefix, c.prefix === "far" && !we.far && we.fas && !y.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Ut());
  return (e2.includes("fa-brands") || e2.includes("fab")) && (f.prefix = "fab"), (e2.includes("fa-duotone") || e2.includes("fad")) && (f.prefix = "fad"), !f.prefix && s === U && (we.fass || y.autoFetchSvg) && (f.prefix = "fass", f.iconName = pe(f.prefix, f.iconName) || f.iconName), (f.prefix === "fa" || o === "fa") && (f.prefix = ue() || "fas"), f;
}
var nr = function() {
  function e2() {
    va(this, e2), this.definitions = {};
  }
  return ba(e2, [{
    key: "add",
    value: function() {
      for (var n = this, a = arguments.length, r = new Array(a), i2 = 0; i2 < a; i2++)
        r[i2] = arguments[i2];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = p(p({}, n.definitions[s] || {}), o[s]), At(s, o[s]);
        var f = Re[z][s];
        f && At(f, o[s]), ea();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, a) {
      var r = a.prefix && a.iconName && a.icon ? {
        0: a
      } : a;
      return Object.keys(r).map(function(i2) {
        var o = r[i2], s = o.prefix, f = o.iconName, c = o.icon, l2 = c[2];
        n[s] || (n[s] = {}), l2.length > 0 && l2.forEach(function(u) {
          typeof u == "string" && (n[s][u] = c);
        }), n[s][f] = c;
      }), n;
    }
  }]), e2;
}();
var fn = [];
var xe = {};
var Ae = {};
var ar = Object.keys(Ae);
function rr(e2, t) {
  var n = t.mixoutsTo;
  return fn = e2, xe = {}, Object.keys(Ae).forEach(function(a) {
    ar.indexOf(a) === -1 && delete Ae[a];
  }), fn.forEach(function(a) {
    var r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (n[o] = r[o]), Ze(r[o]) === "object" && Object.keys(r[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = r[o][s];
      });
    }), a.hooks) {
      var i2 = a.hooks();
      Object.keys(i2).forEach(function(o) {
        xe[o] || (xe[o] = []), xe[o].push(i2[o]);
      });
    }
    a.provides && a.provides(Ae);
  }), n;
}
function Et(e2, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  var i2 = xe[e2] || [];
  return i2.forEach(function(o) {
    t = o.apply(null, [t].concat(a));
  }), t;
}
function ge(e2) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  var r = xe[e2] || [];
  r.forEach(function(i2) {
    i2.apply(null, n);
  });
}
function se() {
  var e2 = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ae[e2] ? Ae[e2].apply(null, t) : void 0;
}
function Ot(e2) {
  e2.prefix === "fa" && (e2.prefix = "fas");
  var t = e2.iconName, n = e2.prefix || ue();
  if (t)
    return t = pe(n, t) || t, rn(na.definitions, n, t) || rn(Q.styles, n, t);
}
var na = new nr();
var ir = function() {
  y.autoReplaceSvg = false, y.observeMutations = false, ge("noAuto");
};
var or = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return fe ? (ge("beforeI2svg", t), se("pseudoElements2svg", t), se("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    y.autoReplaceSvg === false && (y.autoReplaceSvg = true), y.observeMutations = true, Va(function() {
      fr({
        autoReplaceSvgRoot: n
      }), ge("watch", t);
    });
  }
};
var sr = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Ze(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: pe(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], a = at(t[0]);
      return {
        prefix: a,
        iconName: pe(a, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(y.cssPrefix, "-")) > -1 || t.match(Ta))) {
      var r = rt(t.split(" "), {
        skipLookups: true
      });
      return {
        prefix: r.prefix || ue(),
        iconName: pe(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var i2 = ue();
      return {
        prefix: i2,
        iconName: pe(i2, t) || t
      };
    }
  }
};
var J = {
  noAuto: ir,
  config: y,
  dom: or,
  parse: sr,
  library: na,
  findIconDefinition: Ot,
  toHtml: De
};
var fr = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, a = n === void 0 ? Y : n;
  (Object.keys(Q.styles).length > 0 || y.autoFetchSvg) && fe && y.autoReplaceSvg && J.dom.i2svg({
    node: a
  });
};
function it(e2, t) {
  return Object.defineProperty(e2, "abstract", {
    get: t
  }), Object.defineProperty(e2, "html", {
    get: function() {
      return e2.abstract.map(function(a) {
        return De(a);
      });
    }
  }), Object.defineProperty(e2, "node", {
    get: function() {
      if (fe) {
        var a = Y.createElement("div");
        return a.innerHTML = e2.html, a.children;
      }
    }
  }), e2;
}
function lr(e2) {
  var t = e2.children, n = e2.main, a = e2.mask, r = e2.attributes, i2 = e2.styles, o = e2.transform;
  if (zt(o) && n.found && !a.found) {
    var s = n.width, f = n.height, c = {
      x: s / f / 2,
      y: 0.5
    };
    r.style = nt(p(p({}, i2), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function cr(e2) {
  var t = e2.prefix, n = e2.iconName, a = e2.children, r = e2.attributes, i2 = e2.symbol, o = i2 === true ? "".concat(t, "-").concat(y.cssPrefix, "-").concat(n) : i2;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: p(p({}, r), {}, {
        id: o
      }),
      children: a
    }]
  }];
}
function Ht(e2) {
  var t = e2.icons, n = t.main, a = t.mask, r = e2.prefix, i2 = e2.iconName, o = e2.transform, s = e2.symbol, f = e2.title, c = e2.maskId, l2 = e2.titleId, u = e2.extra, b = e2.watchable, h = b === void 0 ? false : b, E = a.found ? a : n, x = E.width, w = E.height, _ = r === "fak", L = [y.replacementClass, i2 ? "".concat(y.cssPrefix, "-").concat(i2) : ""].filter(function(V) {
    return u.classes.indexOf(V) === -1;
  }).filter(function(V) {
    return V !== "" || !!V;
  }).concat(u.classes).join(" "), A = {
    children: [],
    attributes: p(p({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": i2,
      class: L,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(w)
    })
  }, R = _ && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(x / w * 16 * 0.0625, "em")
  } : {};
  h && (A.attributes[be] = ""), f && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(l2 || Me())
    },
    children: [f]
  }), delete A.attributes.title);
  var m = p(p({}, A), {}, {
    prefix: r,
    iconName: i2,
    main: n,
    mask: a,
    maskId: c,
    transform: o,
    symbol: s,
    styles: p(p({}, R), u.styles)
  }), P = a.found && n.found ? se("generateAbstractMask", m) || {
    children: [],
    attributes: {}
  } : se("generateAbstractIcon", m) || {
    children: [],
    attributes: {}
  }, W = P.children, H = P.attributes;
  return m.children = W, m.attributes = H, s ? cr(m) : lr(m);
}
function ln(e2) {
  var t = e2.content, n = e2.width, a = e2.height, r = e2.transform, i2 = e2.title, o = e2.extra, s = e2.watchable, f = s === void 0 ? false : s, c = p(p(p({}, o.attributes), i2 ? {
    title: i2
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  f && (c[be] = "");
  var l2 = p({}, o.styles);
  zt(r) && (l2.transform = Wa({
    transform: r,
    startCentered: true,
    width: n,
    height: a
  }), l2["-webkit-transform"] = l2.transform);
  var u = nt(l2);
  u.length > 0 && (c.style = u);
  var b = [];
  return b.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i2 && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i2]
  }), b;
}
function ur(e2) {
  var t = e2.content, n = e2.title, a = e2.extra, r = p(p(p({}, a.attributes), n ? {
    title: n
  } : {}), {}, {
    class: a.classes.join(" ")
  }), i2 = nt(a.styles);
  i2.length > 0 && (r.style = i2);
  var o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var ct = Q.styles;
function St(e2) {
  var t = e2[0], n = e2[1], a = e2.slice(4), r = Mt(a, 1), i2 = r[0], o = null;
  return Array.isArray(i2) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(y.cssPrefix, "-").concat(ve.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(ve.SECONDARY),
        fill: "currentColor",
        d: i2[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(ve.PRIMARY),
        fill: "currentColor",
        d: i2[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i2
    }
  }, {
    found: true,
    width: t,
    height: n,
    icon: o
  };
}
var mr = {
  found: false,
  width: 512,
  height: 512
};
function dr(e2, t) {
  !Wn && !y.showMissingIcons && e2 && console.error('Icon with name "'.concat(e2, '" and prefix "').concat(t, '" is missing.'));
}
function Pt(e2, t) {
  var n = t;
  return t === "fa" && y.styleDefault !== null && (t = ue()), new Promise(function(a, r) {
    if (se("missingIconAbstract"), n === "fa") {
      var i2 = ta(e2) || {};
      e2 = i2.iconName || e2, t = i2.prefix || t;
    }
    if (e2 && t && ct[t] && ct[t][e2]) {
      var o = ct[t][e2];
      return a(St(o));
    }
    dr(e2, t), a(p(p({}, mr), {}, {
      icon: y.showMissingIcons && e2 ? se("missingIconAbstract") || {} : {}
    }));
  });
}
var cn = function() {
};
var Tt = y.measurePerformance && ze && ze.mark && ze.measure ? ze : {
  mark: cn,
  measure: cn
};
var Pe = 'FA "6.5.2"';
var vr = function(t) {
  return Tt.mark("".concat(Pe, " ").concat(t, " begins")), function() {
    return aa(t);
  };
};
var aa = function(t) {
  Tt.mark("".concat(Pe, " ").concat(t, " ends")), Tt.measure("".concat(Pe, " ").concat(t), "".concat(Pe, " ").concat(t, " begins"), "".concat(Pe, " ").concat(t, " ends"));
};
var qt = {
  begin: vr,
  end: aa
};
var Ke = function() {
};
function un(e2) {
  var t = e2.getAttribute ? e2.getAttribute(be) : null;
  return typeof t == "string";
}
function pr(e2) {
  var t = e2.getAttribute ? e2.getAttribute(Lt) : null, n = e2.getAttribute ? e2.getAttribute(Dt) : null;
  return t && n;
}
function br(e2) {
  return e2 && e2.classList && e2.classList.contains && e2.classList.contains(y.replacementClass);
}
function gr() {
  if (y.autoReplaceSvg === true)
    return Je.replace;
  var e2 = Je[y.autoReplaceSvg];
  return e2 || Je.replace;
}
function yr(e2) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e2);
}
function hr(e2) {
  return Y.createElement(e2);
}
function ra(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, a = n === void 0 ? e2.tag === "svg" ? yr : hr : n;
  if (typeof e2 == "string")
    return Y.createTextNode(e2);
  var r = a(e2.tag);
  Object.keys(e2.attributes || []).forEach(function(o) {
    r.setAttribute(o, e2.attributes[o]);
  });
  var i2 = e2.children || [];
  return i2.forEach(function(o) {
    r.appendChild(ra(o, {
      ceFn: a
    }));
  }), r;
}
function wr(e2) {
  var t = " ".concat(e2.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Je = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(r) {
        n.parentNode.insertBefore(ra(r), n);
      }), n.getAttribute(be) === null && y.keepOriginalSource) {
        var a = Y.createComment(wr(n));
        n.parentNode.replaceChild(a, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], a = t[1];
    if (~$t(n).indexOf(y.replacementClass))
      return Je.replace(t);
    var r = new RegExp("".concat(y.cssPrefix, "-.*"));
    if (delete a[0].attributes.id, a[0].attributes.class) {
      var i2 = a[0].attributes.class.split(" ").reduce(function(s, f) {
        return f === y.replacementClass || f.match(r) ? s.toSvg.push(f) : s.toNode.push(f), s;
      }, {
        toNode: [],
        toSvg: []
      });
      a[0].attributes.class = i2.toSvg.join(" "), i2.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i2.toNode.join(" "));
    }
    var o = a.map(function(s) {
      return De(s);
    }).join(`
`);
    n.setAttribute(be, ""), n.innerHTML = o;
  }
};
function mn(e2) {
  e2();
}
function ia(e2, t) {
  var n = typeof t == "function" ? t : Ke;
  if (e2.length === 0)
    n();
  else {
    var a = mn;
    y.mutateApproach === Oa && (a = ce.requestAnimationFrame || mn), a(function() {
      var r = gr(), i2 = qt.begin("mutate");
      e2.map(r), i2(), n();
    });
  }
}
var Vt = false;
function oa() {
  Vt = true;
}
function Ct() {
  Vt = false;
}
var et = null;
function dn(e2) {
  if (tn && y.observeMutations) {
    var t = e2.treeCallback, n = t === void 0 ? Ke : t, a = e2.nodeCallback, r = a === void 0 ? Ke : a, i2 = e2.pseudoElementsCallback, o = i2 === void 0 ? Ke : i2, s = e2.observeMutationsRoot, f = s === void 0 ? Y : s;
    et = new tn(function(c) {
      if (!Vt) {
        var l2 = ue();
        Oe(c).forEach(function(u) {
          if (u.type === "childList" && u.addedNodes.length > 0 && !un(u.addedNodes[0]) && (y.searchPseudoElements && o(u.target), n(u.target)), u.type === "attributes" && u.target.parentNode && y.searchPseudoElements && o(u.target.parentNode), u.type === "attributes" && un(u.target) && ~Ra.indexOf(u.attributeName))
            if (u.attributeName === "class" && pr(u.target)) {
              var b = rt($t(u.target)), h = b.prefix, E = b.iconName;
              u.target.setAttribute(Lt, h || l2), E && u.target.setAttribute(Dt, E);
            } else
              br(u.target) && r(u.target);
        });
      }
    }), fe && et.observe(f, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
}
function xr() {
  et && et.disconnect();
}
function kr(e2) {
  var t = e2.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(a, r) {
    var i2 = r.split(":"), o = i2[0], s = i2.slice(1);
    return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
  }, {})), n;
}
function Ar(e2) {
  var t = e2.getAttribute("data-prefix"), n = e2.getAttribute("data-icon"), a = e2.innerText !== void 0 ? e2.innerText.trim() : "", r = rt($t(e2));
  return r.prefix || (r.prefix = ue()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = er(r.prefix, e2.innerText) || Wt(r.prefix, kt(e2.innerText))), !r.iconName && y.autoFetchSvg && e2.firstChild && e2.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e2.firstChild.data)), r;
}
function Er(e2) {
  var t = Oe(e2.attributes).reduce(function(r, i2) {
    return r.name !== "class" && r.name !== "style" && (r[i2.name] = i2.value), r;
  }, {}), n = e2.getAttribute("title"), a = e2.getAttribute("data-fa-title-id");
  return y.autoA11y && (n ? t["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(a || Me()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Or() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ae,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function vn(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  }, n = Ar(e2), a = n.iconName, r = n.prefix, i2 = n.rest, o = Er(e2), s = Et("parseNodeAttributes", {}, e2), f = t.styleParser ? kr(e2) : [];
  return p({
    iconName: a,
    title: e2.getAttribute("title"),
    titleId: e2.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: ae,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: i2,
      styles: f,
      attributes: o
    }
  }, s);
}
var Sr = Q.styles;
function sa(e2) {
  var t = y.autoReplaceSvg === "nest" ? vn(e2, {
    styleParser: false
  }) : vn(e2);
  return ~t.extra.classes.indexOf(Un) ? se("generateLayersText", e2, t) : se("generateSvgReplacementMutation", e2, t);
}
var me = /* @__PURE__ */ new Set();
Ft.map(function(e2) {
  me.add("fa-".concat(e2));
});
Object.keys(_e[z]).map(me.add.bind(me));
Object.keys(_e[U]).map(me.add.bind(me));
me = je(me);
function pn(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!fe)
    return Promise.resolve();
  var n = Y.documentElement.classList, a = function(u) {
    return n.add("".concat(nn, "-").concat(u));
  }, r = function(u) {
    return n.remove("".concat(nn, "-").concat(u));
  }, i2 = y.autoFetchSvg ? me : Ft.map(function(l2) {
    return "fa-".concat(l2);
  }).concat(Object.keys(Sr));
  i2.includes("fa") || i2.push("fa");
  var o = [".".concat(Un, ":not([").concat(be, "])")].concat(i2.map(function(l2) {
    return ".".concat(l2, ":not([").concat(be, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Oe(e2.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  var f = qt.begin("onTree"), c = s.reduce(function(l2, u) {
    try {
      var b = sa(u);
      b && l2.push(b);
    } catch (h) {
      Wn || h.name === "MissingIcon" && console.error(h);
    }
    return l2;
  }, []);
  return new Promise(function(l2, u) {
    Promise.all(c).then(function(b) {
      ia(b, function() {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), f(), l2();
      });
    }).catch(function(b) {
      f(), u(b);
    });
  });
}
function Pr(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  sa(e2).then(function(n) {
    n && ia([n], t);
  });
}
function Tr(e2) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (t || {}).icon ? t : Ot(t || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : Ot(r || {})), e2(a, p(p({}, n), {}, {
      mask: r
    }));
  };
}
var Cr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, r = a === void 0 ? ae : a, i2 = n.symbol, o = i2 === void 0 ? false : i2, s = n.mask, f = s === void 0 ? null : s, c = n.maskId, l2 = c === void 0 ? null : c, u = n.title, b = u === void 0 ? null : u, h = n.titleId, E = h === void 0 ? null : h, x = n.classes, w = x === void 0 ? [] : x, _ = n.attributes, L = _ === void 0 ? {} : _, A = n.styles, R = A === void 0 ? {} : A;
  if (t) {
    var m = t.prefix, P = t.iconName, W = t.icon;
    return it(p({
      type: "icon"
    }, t), function() {
      return ge("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), y.autoA11y && (b ? L["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(E || Me()) : (L["aria-hidden"] = "true", L.focusable = "false")), Ht({
        icons: {
          main: St(W),
          mask: f ? St(f.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: m,
        iconName: P,
        transform: p(p({}, ae), r),
        symbol: o,
        title: b,
        maskId: l2,
        titleId: E,
        extra: {
          attributes: L,
          styles: R,
          classes: w
        }
      });
    });
  }
};
var _r = {
  mixout: function() {
    return {
      icon: Tr(Cr)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = pn, n.nodeCallback = Pr, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var a = n.node, r = a === void 0 ? Y : a, i2 = n.callback, o = i2 === void 0 ? function() {
      } : i2;
      return pn(r, o);
    }, t.generateSvgReplacementMutation = function(n, a) {
      var r = a.iconName, i2 = a.title, o = a.titleId, s = a.prefix, f = a.transform, c = a.symbol, l2 = a.mask, u = a.maskId, b = a.extra;
      return new Promise(function(h, E) {
        Promise.all([Pt(r, s), l2.iconName ? Pt(l2.iconName, l2.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var w = Mt(x, 2), _ = w[0], L = w[1];
          h([n, Ht({
            icons: {
              main: _,
              mask: L
            },
            prefix: s,
            iconName: r,
            transform: f,
            symbol: c,
            maskId: u,
            title: i2,
            titleId: o,
            extra: b,
            watchable: true
          })]);
        }).catch(E);
      });
    }, t.generateAbstractIcon = function(n) {
      var a = n.children, r = n.attributes, i2 = n.main, o = n.transform, s = n.styles, f = nt(s);
      f.length > 0 && (r.style = f);
      var c;
      return zt(o) && (c = se("generateAbstractTransformGrouping", {
        main: i2,
        transform: o,
        containerWidth: i2.width,
        iconWidth: i2.width
      })), a.push(c || i2.icon), {
        children: a,
        attributes: r
      };
    };
  }
};
var Ir = {
  mixout: function() {
    return {
      layer: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.classes, i2 = r === void 0 ? [] : r;
        return it({
          type: "layer"
        }, function() {
          ge("beforeDOMElementCreation", {
            assembler: n,
            params: a
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(f) {
              o = o.concat(f.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(y.cssPrefix, "-layers")].concat(je(i2)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
};
var Rr = {
  mixout: function() {
    return {
      counter: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.title, i2 = r === void 0 ? null : r, o = a.classes, s = o === void 0 ? [] : o, f = a.attributes, c = f === void 0 ? {} : f, l2 = a.styles, u = l2 === void 0 ? {} : l2;
        return it({
          type: "counter",
          content: n
        }, function() {
          return ge("beforeDOMElementCreation", {
            content: n,
            params: a
          }), ur({
            content: n.toString(),
            title: i2,
            extra: {
              attributes: c,
              styles: u,
              classes: ["".concat(y.cssPrefix, "-layers-counter")].concat(je(s))
            }
          });
        });
      }
    };
  }
};
var Nr = {
  mixout: function() {
    return {
      text: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.transform, i2 = r === void 0 ? ae : r, o = a.title, s = o === void 0 ? null : o, f = a.classes, c = f === void 0 ? [] : f, l2 = a.attributes, u = l2 === void 0 ? {} : l2, b = a.styles, h = b === void 0 ? {} : b;
        return it({
          type: "text",
          content: n
        }, function() {
          return ge("beforeDOMElementCreation", {
            content: n,
            params: a
          }), ln({
            content: n,
            transform: p(p({}, ae), i2),
            title: s,
            extra: {
              attributes: u,
              styles: h,
              classes: ["".concat(y.cssPrefix, "-layers-text")].concat(je(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, a) {
      var r = a.title, i2 = a.transform, o = a.extra, s = null, f = null;
      if ($n) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), l2 = n.getBoundingClientRect();
        s = l2.width / c, f = l2.height / c;
      }
      return y.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, ln({
        content: n.innerHTML,
        width: s,
        height: f,
        transform: i2,
        title: r,
        extra: o,
        watchable: true
      })]);
    };
  }
};
var Mr = new RegExp('"', "ug");
var bn = [1105920, 1112319];
function jr(e2) {
  var t = e2.replace(Mr, ""), n = Ba(t, 0), a = n >= bn[0] && n <= bn[1], r = t.length === 2 ? t[0] === t[1] : false;
  return {
    value: kt(r ? t[0] : t),
    isSecondary: a || r
  };
}
function gn(e2, t) {
  var n = "".concat(Ea).concat(t.replace(":", "-"));
  return new Promise(function(a, r) {
    if (e2.getAttribute(n) !== null)
      return a();
    var i2 = Oe(e2.children), o = i2.filter(function(W) {
      return W.getAttribute(xt) === t;
    })[0], s = ce.getComputedStyle(e2, t), f = s.getPropertyValue("font-family").match(Ca), c = s.getPropertyValue("font-weight"), l2 = s.getPropertyValue("content");
    if (o && !f)
      return e2.removeChild(o), a();
    if (f && l2 !== "none" && l2 !== "") {
      var u = s.getPropertyValue("content"), b = ~["Sharp"].indexOf(f[2]) ? U : z, h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? Ie[b][f[2].toLowerCase()] : _a[b][c], E = jr(u), x = E.value, w = E.isSecondary, _ = f[0].startsWith("FontAwesome"), L = Wt(h, x), A = L;
      if (_) {
        var R = tr(x);
        R.iconName && R.prefix && (L = R.iconName, h = R.prefix);
      }
      if (L && !w && (!o || o.getAttribute(Lt) !== h || o.getAttribute(Dt) !== A)) {
        e2.setAttribute(n, A), o && e2.removeChild(o);
        var m = Or(), P = m.extra;
        P.attributes[xt] = t, Pt(L, h).then(function(W) {
          var H = Ht(p(p({}, m), {}, {
            icons: {
              main: W,
              mask: Ut()
            },
            prefix: h,
            iconName: A,
            extra: P,
            watchable: true
          })), V = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e2.insertBefore(V, e2.firstChild) : e2.appendChild(V), V.outerHTML = H.map(function(X) {
            return De(X);
          }).join(`
`), e2.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Lr(e2) {
  return Promise.all([gn(e2, "::before"), gn(e2, "::after")]);
}
function Dr(e2) {
  return e2.parentNode !== document.head && !~Sa.indexOf(e2.tagName.toUpperCase()) && !e2.getAttribute(xt) && (!e2.parentNode || e2.parentNode.tagName !== "svg");
}
function yn(e2) {
  if (fe)
    return new Promise(function(t, n) {
      var a = Oe(e2.querySelectorAll("*")).filter(Dr).map(Lr), r = qt.begin("searchPseudoElements");
      oa(), Promise.all(a).then(function() {
        r(), Ct(), t();
      }).catch(function() {
        r(), Ct(), n();
      });
    });
}
var Fr = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = yn, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var a = n.node, r = a === void 0 ? Y : a;
      y.searchPseudoElements && yn(r);
    };
  }
};
var hn = false;
var $r = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          oa(), hn = true;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        dn(Et("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        xr();
      },
      watch: function(n) {
        var a = n.observeMutationsRoot;
        hn ? Ct() : dn(Et("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
};
var wn = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(a, r) {
    var i2 = r.toLowerCase().split("-"), o = i2[0], s = i2.slice(1).join("-");
    if (o && s === "h")
      return a.flipX = true, a;
    if (o && s === "v")
      return a.flipY = true, a;
    if (s = parseFloat(s), isNaN(s))
      return a;
    switch (o) {
      case "grow":
        a.size = a.size + s;
        break;
      case "shrink":
        a.size = a.size - s;
        break;
      case "left":
        a.x = a.x - s;
        break;
      case "right":
        a.x = a.x + s;
        break;
      case "up":
        a.y = a.y - s;
        break;
      case "down":
        a.y = a.y + s;
        break;
      case "rotate":
        a.rotate = a.rotate + s;
        break;
    }
    return a;
  }, n);
};
var zr = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return wn(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-transform");
        return r && (n.transform = wn(r)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var a = n.main, r = n.transform, i2 = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(i2 / 2, " 256)")
      }, f = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l2 = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(f, " ").concat(c, " ").concat(l2)
      }, b = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: u,
        path: b
      };
      return {
        tag: "g",
        attributes: p({}, h.outer),
        children: [{
          tag: "g",
          attributes: p({}, h.inner),
          children: [{
            tag: a.icon.tag,
            children: a.icon.children,
            attributes: p(p({}, a.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
};
var ut = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function xn(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return e2.attributes && (e2.attributes.fill || t) && (e2.attributes.fill = "black"), e2;
}
function Yr(e2) {
  return e2.tag === "g" ? e2.children : [e2];
}
var Wr = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-mask"), i2 = r ? rt(r.split(" ").map(function(o) {
          return o.trim();
        })) : Ut();
        return i2.prefix || (i2.prefix = ue()), n.mask = i2, n.maskId = a.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var a = n.children, r = n.attributes, i2 = n.main, o = n.mask, s = n.maskId, f = n.transform, c = i2.width, l2 = i2.icon, u = o.width, b = o.icon, h = Ya({
        transform: f,
        containerWidth: u,
        iconWidth: c
      }), E = {
        tag: "rect",
        attributes: p(p({}, ut), {}, {
          fill: "white"
        })
      }, x = l2.children ? {
        children: l2.children.map(xn)
      } : {}, w = {
        tag: "g",
        attributes: p({}, h.inner),
        children: [xn(p({
          tag: l2.tag,
          attributes: p(p({}, l2.attributes), h.path)
        }, x))]
      }, _ = {
        tag: "g",
        attributes: p({}, h.outer),
        children: [w]
      }, L = "mask-".concat(s || Me()), A = "clip-".concat(s || Me()), R = {
        tag: "mask",
        attributes: p(p({}, ut), {}, {
          id: L,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [E, _]
      }, m = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: A
          },
          children: Yr(b)
        }, R]
      };
      return a.push(m, {
        tag: "rect",
        attributes: p({
          fill: "currentColor",
          "clip-path": "url(#".concat(A, ")"),
          mask: "url(#".concat(L, ")")
        }, ut)
      }), {
        children: a,
        attributes: r
      };
    };
  }
};
var Ur = {
  provides: function(t) {
    var n = false;
    ce.matchMedia && (n = ce.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var a = [], r = {
        fill: "currentColor"
      }, i2 = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      a.push({
        tag: "path",
        attributes: p(p({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = p(p({}, i2), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: p(p({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: p(p({}, i2), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: p(p({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), a.push(s), a.push({
        tag: "path",
        attributes: p(p({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: p(p({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || a.push({
        tag: "path",
        attributes: p(p({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: p(p({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: a
      };
    };
  }
};
var Hr = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-symbol"), i2 = r === null ? false : r === "" ? true : r;
        return n.symbol = i2, n;
      }
    };
  }
};
var qr = [Ha, _r, Ir, Rr, Nr, Fr, $r, zr, Wr, Ur, Hr];
rr(qr, {
  mixoutsTo: J
});
J.noAuto;
J.config;
J.library;
J.dom;
var _t = J.parse;
J.findIconDefinition;
J.toHtml;
var Vr = J.icon;
J.layer;
J.text;
J.counter;
function Xr(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var It = { exports: {} };
var Ge = { exports: {} };
var F = {};
var An;
function Gr() {
  return An || (An = 1, function() {
    var e2 = typeof Symbol == "function" && Symbol.for, t = e2 ? Symbol.for("react.element") : 60103, n = e2 ? Symbol.for("react.portal") : 60106, a = e2 ? Symbol.for("react.fragment") : 60107, r = e2 ? Symbol.for("react.strict_mode") : 60108, i2 = e2 ? Symbol.for("react.profiler") : 60114, o = e2 ? Symbol.for("react.provider") : 60109, s = e2 ? Symbol.for("react.context") : 60110, f = e2 ? Symbol.for("react.async_mode") : 60111, c = e2 ? Symbol.for("react.concurrent_mode") : 60111, l2 = e2 ? Symbol.for("react.forward_ref") : 60112, u = e2 ? Symbol.for("react.suspense") : 60113, b = e2 ? Symbol.for("react.suspense_list") : 60120, h = e2 ? Symbol.for("react.memo") : 60115, E = e2 ? Symbol.for("react.lazy") : 60116, x = e2 ? Symbol.for("react.block") : 60121, w = e2 ? Symbol.for("react.fundamental") : 60117, _ = e2 ? Symbol.for("react.responder") : 60118, L = e2 ? Symbol.for("react.scope") : 60119;
    function A(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === a || v === c || v === i2 || v === r || v === u || v === b || typeof v == "object" && v !== null && (v.$$typeof === E || v.$$typeof === h || v.$$typeof === o || v.$$typeof === s || v.$$typeof === l2 || v.$$typeof === w || v.$$typeof === _ || v.$$typeof === L || v.$$typeof === x);
    }
    function R(v) {
      if (typeof v == "object" && v !== null) {
        var te = v.$$typeof;
        switch (te) {
          case t:
            var $e = v.type;
            switch ($e) {
              case f:
              case c:
              case a:
              case i2:
              case r:
              case u:
                return $e;
              default:
                var Gt = $e && $e.$$typeof;
                switch (Gt) {
                  case s:
                  case l2:
                  case E:
                  case h:
                  case o:
                    return Gt;
                  default:
                    return te;
                }
            }
          case n:
            return te;
        }
      }
    }
    var m = f, P = c, W = s, H = o, V = t, X = l2, K = a, Z = E, Se = h, ye = n, ot = i2, ee = r, de = u, Fe = false;
    function st(v) {
      return Fe || (Fe = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(v) || R(v) === f;
    }
    function d(v) {
      return R(v) === c;
    }
    function g(v) {
      return R(v) === s;
    }
    function I(v) {
      return R(v) === o;
    }
    function T(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function k(v) {
      return R(v) === l2;
    }
    function N(v) {
      return R(v) === a;
    }
    function O(v) {
      return R(v) === E;
    }
    function C(v) {
      return R(v) === h;
    }
    function M(v) {
      return R(v) === n;
    }
    function $(v) {
      return R(v) === i2;
    }
    function j(v) {
      return R(v) === r;
    }
    function G(v) {
      return R(v) === u;
    }
    F.AsyncMode = m, F.ConcurrentMode = P, F.ContextConsumer = W, F.ContextProvider = H, F.Element = V, F.ForwardRef = X, F.Fragment = K, F.Lazy = Z, F.Memo = Se, F.Portal = ye, F.Profiler = ot, F.StrictMode = ee, F.Suspense = de, F.isAsyncMode = st, F.isConcurrentMode = d, F.isContextConsumer = g, F.isContextProvider = I, F.isElement = T, F.isForwardRef = k, F.isFragment = N, F.isLazy = O, F.isMemo = C, F.isPortal = M, F.isProfiler = $, F.isStrictMode = j, F.isSuspense = G, F.isValidElementType = A, F.typeOf = R;
  }()), F;
}
var En;
function fa() {
  return En || (En = 1, false ? Ge.exports = Br() : Ge.exports = Gr()), Ge.exports;
}
var mt;
var On;
function Kr() {
  if (On)
    return mt;
  On = 1;
  var e2 = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(i2) {
    if (i2 == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i2);
  }
  function r() {
    try {
      if (!Object.assign)
        return false;
      var i2 = new String("abc");
      if (i2[5] = "de", Object.getOwnPropertyNames(i2)[0] === "5")
        return false;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(o).map(function(l2) {
        return o[l2];
      });
      if (f.join("") !== "0123456789")
        return false;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l2) {
        c[l2] = l2;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return false;
    }
  }
  return mt = r() ? Object.assign : function(i2, o) {
    for (var s, f = a(i2), c, l2 = 1; l2 < arguments.length; l2++) {
      s = Object(arguments[l2]);
      for (var u in s)
        t.call(s, u) && (f[u] = s[u]);
      if (e2) {
        c = e2(s);
        for (var b = 0; b < c.length; b++)
          n.call(s, c[b]) && (f[c[b]] = s[c[b]]);
      }
    }
    return f;
  }, mt;
}
var dt;
var Sn;
function Xt() {
  if (Sn)
    return dt;
  Sn = 1;
  var e2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dt = e2, dt;
}
var vt;
var Pn;
function la() {
  return Pn || (Pn = 1, vt = Function.call.bind(Object.prototype.hasOwnProperty)), vt;
}
var pt;
var Tn;
function Jr() {
  if (Tn)
    return pt;
  Tn = 1;
  var e2 = function() {
  };
  if (true) {
    var t = Xt(), n = {}, a = la();
    e2 = function(i2) {
      var o = "Warning: " + i2;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function r(i2, o, s, f, c) {
    if (true) {
      for (var l2 in i2)
        if (a(i2, l2)) {
          var u;
          try {
            if (typeof i2[l2] != "function") {
              var b = Error(
                (f || "React class") + ": " + s + " type `" + l2 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i2[l2] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            u = i2[l2](o, l2, f, s, null, t);
          } catch (E) {
            u = E;
          }
          if (u && !(u instanceof Error) && e2(
            (f || "React class") + ": type specification of " + s + " `" + l2 + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = true;
            var h = c ? c() : "";
            e2(
              "Failed " + s + " type: " + u.message + (h ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    n = {};
  }, pt = r, pt;
}
var bt;
var Cn;
function Zr() {
  if (Cn)
    return bt;
  Cn = 1;
  var e2 = fa(), t = Kr(), n = Xt(), a = la(), r = Jr(), i2 = function() {
  };
  i2 = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  };
  function o() {
    return null;
  }
  return bt = function(s, f) {
    var c = typeof Symbol == "function" && Symbol.iterator, l2 = "@@iterator";
    function u(d) {
      var g = d && (c && d[c] || d[l2]);
      if (typeof g == "function")
        return g;
    }
    var b = "<<anonymous>>", h = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: L(),
      arrayOf: A,
      element: R(),
      elementType: m(),
      instanceOf: P,
      node: X(),
      objectOf: H,
      oneOf: W,
      oneOfType: V,
      shape: Z,
      exact: Se
    };
    function E(d, g) {
      return d === g ? d !== 0 || 1 / d === 1 / g : d !== d && g !== g;
    }
    function x(d, g) {
      this.message = d, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function w(d) {
      if (true)
        var g = {}, I = 0;
      function T(N, O, C, M, $, j, G) {
        if (M = M || b, j = j || C, G !== n) {
          if (f) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (typeof console < "u") {
            var te = M + ":" + C;
            !g[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (i2(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[te] = true, I++);
          }
        }
        return O[C] == null ? N ? O[C] === null ? new x("The " + $ + " `" + j + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new x("The " + $ + " `" + j + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : d(O, C, M, $, j);
      }
      var k = T.bind(null, false);
      return k.isRequired = T.bind(null, true), k;
    }
    function _(d) {
      function g(I, T, k, N, O, C) {
        var M = I[T], $ = ee(M);
        if ($ !== d) {
          var j = de(M);
          return new x(
            "Invalid " + N + " `" + O + "` of type " + ("`" + j + "` supplied to `" + k + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return w(g);
    }
    function L() {
      return w(o);
    }
    function A(d) {
      function g(I, T, k, N, O) {
        if (typeof d != "function")
          return new x("Property `" + O + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var C = I[T];
        if (!Array.isArray(C)) {
          var M = ee(C);
          return new x("Invalid " + N + " `" + O + "` of type " + ("`" + M + "` supplied to `" + k + "`, expected an array."));
        }
        for (var $ = 0; $ < C.length; $++) {
          var j = d(C, $, k, N, O + "[" + $ + "]", n);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return w(g);
    }
    function R() {
      function d(g, I, T, k, N) {
        var O = g[I];
        if (!s(O)) {
          var C = ee(O);
          return new x("Invalid " + k + " `" + N + "` of type " + ("`" + C + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(d);
    }
    function m() {
      function d(g, I, T, k, N) {
        var O = g[I];
        if (!e2.isValidElementType(O)) {
          var C = ee(O);
          return new x("Invalid " + k + " `" + N + "` of type " + ("`" + C + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(d);
    }
    function P(d) {
      function g(I, T, k, N, O) {
        if (!(I[T] instanceof d)) {
          var C = d.name || b, M = st(I[T]);
          return new x("Invalid " + N + " `" + O + "` of type " + ("`" + M + "` supplied to `" + k + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return w(g);
    }
    function W(d) {
      if (!Array.isArray(d))
        return arguments.length > 1 ? i2(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i2("Invalid argument supplied to oneOf, expected an array."), o;
      function g(I, T, k, N, O) {
        for (var C = I[T], M = 0; M < d.length; M++)
          if (E(C, d[M]))
            return null;
        var $ = JSON.stringify(d, function(G, v) {
          var te = de(v);
          return te === "symbol" ? String(v) : v;
        });
        return new x("Invalid " + N + " `" + O + "` of value `" + String(C) + "` " + ("supplied to `" + k + "`, expected one of " + $ + "."));
      }
      return w(g);
    }
    function H(d) {
      function g(I, T, k, N, O) {
        if (typeof d != "function")
          return new x("Property `" + O + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var C = I[T], M = ee(C);
        if (M !== "object")
          return new x("Invalid " + N + " `" + O + "` of type " + ("`" + M + "` supplied to `" + k + "`, expected an object."));
        for (var $ in C)
          if (a(C, $)) {
            var j = d(C, $, k, N, O + "." + $, n);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return w(g);
    }
    function V(d) {
      if (!Array.isArray(d))
        return i2("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var g = 0; g < d.length; g++) {
        var I = d[g];
        if (typeof I != "function")
          return i2(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Fe(I) + " at index " + g + "."
          ), o;
      }
      function T(k, N, O, C, M) {
        for (var $ = [], j = 0; j < d.length; j++) {
          var G = d[j], v = G(k, N, O, C, M, n);
          if (v == null)
            return null;
          v.data && a(v.data, "expectedType") && $.push(v.data.expectedType);
        }
        var te = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new x("Invalid " + C + " `" + M + "` supplied to " + ("`" + O + "`" + te + "."));
      }
      return w(T);
    }
    function X() {
      function d(g, I, T, k, N) {
        return ye(g[I]) ? null : new x("Invalid " + k + " `" + N + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return w(d);
    }
    function K(d, g, I, T, k) {
      return new x(
        (d || "React class") + ": " + g + " type `" + I + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function Z(d) {
      function g(I, T, k, N, O) {
        var C = I[T], M = ee(C);
        if (M !== "object")
          return new x("Invalid " + N + " `" + O + "` of type `" + M + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var $ in d) {
          var j = d[$];
          if (typeof j != "function")
            return K(k, N, O, $, de(j));
          var G = j(C, $, k, N, O + "." + $, n);
          if (G)
            return G;
        }
        return null;
      }
      return w(g);
    }
    function Se(d) {
      function g(I, T, k, N, O) {
        var C = I[T], M = ee(C);
        if (M !== "object")
          return new x("Invalid " + N + " `" + O + "` of type `" + M + "` " + ("supplied to `" + k + "`, expected `object`."));
        var $ = t({}, I[T], d);
        for (var j in $) {
          var G = d[j];
          if (a(d, j) && typeof G != "function")
            return K(k, N, O, j, de(G));
          if (!G)
            return new x(
              "Invalid " + N + " `" + O + "` key `" + j + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(I[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var v = G(C, j, k, N, O + "." + j, n);
          if (v)
            return v;
        }
        return null;
      }
      return w(g);
    }
    function ye(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(ye);
          if (d === null || s(d))
            return true;
          var g = u(d);
          if (g) {
            var I = g.call(d), T;
            if (g !== d.entries) {
              for (; !(T = I.next()).done; )
                if (!ye(T.value))
                  return false;
            } else
              for (; !(T = I.next()).done; ) {
                var k = T.value;
                if (k && !ye(k[1]))
                  return false;
              }
          } else
            return false;
          return true;
        default:
          return false;
      }
    }
    function ot(d, g) {
      return d === "symbol" ? true : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : false;
    }
    function ee(d) {
      var g = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : ot(g, d) ? "symbol" : g;
    }
    function de(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var g = ee(d);
      if (g === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function Fe(d) {
      var g = de(d);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function st(d) {
      return !d.constructor || !d.constructor.name ? b : d.constructor.name;
    }
    return h.checkPropTypes = r, h.resetWarningCache = r.resetWarningCache, h.PropTypes = h, h;
  }, bt;
}
if (true) {
  ei = fa(), ti = true;
  It.exports = Zr()(ei.isElement, ti);
} else
  It.exports = Qr()();
var ei;
var ti;
var ni = It.exports;
var S = Xr(ni);
function In(e2, t) {
  var n = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e2, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ne(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? In(Object(n), true).forEach(function(a) {
      ke(e2, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach(function(a) {
      Object.defineProperty(e2, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e2;
}
function tt(e2) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tt(e2);
}
function ke(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[t] = n, e2;
}
function ai(e2, t) {
  if (e2 == null)
    return {};
  var n = {}, a = Object.keys(e2), r, i2;
  for (i2 = 0; i2 < a.length; i2++)
    r = a[i2], !(t.indexOf(r) >= 0) && (n[r] = e2[r]);
  return n;
}
function ri(e2, t) {
  if (e2 == null)
    return {};
  var n = ai(e2, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r = 0; r < i2.length; r++)
      a = i2[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e2, a) && (n[a] = e2[a]);
  }
  return n;
}
function Rt(e2) {
  return ii(e2) || oi(e2) || si(e2) || fi();
}
function ii(e2) {
  if (Array.isArray(e2))
    return Nt(e2);
}
function oi(e2) {
  if (typeof Symbol < "u" && e2[Symbol.iterator] != null || e2["@@iterator"] != null)
    return Array.from(e2);
}
function si(e2, t) {
  if (e2) {
    if (typeof e2 == "string")
      return Nt(e2, t);
    var n = Object.prototype.toString.call(e2).slice(8, -1);
    if (n === "Object" && e2.constructor && (n = e2.constructor.name), n === "Map" || n === "Set")
      return Array.from(e2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Nt(e2, t);
  }
}
function Nt(e2, t) {
  (t == null || t > e2.length) && (t = e2.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e2[n];
  return a;
}
function fi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function li(e2) {
  var t, n = e2.beat, a = e2.fade, r = e2.beatFade, i2 = e2.bounce, o = e2.shake, s = e2.flash, f = e2.spin, c = e2.spinPulse, l2 = e2.spinReverse, u = e2.pulse, b = e2.fixedWidth, h = e2.inverse, E = e2.border, x = e2.listItem, w = e2.flip, _ = e2.size, L = e2.rotation, A = e2.pull, R = (t = {
    "fa-beat": n,
    "fa-fade": a,
    "fa-beat-fade": r,
    "fa-bounce": i2,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": f,
    "fa-spin-reverse": l2,
    "fa-spin-pulse": c,
    "fa-pulse": u,
    "fa-fw": b,
    "fa-inverse": h,
    "fa-border": E,
    "fa-li": x,
    "fa-flip": w === true,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, ke(t, "fa-".concat(_), typeof _ < "u" && _ !== null), ke(t, "fa-rotate-".concat(L), typeof L < "u" && L !== null && L !== 0), ke(t, "fa-pull-".concat(A), typeof A < "u" && A !== null), ke(t, "fa-swap-opacity", e2.swapOpacity), t);
  return Object.keys(R).map(function(m) {
    return R[m] ? m : null;
  }).filter(function(m) {
    return m;
  });
}
function ci(e2) {
  return e2 = e2 - 0, e2 === e2;
}
function ca(e2) {
  return ci(e2) ? e2 : (e2 = e2.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e2.substr(0, 1).toLowerCase() + e2.substr(1));
}
var ui = ["style"];
function mi(e2) {
  return e2.charAt(0).toUpperCase() + e2.slice(1);
}
function di(e2) {
  return e2.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = ca(n.slice(0, a)), i2 = n.slice(a + 1).trim();
    return r.startsWith("webkit") ? t[mi(r)] = i2 : t[r] = i2, t;
  }, {});
}
function ua(e2, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(f) {
    return ua(e2, f);
  }), r = Object.keys(t.attributes || {}).reduce(function(f, c) {
    var l2 = t.attributes[c];
    switch (c) {
      case "class":
        f.attrs.className = l2, delete t.attributes.class;
        break;
      case "style":
        f.attrs.style = di(l2);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? f.attrs[c.toLowerCase()] = l2 : f.attrs[ca(c)] = l2;
    }
    return f;
  }, {
    attrs: {}
  }), i2 = n.style, o = i2 === void 0 ? {} : i2, s = ri(n, ui);
  return r.attrs.style = ne(ne({}, r.attrs.style), o), e2.apply(void 0, [t.tag, ne(ne({}, r.attrs), s)].concat(Rt(a)));
}
var ma = false;
try {
  ma = false;
} catch {
}
function vi() {
  if (!ma && console && typeof console.error == "function") {
    var e2;
    (e2 = console).error.apply(e2, arguments);
  }
}
function Rn(e2) {
  if (e2 && tt(e2) === "object" && e2.prefix && e2.iconName && e2.icon)
    return e2;
  if (_t.icon)
    return _t.icon(e2);
  if (e2 === null)
    return null;
  if (e2 && tt(e2) === "object" && e2.prefix && e2.iconName)
    return e2;
  if (Array.isArray(e2) && e2.length === 2)
    return {
      prefix: e2[0],
      iconName: e2[1]
    };
  if (typeof e2 == "string")
    return {
      prefix: "fas",
      iconName: e2
    };
}
function yt(e2, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ke({}, e2, t) : {};
}
var Nn = {
  border: false,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: false
};
var Bt = import_react.default.forwardRef(function(e2, t) {
  var n = ne(ne({}, Nn), e2), a = n.icon, r = n.mask, i2 = n.symbol, o = n.className, s = n.title, f = n.titleId, c = n.maskId, l2 = Rn(a), u = yt("classes", [].concat(Rt(li(n)), Rt((o || "").split(" ")))), b = yt("transform", typeof n.transform == "string" ? _t.transform(n.transform) : n.transform), h = yt("mask", Rn(r)), E = Vr(l2, ne(ne(ne(ne({}, u), b), h), {}, {
    symbol: i2,
    title: s,
    titleId: f,
    maskId: c
  }));
  if (!E)
    return vi("Could not find icon", l2), null;
  var x = E.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(_) {
    Nn.hasOwnProperty(_) || (w[_] = n[_]);
  }), pi(x[0], w);
});
Bt.displayName = "FontAwesomeIcon";
Bt.propTypes = {
  beat: S.bool,
  border: S.bool,
  beatFade: S.bool,
  bounce: S.bool,
  className: S.string,
  fade: S.bool,
  flash: S.bool,
  mask: S.oneOfType([S.object, S.array, S.string]),
  maskId: S.string,
  fixedWidth: S.bool,
  inverse: S.bool,
  flip: S.oneOf([true, false, "horizontal", "vertical", "both"]),
  icon: S.oneOfType([S.object, S.array, S.string]),
  listItem: S.bool,
  pull: S.oneOf(["right", "left"]),
  pulse: S.bool,
  rotation: S.oneOf([0, 90, 180, 270]),
  shake: S.bool,
  size: S.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: S.bool,
  spinPulse: S.bool,
  spinReverse: S.bool,
  symbol: S.oneOfType([S.bool, S.string]),
  title: S.string,
  titleId: S.string,
  transform: S.oneOfType([S.string, S.object]),
  swapOpacity: S.bool
};
var pi = ua.bind(null, import_react.default.createElement);
var bi = {
  prefix: "fas",
  iconName: "sort",
  icon: [320, 512, ["unsorted"], "f0dc", "M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]
};
var wi = ({
  columns: e2,
  data: t,
  columnQuery: n,
  colmunToSort: a
}) => {
  const [r, i2] = (0, import_react.useState)([]), [o, s] = (0, import_react.useState)(1), [f, c] = (0, import_react.useState)(10), [l2, u] = (0, import_react.useState)(0), [b, h] = (0, import_react.useState)([]), [E, x] = (0, import_react.useState)(false), w = [], _ = [], L = (P) => {
    s(P);
  };
  function A(P) {
    const W = P.target.value.toLocaleLowerCase();
    if (W === "") {
      i2(t.slice(0, f)), u(0);
      return;
    }
    t.forEach((H) => {
      Object.entries(H).filter(
        ([Z]) => n.includes(Z)
      ).map((Z) => Z[1].toString().toLocaleLowerCase()).filter((Z) => Z.toString().toLocaleLowerCase().includes(W.toLocaleLowerCase())).length > 0 && (w.push(H), u(w.length));
    }), h(w), i2(w.slice(0, f)), u(w.length);
  }
  const R = (P) => {
    const W = P.target.id;
    a.includes(W) && (t.forEach((H) => {
      Object.entries(H).filter(
        ([X]) => a.includes(X)
      ).find(
        ([X]) => {
          X === W && _.push(H);
        }
      ), x(!E);
    }), _.sort((H, V) => {
      const X = H[W], K = V[W], Z = X instanceof Date, Se = K instanceof Date;
      if (Z && Se)
        return E ? K.getTime() - X.getTime() : X.getTime() - K.getTime();
      if (E) {
        if (X > K)
          return -1;
        if (X < K)
          return 1;
      } else {
        if (X < K)
          return -1;
        if (X > K)
          return 1;
      }
      return 0;
    }), i2(_.slice(0, f)));
  }, m = (P) => {
    c(Number(P.target.value)), s(1);
  };
  return (0, import_react.useEffect)(() => {
    const P = (o - 1) * f, W = P + f;
    i2(l2 === 0 ? t.slice(P, W) : b.slice(P, W));
  }, [o, f, t, l2, b]), (0, import_jsx_runtime2.jsxs)("div", { children: [
    (0, import_jsx_runtime2.jsxs)("div", { className: "btn_container", children: [
      (0, import_jsx_runtime2.jsxs)("div", { className: "select_container", children: [
        "Show",
        " ",
        (0, import_jsx_runtime2.jsxs)(
          "select",
          {
            name: "itemsPerPage",
            id: "itemsPerPage",
            onChange: m,
            defaultValue: 10,
            children: [
              (0, import_jsx_runtime2.jsx)("option", { value: "10", children: "10" }),
              (0, import_jsx_runtime2.jsx)("option", { value: "20", children: "20" }),
              (0, import_jsx_runtime2.jsx)("option", { value: "50", children: "50" }),
              (0, import_jsx_runtime2.jsx)("option", { value: "100", children: "100" })
            ]
          }
        ),
        (0, import_jsx_runtime2.jsx)("p", { children: "entries" })
      ] }),
      (0, import_jsx_runtime2.jsx)("div", { children: n && n.length > 0 ? (0, import_jsx_runtime2.jsxs)("form", { className: "form_search", children: [
        (0, import_jsx_runtime2.jsx)("label", { htmlFor: "search", children: "Search" }),
        (0, import_jsx_runtime2.jsx)(
          "input",
          {
            type: "search",
            name: "search",
            id: "search",
            onChange: A
          }
        )
      ] }) : null })
    ] }),
    (0, import_jsx_runtime2.jsxs)("table", { children: [
      (0, import_jsx_runtime2.jsx)("thead", { children: (0, import_jsx_runtime2.jsx)("tr", { children: e2.map((P) => (0, import_jsx_runtime2.jsxs)("th", { scope: "col", id: P.dataKey, onClick: R, className: "cursor-pointer", children: [
        P.title,
        " ",
        a.includes(P.dataKey) ? (0, import_jsx_runtime2.jsx)(Bt, { icon: bi }) : null
      ] }, P.dataKey)) }) }),
      (0, import_jsx_runtime2.jsx)("tbody", { children: r == null ? void 0 : r.map((P, W) => (0, import_jsx_runtime2.jsx)("tr", { children: e2.map((H, V) => (0, import_jsx_runtime2.jsx)("td", { children: P[H.dataKey] instanceof Date ? P[H.dataKey].toLocaleDateString() : P[H.dataKey] }, V)) }, W)) })
    ] }),
    (0, import_jsx_runtime2.jsxs)("div", { className: "display_items_per_page", children: [
      (0, import_jsx_runtime2.jsxs)("p", { children: [
        "Showing 1 to ",
        r == null ? void 0 : r.length,
        " of ",
        t.length
      ] }),
      (0, import_jsx_runtime2.jsx)("div", { className: "pagination_container", children: l2 === 0 ? (0, import_jsx_runtime2.jsx)(
        l,
        {
          currentPage: o,
          totalPages: Math.ceil(t.length / f),
          handlePagination: L
        }
      ) : (0, import_jsx_runtime2.jsx)(
        l,
        {
          currentPage: o,
          totalPages: Math.ceil(r.length / f),
          handlePagination: L
        }
      ) })
    ] })
  ] });
};
export {
  l as Paginate,
  wi as Table
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

table-plugin-react-ts/dist/components/Table/index.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

table-plugin-react-ts/dist/components/Table/index.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=table-plugin-react-ts.js.map
