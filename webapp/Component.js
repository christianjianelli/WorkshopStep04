sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	return UIComponent.extend("com.cgi.workshop.fiori.Component", {
		metadata: {
			rootView: {
				"viewName": "com.cgi.workshop.fiori.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}
		},
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});