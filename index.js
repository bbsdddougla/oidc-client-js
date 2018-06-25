// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

const Log = require('./src/Log');
const OidcClient = require('./src/OidcClient');
const OidcClientSettings = require('./src/OidcClientSettings');
const WebStorageStateStore = require('./src/WebStorageStateStore');
const InMemoryWebStorage = require('./src/InMemoryWebStorage');
const UserManager = require('./src/UserManager');
const AccessTokenEvents = require('./src/AccessTokenEvents');
const MetadataService = require('./src/MetadataService');
const CordovaPopupNavigator = require('./src/CordovaPopupNavigator');
const CordovaIFrameNavigator = require('./src/CordovaIFrameNavigator');
const CheckSessionIFrame = require('./src/CheckSessionIFrame');
const TokenRevocationClient = require('./src/TokenRevocationClient');
const SessionMonitor = require('./src/SessionMonitor');
const Global = require('./src/Global'); 
const User = require('./src/User'); 

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
