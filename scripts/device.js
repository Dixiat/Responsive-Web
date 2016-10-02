'use strict';

let preferences = window.Preferences || {};
if(preferences) {
    let container = document.querySelector('.container');
    preferences.deviceType.isMobile && container.setAttribute('device-type', 'mobile');
    preferences.deviceType.isPC && container.setAttribute('device-type',"pc");
}
