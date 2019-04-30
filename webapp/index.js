sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	
	new ComponentContainer({
		name: "com.cgi.workshop.fiori",
		settings : {
			id : "workshop"
		},
		async: true
	}).placeAt("content");
	
});