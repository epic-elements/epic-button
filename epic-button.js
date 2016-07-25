'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
    'use strict';

    var EpicButton = (function () {
        function EpicButton() {
            _classCallCheck(this, EpicButton);
        }

        _createClass(EpicButton, [{
            key: 'beforeRegister',

            // Define behaviors with a getter.
            // get behaviors() {}

            value: function beforeRegister() {
                this.is = 'epic-button';
                this.properties = {
                    href: {
                        type: String,
                        value: '#',
                        notify: true,
                        reflectToAttribute: true
                    },
                    active: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    },
                    ariaActiveAttribute: {
                        type: String,
                        value: 'aria-pressed'
                    },
                    disabled: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    },
                    elevation: {
                        type: Number,
                        notify: true,
                        reflectToAttribute: true,
                        readOnly: true
                    },
                    focused: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    },
                    keyBindings: {
                        type: Object,
                        value: function value() {
                            return {};
                        }
                    },
                    keyEventTarget: {
                        type: Object,
                        value: null
                    },
                    noink: {
                        type: Boolean,
                        notify: true,
                        reflectToAttribute: true
                    },
                    pointerDown: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    },
                    pressed: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    },
                    raised: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    },
                    receivedFocusFromKeyboard: {
                        type: Boolean,
                        notify: true,
                        reflectToAttribute: true
                    },
                    stopKeyboardEventPropagation: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    },
                    toggles: {
                        type: Boolean,
                        value: false,
                        notify: true,
                        reflectToAttribute: true
                    }
                };
                this.observers = [];
                this.listeners = {};
            }
        }, {
            key: 'ready',

            // Define other lifecycle methods as you need.
            value: function ready() {}
        }, {
            key: 'attached',
            value: function attached() {}
        }, {
            key: 'detached',
            value: function detached() {}
        }, {
            key: 'attributeChanged',
            value: function attributeChanged() {}
        }]);

        return EpicButton;
    })();

    // Register the element using Polymer's constructor.
    Polymer(EpicButton);
})();
