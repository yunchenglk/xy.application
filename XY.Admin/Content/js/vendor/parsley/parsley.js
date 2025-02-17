﻿/* Parsley dist/parsley.min.js build version 1.2.3 http://parsleyjs.org */
!
function (d) {
    var h = function (a) {
        this.messages = {
            defaultMessage: "This value seems to be invalid.",
            type: {
                email: "请输入正确格式的电子邮件",
                url: "请输入正确的网址",
                urlstrict: "请输入有效的网址",
                number: "请输入有效的数字",
                digits: "请输入正确的数字",
                dateIso: "请输入正确的格式(YYYY-MM-DD).",
                alphanum: "请输入正确的字母",
                phone: "请输入正确的电话号码"
            },
            notnull: "该字段不能为空",
            notblank: "该字段不能为空",
            required: "该字段不能为空",
            regexp: "请正确输入该字段",
            min: "请输入一个最小为 %s 的值",
            max: "请输入一个最大为 %s 的值",
            range: "请输入一个介于 %s 和 %s 之间的值",
            minlength: "请输入一个长度最少是 %s 的字符串",
            maxlength: "请输入一个长度最多是 %s 的字符串",
            rangelength: "请输入一个长度介于 %s 和 %s 之间的字符串",
            mincheck: "必须选择至少 %s 个选项",
            maxcheck: "最多您只能选择 %s 个选项",
            rangecheck: "您只能选择 %s 到 %s 个选项。",
            equalto: "请输入相同的值"
        };
        this.init(a)
    };
    h.prototype = {
        constructor: h,
        validators: {
            notnull: function () {
                return {
                    validate: function (a) {
                        return 0 < a.length
                    },
                    priority: 2
                }
            },
            notblank: function () {
                return {
                    validate: function (a) {
                        return "string" === typeof a && "" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")
                    },
                    priority: 2
                }
            },
            required: function () {
                var a = this;
                return {
                    validate: function (b) {
                        if ("object" === typeof b) {
                            for (var c in b) if (a.required().validate(b[c])) return !0;
                            return !1
                        }
                        return a.notnull().validate(b) && a.notblank().validate(b)
                    },
                    priority: 512
                }
            },
            type: function () {
                return {
                    validate: function (a, b) {
                        var c;
                        switch (b) {
                            case "number":
                                c = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
                                break;
                            case "digits":
                                c = /^\d+$/;
                                break;
                            case "alphanum":
                                c = /^\w+$/;
                                break;
                            case "email":
                                c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
                                break;
                            case "url":
                                a = /(https?|s?ftp|git)/i.test(a) ? a : "http://" + a;
                            case "urlstrict":
                                c = /^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                                break;
                            case "dateIso":
                                c = /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;
                                break;
                            case "phone":
                                c = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                                break;
                            default:
                                return !1
                        }
                        return "" !== a ? c.test(a) : !1
                    },
                    priority: 256
                }
            },
            regexp: function () {
                return {
                    validate: function (a, b, c) {
                        return RegExp(b, c.options.regexpFlag || "").test(a)
                    },
                    priority: 64
                }
            },
            minlength: function () {
                return {
                    validate: function (a, b) {
                        return a.length >= b
                    },
                    priority: 32
                }
            },
            maxlength: function () {
                return {
                    validate: function (a, b) {
                        return a.length <= b
                    },
                    priority: 32
                }
            },
            rangelength: function () {
                var a = this;
                return {
                    validate: function (b, c) {
                        return a.minlength().validate(b, c[0]) && a.maxlength().validate(b, c[1])
                    },
                    priority: 32
                }
            },
            min: function () {
                return {
                    validate: function (a, b) {
                        return Number(a) >= b
                    },
                    priority: 32
                }
            },
            max: function () {
                return {
                    validate: function (a, b) {
                        return Number(a) <= b
                    },
                    priority: 32
                }
            },
            range: function () {
                var a = this;
                return {
                    validate: function (b, c) {
                        return a.min().validate(b, c[0]) && a.max().validate(b, c[1])
                    },
                    priority: 32
                }
            },
            equalto: function () {
                return {
                    validate: function (a, b, c) {
                        c.options.validateIfUnchanged = !0;
                        return a === d(b).val()
                    },
                    priority: 64
                }
            },
            remote: function () {
                return {
                    validate: function (a, b, c) {
                        var e = {},
                        f = {};
                        e[c.$element.attr("name")] = a;
                        "undefined" !== typeof c.options.remoteDatatype && (f = {
                            dataType: c.options.remoteDatatype
                        });
                        var g = function (a, b) {
                            "undefined" !== typeof b && ("undefined" !== typeof c.Validator.messages.remote && b !== c.Validator.messages.remote) && d(c.UI.ulError + " .remote").remove();
                            if (!1 === a) c.options.listeners.onFieldError(c.element, c.constraints, c);
                            else !0 === a && !1 === c.options.listeners.onFieldSuccess(c.element, c.constraints, c) && (a = !1);
                            c.updtConstraint({
                                name: "remote",
                                valid: a
                            },
                            b);
                            c.manageValidationResult()
                        },
                        k = function (a) {
                            if ("object" === typeof a) return a;
                            try {
                                a = d.parseJSON(a)
                            } catch (b) { }
                            return a
                        },
                        l = function (a) {
                            return "object" === typeof a && null !== a ? "undefined" !== typeof a.error ? a.error : "undefined" !== typeof a.message ? a.message : null : null
                        };
                        d.ajax(d.extend({},
                        {
                            url: b,
                            data: e,
                            type: c.options.remoteMethod || "GET",
                            success: function (a) {
                                a = k(a);
                                g(1 === a || !0 === a || "object" === typeof a && null !== a && "undefined" !== typeof a.success, l(a))
                            },
                            error: function (a) {
                                a = k(a);
                                g(!1, l(a))
                            }
                        },
                        f));
                        return null
                    },
                    priority: 64
                }
            },
            mincheck: function () {
                var a = this;
                return {
                    validate: function (b, c) {
                        return a.minlength().validate(b, c)
                    },
                    priority: 32
                }
            },
            maxcheck: function () {
                var a = this;
                return {
                    validate: function (b, c) {
                        return a.maxlength().validate(b, c)
                    },
                    priority: 32
                }
            },
            rangecheck: function () {
                var a = this;
                return {
                    validate: function (b, c) {
                        return a.rangelength().validate(b, c)
                    },
                    priority: 32
                }
            }
        },
        init: function (a) {
            var b = a.validators;
            a = a.messages;
            for (var c in b) this.addValidator(c, b[c]);
            for (c in a) this.addMessage(c, a[c])
        },
        formatMesssage: function (a, b) {
            if ("object" === typeof b) {
                for (var c in b) a = this.formatMesssage(a, b[c]);
                return a
            }
            return "string" === typeof a ? a.replace(/%s/i, b) : ""
        },
        addValidator: function (a, b) {
            if ("undefined" === typeof b().validate) throw Error("Validator `" + a + "` must have a validate method. See more here: http://parsleyjs.org/documentation.html#javascript-general");
            "undefined" === typeof b().priority && (b = {
                validate: b().validate,
                priority: 32
            },
            window.console && window.console.warn && window.console.warn("Validator `" + a + "` should have a priority. Default priority 32 given"));
            this.validators[a] = b
        },
        addMessage: function (a, b, c) {
            if ("undefined" !== typeof c && !0 === c) this.messages.type[a] = b;
            else if ("type" === a) for (var d in b) this.messages.type[d] = b[d];
            else this.messages[a] = b
        }
    };
    var n = function (a) {
        this.init(a)
    };
    n.prototype = {
        constructor: n,
        init: function (a) {
            this.ParsleyInstance = a;
            this.hash = a.hash;
            this.options = this.ParsleyInstance.options;
            this.errorClassHandler = this.options.errors.classHandler(this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox) || this.ParsleyInstance.$element;
            this.ulErrorManagement()
        },
        ulErrorManagement: function () {
            this.ulError = "#" + this.hash;
            this.ulTemplate = d(this.options.errors.errorsWrapper).attr("id", this.hash).addClass("parsley-error-list")
        },
        removeError: function (a) {
            a = this.ulError + " ." + a;
            var b = this;
            this.options.animate ? d(a).fadeOut(this.options.animateDuration,
            function () {
                d(this).remove();
                b.ulError && 0 === d(b.ulError).children().length && b.removeErrors()
            }) : d(a).remove();
            return this
        },
        addError: function (a) {
            for (var b in a) {
                var c = d(this.options.errors.errorElem).addClass(b);
                d(this.ulError).append(this.options.animate ? d(c).html(a[b]).hide().fadeIn(this.options.animateDuration) : d(c).html(a[b]))
            }
            return this
        },
        updateError: function (a) {
            for (var b in a) a[b] !== d(this.ulError + " > li." + b).html() && this.removeError(b).addError(a);
            return this
        },
        removeErrors: function () {
            this.options.animate ? d(this.ulError).fadeOut(this.options.animateDuration,
            function () {
                d(this).remove()
            }) : d(this.ulError).remove();
            return this
        },
        reset: function () {
            this.ParsleyInstance.valid = null;
            this.removeErrors();
            this.ParsleyInstance.validatedOnce = !1;
            this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
            for (var a in this.constraints) this.constraints[a].valid = null;
            return this
        },
        manageError: function (a) {
            d(this.ulError).length || this.manageErrorContainer();
            if ("required" === a.name && null !== this.ParsleyInstance.getVal() && 0 < this.ParsleyInstance.getVal().length) return this;
            if (this.ParsleyInstance.isRequired && "required" !== a.name && (null === this.ParsleyInstance.getVal() || 0 === this.ParsleyInstance.getVal().length)) return this.removeError(a.name),
            this;
            var b = a.name,
            c = !1 !== this.options.errorMessage ? "custom-error-message" : b,
            e = {};
            a = !1 !== this.options.errorMessage ? this.options.errorMessage : "type" === a.name ? this.ParsleyInstance.Validator.messages[b][a.requirements] : "undefined" === typeof this.ParsleyInstance.Validator.messages[b] ? this.ParsleyInstance.Validator.messages.defaultMessage : this.ParsleyInstance.Validator.formatMesssage(this.ParsleyInstance.Validator.messages[b], a.requirements);
            e[c] = a; !d(this.ulError + " ." + c).length ? this.addError(e) : this.updateError(e);
            return this
        },
        manageErrorContainer: function () {
            var a = this.options.errorContainer || this.options.errors.container(this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox),
            b = this.options.animate ? this.ulTemplate.css("display", "") : this.ulTemplate;
            if ("undefined" !== typeof a) d(a).append(b);
            else return !this.ParsleyInstance.isRadioOrCheckbox ? this.ParsleyInstance.$element.after(b) : this.ParsleyInstance.$element.parent().after(b),
            this
        }
    };
    var m = function (a, b, c) {
        this.options = b;
        if ("ParsleyFieldMultiple" === c) return this;
        this.init(a, c || "ParsleyField")
    };
    m.prototype = {
        constructor: m,
        init: function (a, b) {
            this.type = b;
            this.valid = !0;
            this.element = a;
            this.validatedOnce = !1;
            this.$element = d(a);
            this.val = this.$element.val();
            this.Validator = new h(this.options);
            this.isRequired = !1;
            this.constraints = {};
            "undefined" === typeof this.isRadioOrCheckbox && (this.isRadioOrCheckbox = !1, this.hash = this.generateHash());
            this.UI = new n(this);
            this.options.useHtml5Constraints && this.bindHtml5Constraints();
            this.addConstraints();
            this.hasConstraints() && this.bindValidationEvents()
        },
        setParent: function (a) {
            this.$parent = d(a)
        },
        getParent: function () {
            return this.$parent
        },
        bindHtml5Constraints: function () {
            if (this.$element.hasClass("required") || this.$element.attr("required")) this.options.required = !0;
            var a = this.$element.attr("type");
            "undefined" !== typeof a && RegExp(a, "i").test("email url number range tel") && (this.options.type = "tel" === a ? "phone" : a, RegExp(this.options.type, "i").test("number range") && (this.options.type = "number", "undefined" !== typeof this.$element.attr("min") && this.$element.attr("min").length && (this.options.min = this.$element.attr("min")), "undefined" !== typeof this.$element.attr("max") && this.$element.attr("max").length && (this.options.max = this.$element.attr("max"))));
            "string" === typeof this.$element.attr("pattern") && this.$element.attr("pattern").length && (this.options.regexp = this.$element.attr("pattern"))
        },
        addConstraints: function () {
            for (var a in this.options) {
                var b = {};
                b[a] = this.options[a];
                this.addConstraint(b, !0, !1)
            }
        },
        addConstraint: function (a, b, c) {
            for (var d in a) d = d.toLowerCase(),
            "function" === typeof this.Validator.validators[d] && (this.constraints[d] = {
                name: d,
                requirements: a[d],
                valid: null
            },
            "required" === d && (this.isRequired = !0), this.addCustomConstraintMessage(d));
            "undefined" === typeof b && this.bindValidationEvents()
        },
        updateConstraint: function (a, b) {
            for (var c in a) this.updtConstraint({
                name: c,
                requirements: a[c],
                valid: null
            },
            b)
        },
        updtConstraint: function (a, b) {
            this.constraints[a.name] = d.extend(!0, this.constraints[a.name], a);
            "string" === typeof b && ("type" === a.name ? this.Validator.messages[a.name][a.requirements] = b : this.Validator.messages[a.name] = b);
            this.bindValidationEvents()
        },
        removeConstraint: function (a) {
            a = a.toLowerCase();
            delete this.constraints[a];
            "required" === a && (this.isRequired = !1);
            this.hasConstraints() ? this.bindValidationEvents() : this.UI.reset()
        },
        addCustomConstraintMessage: function (a) {
            var b = a + ("type" === a && "undefined" !== typeof this.options[a] ? this.options[a].charAt(0).toUpperCase() + this.options[a].substr(1) : "") + "Message";
            "undefined" !== typeof this.options[b] && this.Validator.addMessage("type" === a ? this.options[a] : a, this.options[b], "type" === a)
        },
        bindValidationEvents: function () {
            this.valid = null;
            this.$element.addClass("parsley-validated");
            this.$element.off("." + this.type);
            this.options.remote && !/change/i.test(this.options.trigger) && (this.options.trigger = !this.options.trigger ? "change" : " change");
            var a = (!this.options.trigger ? "" : this.options.trigger) + (/key/i.test(this.options.trigger) ? "" : " keyup");
            this.$element.is("select") && (a += /change/i.test(a) ? "" : " change");
            a = a.replace(/^\s+/g, "").replace(/\s+$/g, "");
            this.$element.on((a + " ").split(" ").join("." + this.type + " "), !1, d.proxy(this.eventValidation, this))
        },
        generateHash: function () {
            return "parsley-" + (Math.random() + "").substring(2)
        },
        getHash: function () {
            return this.hash
        },
        getVal: function () {
            return "undefined" !== typeof this.$element.domApi(this.options.namespace).value ? this.$element.domApi(this.options.namespace).value : this.$element.val()
        },
        eventValidation: function (a) {
            var b = this.getVal();
            if ("keyup" === a.type && !/keyup/i.test(this.options.trigger) && !this.validatedOnce || "change" === a.type && !/change/i.test(this.options.trigger) && !this.validatedOnce || !this.isRadioOrCheckbox && this.getLength(b) < this.options.validationMinlength && !this.validatedOnce) return !0;
            this.validate()
        },
        getLength: function (a) {
            return !a || !a.hasOwnProperty("length") ? 0 : a.length
        },
        isValid: function () {
            return this.validate(!1)
        },
        hasConstraints: function () {
            for (var a in this.constraints) return !0;
            return !1
        },
        validate: function (a) {
            var b = this.getVal(),
            c = null;
            if (!this.hasConstraints() || this.$element.is(this.options.excluded)) return null;
            if (this.options.listeners.onFieldValidate(this.element, this) || "" === b && !this.isRequired) return this.UI.reset(),
            null;
            if (!this.needsValidation(b)) return this.valid;
            c = this.applyValidators(); ("undefined" !== typeof a ? a : this.options.showErrors) && this.manageValidationResult();
            return c
        },
        needsValidation: function (a) {
            if (!this.options.validateIfUnchanged && null !== this.valid && this.val === a && this.validatedOnce) return !1;
            this.val = a;
            return this.validatedOnce = !0
        },
        applyValidators: function () {
            var a = null,
            b;
            for (b in this.constraints) {
                var c = this.Validator.validators[this.constraints[b].name]().validate(this.val, this.constraints[b].requirements, this); !1 === c ? (a = !1, this.constraints[b].valid = a) : !0 === c && (this.constraints[b].valid = !0, a = !1 !== a)
            }
            if (!1 === a) this.options.listeners.onFieldError(this.element, this.constraints, this);
            else !0 === a && !1 === this.options.listeners.onFieldSuccess(this.element, this.constraints, this) && (a = !1);
            return a
        },
        manageValidationResult: function () {
            var a = null,
            b = [],
            c;
            for (c in this.constraints) !1 === this.constraints[c].valid ? (b.push(this.constraints[c]), a = !1) : !0 === this.constraints[c].valid && (this.UI.removeError(this.constraints[c].name), a = !1 !== a);
            this.valid = a;
            if (!0 === this.valid) return this.UI.removeErrors(),
            this.UI.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass),
            !0;
            if (!1 === this.valid) {
                if (!0 === this.options.priorityEnabled) {
                    for (var a = 0,
                    e, f = 0; f < b.length; f++) e = this.Validator.validators[b[f].name]().priority,
                    e > a && (c = b[f], a = e);
                    this.UI.manageError(c)
                } else for (f = 0; f < b.length; f++) this.UI.manageError(b[f]);
                this.UI.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
                return !1
            }
            this.UI.ulError && 0 === d(this.ulError).children().length && this.UI.removeErrors();
            return a
        },
        addListener: function (a) {
            for (var b in a) this.options.listeners[b] = a[b]
        },
        destroy: function () {
            this.$element.removeClass("parsley-validated");
            this.UI.reset();
            this.$element.off("." + this.type).removeData(this.type)
        }
    };
    var p = function (a, b, c) {
        this.initMultiple(a, b);
        this.inherit(a, b);
        this.Validator = new h(b);
        this.init(a, c || "ParsleyFieldMultiple")
    };
    p.prototype = {
        constructor: p,
        initMultiple: function (a, b) {
            this.element = a;
            this.$element = d(a);
            this.group = b.group || !1;
            this.hash = this.getName();
            this.siblings = this.group ? "[" + b.namespace + 'group="' + this.group + '"]' : 'input[name="' + this.$element.attr("name") + '"]';
            this.isRadioOrCheckbox = !0;
            this.isRadio = this.$element.is("input[type=radio]");
            this.isCheckbox = this.$element.is("input[type=checkbox]");
            this.errorClassHandler = b.errors.classHandler(a, this.isRadioOrCheckbox) || this.$element.parent()
        },
        inherit: function (a, b) {
            var c = new m(a, b, "ParsleyFieldMultiple"),
            d;
            for (d in c) "undefined" === typeof this[d] && (this[d] = c[d])
        },
        getName: function () {
            if (this.group) return "parsley-" + this.group;
            if ("undefined" === typeof this.$element.attr("name")) throw "A radio / checkbox input must have a parsley-group attribute or a name to be Parsley validated !";
            return "parsley-" + this.$element.attr("name").replace(/(:|\.|\[|\]|\$)/g, "")
        },
        getVal: function () {
            if (this.isRadio) return d(this.siblings + ":checked").val() || "";
            if (this.isCheckbox) {
                var a = [];
                d(this.siblings + ":checked").each(function () {
                    a.push(d(this).val())
                });
                return a
            }
        },
        bindValidationEvents: function () {
            this.valid = null;
            this.$element.addClass("parsley-validated");
            this.$element.off("." + this.type);
            var a = this,
            b = (!this.options.trigger ? "" : this.options.trigger) + (/change/i.test(this.options.trigger) ? "" : " change"),
            b = b.replace(/^\s+/g, "").replace(/\s+$/g, "");
            d(this.siblings).each(function () {
                d(this).on(b.split(" ").join("." + a.type + " "), !1, d.proxy(a.eventValidation, a))
            })
        }
    };
    var q = function (a, b, c) {
        this.init(a, b, c || "parsleyForm")
    };
    q.prototype = {
        constructor: q,
        init: function (a, b, c) {
            this.type = c;
            this.items = [];
            this.$element = d(a);
            this.options = b;
            var e = this;
            this.$element.find(b.inputs).each(function () {
                e.addItem(this)
            });
            this.$element.on("submit." + this.type, !1, d.proxy(this.validate, this))
        },
        addListener: function (a) {
            for (var b in a) if (/Field/.test(b)) for (var c = 0; c < this.items.length; c++) this.items[c].addListener(a);
            else this.options.listeners[b] = a[b]
        },
        addItem: function (a) {
            a = d(a).parsley(this.options);
            a.setParent(this);
            this.items.push(a)
        },
        removeItem: function (a) {
            a = d(a).parsley();
            for (var b = 0; b < this.items.length; b++) if (this.items[b].hash === a.hash) return this.items[b].destroy(),
            this.items.splice(b, 1),
            !0;
            return !1
        },
        validate: function (a) {
            var b = !0;
            this.focusedField = !1;
            for (var c = 0; c < this.items.length; c++) if ("undefined" !== typeof this.items[c] && !1 === this.items[c].validate() && (b = !1, !this.focusedField && "first" === this.options.focus || "last" === this.options.focus)) this.focusedField = this.items[c].$element;
            if (this.focusedField && !b) if (0 < this.options.scrollDuration) {
                var e = this,
                c = this.focusedField.offset().top - d(window).height() / 2;
                d("html, body").animate({
                    scrollTop: c
                },
                this.options.scrollDuration,
                function () {
                    e.focusedField.focus()
                })
            } else this.focusedField.focus();
            a = this.options.listeners.onFormValidate(b, a, this);
            return "undefined" !== typeof a ? a : b
        },
        isValid: function () {
            for (var a = 0; a < this.items.length; a++) if (!1 === this.items[a].isValid()) return !1;
            return !0
        },
        removeErrors: function () {
            for (var a = 0; a < this.items.length; a++) this.items[a].parsley("reset")
        },
        destroy: function () {
            for (var a = 0; a < this.items.length; a++) this.items[a].destroy();
            this.$element.off("." + this.type).removeData(this.type)
        },
        reset: function () {
            for (var a = 0; a < this.items.length; a++) this.items[a].UI.reset()
        }
    };
    d.fn.parsley = function (a, b) {
        function c(b, c) {
            var e = d(b).data(c);
            if (!e) {
                switch (c) {
                    case "parsleyForm":
                        e = new q(b, f, "parsleyForm");
                        break;
                    case "parsleyField":
                        e = new m(b, f, "parsleyField");
                        break;
                    case "parsleyFieldMultiple":
                        e = new p(b, f, "parsleyFieldMultiple");
                        break;
                    default:
                        return
                }
                d(b).data(c, e)
            }
            return "string" === typeof a && "function" === typeof e[a] ? (e = e[a].apply(e, k), "undefined" !== typeof e ? e : d(b)) : e
        }
        var e = d(this).data("parsleyNamespace") ? d(this).data("parsleyNamespace") : "undefined" !== typeof a && "undefined" !== typeof a.namespace ? a.namespace : d.fn.parsley.defaults.namespace,
        f = d.extend(!0, {},
        d.fn.parsley.defaults, "undefined" !== typeof window.ParsleyConfig ? window.ParsleyConfig : {},
        a, this.domApi(e)),
        g = null,
        k = Array.prototype.slice.call(arguments, 1);
        d(this).is("form") || "undefined" !== typeof d(this).domApi(e).bind ? g = c(d(this), "parsleyForm") : d(this).is(f.inputs) && (g = c(d(this), !d(this).is("input[type=radio], input[type=checkbox]") ? "parsleyField" : "parsleyFieldMultiple"));
        return "function" === typeof b ? b() : g
    };
    d(window).on("load",
    function () {
        d("[parsley-validate], [data-parsley-validate]").each(function () {
            d(this).parsley()
        })
    });
    d.fn.domApi = function (a) {
        var b, c = {},
        e = RegExp("^" + a, "i");
        if ("undefined" === typeof this[0]) return {};
        for (var f in this[0].attributes) if (b = this[0].attributes[f], "undefined" !== typeof b && null !== b && b.specified && e.test(b.name)) {
            var g = c,
            k = r(b.name.replace(a, "")),
            l;
            b = b.value;
            var h = void 0;
            try {
                l = b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : !isNaN(h = Number(b)) ? h : /^[\[\{]/.test(b) ? d.parseJSON(b) : b) : b
            } catch (m) {
                l = b
            }
            g[k] = l
        }
        return c
    };
    var r = function (a) {
        return a.replace(/-+(.)?/g,
        function (a, c) {
            return c ? c.toUpperCase() : ""
        })
    };
    d.fn.parsley.defaults = {
        namespace: "parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=hidden], input[type=file], :disabled",
        priorityEnabled: !0,
        trigger: !1,
        animate: !0,
        animateDuration: 300,
        scrollDuration: 500,
        focus: "first",
        validationMinlength: 3,
        successClass: "parsley-success",
        errorClass: "parsley-error",
        errorMessage: !1,
        validators: {},
        showErrors: !0,
        useHtml5Constraints: !0,
        messages: {},
        validateIfUnchanged: !1,
        errors: {
            classHandler: function (a, b) { },
            container: function (a, b) { },
            errorsWrapper: "<ul></ul>",
            errorElem: "<li></li>"
        },
        listeners: {
            onFieldValidate: function (a, b) {
                return !1
            },
            onFormValidate: function (a, b, c) { },
            onFieldError: function (a, b, c) { },
            onFieldSuccess: function (a, b, c) { }
        }
    }
}(window.jQuery || window.Zepto);