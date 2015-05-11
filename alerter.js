// ///////////////////////////////////////////////////////////////////////////
// Alerter - General purpose system messages to frontend - BYOCSS
// Jared Smith / John McNeil Studio - 2015
// This module is built to show one system message at a time, please fork if
// you need the option to show multiple messages simultaneously
// ///////////////////////////////////////////////////////////////////////////
var Alerter = (function($) {

	var def = function(opts) {
		this.options = opts;
		this.$els = {};

		init.call(this);
	};

	var init = function() {
		this.states = {
			'active' : this.options.prefix+'-active',
			'inactive' : this.options.prefix
		};

		this.append();
	};

	def.prototype = {
		bind: function() {
			var self = this;
			this.$els.item = $('.alerter');
			this.$els.close = $('.alerter-close');
			
			this.$els.close.on('click', function() {
				self.hide();
			});
		},

		append: function() {
			var self = this,
				templ = '<div class="alerter '+this.states.inactive+'">'+this.options.message+'<div class="alerter-close">X</div></div>';

			$('body').prepend(templ);
			this.bind();

			if (!this.options.trigger) {
				self.show();
			} else {
				this.options.trigger = this.show;
			}
		},

		show: function() {
			this.$els.item
				.addClass(this.states.active)
				.removeClass(this.states.inactive);
		},

		hide: function() {
			this.$els.item
				.removeClass(this.states.active)
				.addClass(this.states.inactive);
		}
	}

	return def;

}).call(this, jQuery);