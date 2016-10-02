'use strict';

let Preferences = {
    deviceType: function(that) {
        let u = navigator.userAgent.toLowerCase();

        that.isIPhone = u.indexOf('iphone') > -1,
        that.isIPad = u.indexOf('ipad') > -1,
        that.isIPod = u.indexOf('ipod') > -1,
        that.isIOS = that.isIPhone || that.isIPad || that.isIPod,
        that.isAndroid = u.indexOf('android') > -1,

        that.isMobile = !!u.match(/applewebkit.*mobile.*/),
        that.isTablet = !that.isMobile && (that.isIOS || that.isAndroid),
        that.isPC = !that.isMobile && !that.isTablet;
        return that;
    }(new Object()),

    kernalVersion: function(that) {
        let u = navigator.userAgent.toLowerCase();
        that.isIE = u.indexOf('trident') > -1,                                   //是否IE内核
        that.isPresto = u.indexOf('presto'),                                     //是否opera内核
        that.isWebkit = u.indexOf('applewebkit') > -1,                           //是否苹果、谷歌内核
        that.isMozilla = u.indexOf('gecko') > -1 && u.indexOf('KHTML') == -1;    //是否火狐内核
        return that;
    }(new Object()),

    appType: function(that) {
        let u = navigator.userAgent.toLowerCase();
        that.isWebAPP = u.indexOf('safari') == -1,
        that.isWeChat = u.indexOf('MicroMessenger') > -1,
        that.isQQ = u.match(/\sqq/i) == 'qq'
    }(new Object()),

    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
window.Preferences = Preferences || {};
