const Store = require('electron-store')
const store = new Store()

var $ = jQuery = require('jquery')
var Mousetrap = require('mousetrap')
var form__schoolName = document.getElementById('form__school-name')
var form__schoolLogoFileName = document.getElementById('form__school-logo-filename')
var form__edupageServer = document.getElementById('form__edupage-server')
var form__additional_webpages_1 = document.getElementById('form__additional-webpages-1')
var form__additional_webpages_2 = document.getElementById('form__additional-webpages-2')
var form__additional_webpages_3 = document.getElementById('form__additional-webpages-3')
var stored__schoolName = store.get('schoolName')
var stored__schoolLogoFileName = store.get('schoolLogoFileName')
var stored__edupageServerAddress = store.get('edupageServerAddress')
var stored__toggleAutoTheming = store.get('autoThemingState')
var stored__form__additional_webpages_1 = store.get('aPages1')
var stored__form__additional_webpages_2 = store.get('aPages1')
var stored__form__additional_webpages_3 = store.get('aPages1')

// Bind CTRL+E (or command+e) for easter egg
Mousetrap.bind(['command+e', 'ctrl+e'], function () {
    var mlpURL = 'https://mylittlepony.hasbro.com/worldwide' // Come get some!
    if (store.get('motdInTitle') == 'yep') {
        console.log('enableMotdInTitle() => Disabling motdInTitle')
        store.set('motdInTitle', 'nope')
    } else {
        console.log('enableMotdInTitle() => Enabling motdInTitle')
        store.set('motdInTitle', 'yep')
    }
    require('electron').shell.openExternal(mlpURL)
})

// saveSettings() => schoolName
$(form__schoolName).on('focusout', function() {
    if (stored__schoolName == '*') {
        console.log('saveSettings() => Skipping: schoolName')
    } else {
        console.log('saveSettings() => Saving: schoolName')
        store.set('schoolName', form__schoolName.value)
    }
})

// saveSettings() => schoolLogoFilename
$(form__schoolLogoFileName).change(function () {
    if (form__schoolLogoFileName.value == '' || stored__schoolLogoFileName == '*') {
        console.log('saveSettings() => Skipping schoolLogoFilename')
    } else {
        console.log('saveSettings() => Saving: schoolLogo')
        store.set('schoolLogo',form__schoolLogoFileName.files[0].path)
    }
})

// saveSettings() => edupageServerAddress
$(form__edupageServer).on('focusout', function() {
    if (form__edupageServer.value == '' || stored__edupageServerAddress == '*') {
        console.log('saveSettings() => Skipping: edupageServerAddress')
    } else {
        console.log('saveSettings() => Saving: edupageServerAddress')
        store.set('edupageServerAddress', form__edupageServer.value)
    }
})

// saveSettings() => aPages(i)
$(form__additional_webpages_1).on('focusout', function() {
    if (form__additional_webpages_1.value == '' || stored__form__additional_webpages_1 == '*') {
        console.log('saveSettings() => Skipping: aPages1')
    } else {
        console.log('saveSettings() => Saving: aPages1')
        store.set('aPages1', form__additional_webpages_1.value)
    }
})
$(form__additional_webpages_2).on('focusout', function() {
    if (form__additional_webpages_2.value == '' || stored__form__additional_webpages_2 == '*') {
        console.log('saveSettings() => Skipping: aPages2')
    } else {
        console.log('saveSettings() => Saving: aPages2')
        store.set('aPages2', form__additional_webpages_2.value)
    }
})
$(form__additional_webpages_3).on('focusout', function() {
    if (form__additional_webpages_3.value == '' || stored__form__additional_webpages_3 == '*') {
        console.log('saveSettings() => Skipping: aPages3')
    } else {
        console.log('saveSettings() => Saving: aPages3')
        store.set('aPages3', form__additional_webpages_1.value)
    }
})

// toggleAutoTheming() => toggleAutoTheming
// Dec: christmas shit
// Apr: UNICRORNS!
function switchAutoThemingState() {
    if (stored__toggleAutoTheming == 'enabled') {
        console.log('autoThemingState() => Disabling autoTheming')
        store.set('autoThemingState', 'disabled')
    } else {
        console.log('toggleAutoTheming() => Enabling autoTheming')
        store.set('autoThemingState', 'enabled')
    }
};

function resetSettings() {
    console.log('resetSettings() => Restoring to default value: schoolName')
    store.set('schoolName', '')
    console.log('resetSettings() => Restoring to default value: edupageServerAddress')
    store.set('edupageServerAddress', '')
    console.log('resetSettings() => Restoring to default value: additionalWebPages')
    store.set('additional_webpages_1', '')
    store.set('additional_webpages_2', '')
    store.set('additional_webpages_3', '')
    console.log('resetSettings() => Restoring to default value: motdInTitle')
    store.set('motdInTitle', 'nope')
    console.log('resetSettings() => Restoring to default value: autoTheming')
    store.set('autoThemingState', 'disabled')
};