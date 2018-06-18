// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

let Log = require('./src/Log');
let OidcClient = require('./src/OidcClient');
let OidcClientSettings = require('./src/OidcClientSettings');
let WebStorageStateStore = require('./src/WebStorageStateStore');
let InMemoryWebStorage = require('./src/InMemoryWebStorage');
let UserManager = require('./src/UserManager');
let AccessTokenEvents = require('./src/AccessTokenEvents');
let MetadataService = require('./src/MetadataService');
let CordovaPopupNavigator = require('./src/CordovaPopupNavigator');
let CordovaIFrameNavigator = require('./src/CordovaIFrameNavigator');
let CheckSessionIFrame = require('./src/CheckSessionIFrame');
let TokenRevocationClient = require('./src/TokenRevocationClient');
let SessionMonitor = require('./src/SessionMonitor');
let Global = require('./src/Global');
let User = require('./src/User');

export default {
    Log,
    OidcClient,
    OidcClientSettings,
    WebStorageStateStore,
    InMemoryWebStorage,
    UserManager,
    AccessTokenEvents,
    MetadataService,
    CordovaPopupNavigator,
    CordovaIFrameNavigator,
    CheckSessionIFrame,
    TokenRevocationClient,
    SessionMonitor,
    Global,
    User
};
