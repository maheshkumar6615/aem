(function () {
  "use strict";

  var IMS_CLIENT_ID = "xxxxxxxxxxxxxxxxx";
  var IMS_SCOPE = "AdobeID,openid,read_organizations,...";
  var IMS_REDIRECT_URL = "https://your-onprem-author-domain/...";
  var IMS_ORG = "XXXXX@AdobeOrg";
  var authRegistered = false;

  function registerAuth(sel) {
    if (!sel || authRegistered ||
        typeof sel.registerAssetsSelectorsAuthService !== "function") {
      return;
    }

    sel.registerAssetsSelectorsAuthService({
      imsClientId: IMS_CLIENT_ID,
      imsScope: IMS_SCOPE,
      redirectUrl: IMS_REDIRECT_URL,
      modalMode: true,
      onImsServiceInitialized: function () {
        console.log("[Content Advisor] IMS initialized");
      },
      onAccessTokenReceived: function () {
        console.log("[Content Advisor] IMS authentication successful");
      },
      onAccessTokenExpired: function () {
        console.warn("[Content Advisor] IMS token expired");
      },
      onErrorReceived: function (type, message) {
        console.error("[Content Advisor] IMS error:", type, message);
      }
    });

    authRegistered = true;
  }

  function patch(sel) {
    if (!sel) return sel;

    registerAuth(sel);

    if (sel.__authorTierPatched) return sel;

    var original = sel.renderAssetSelectorWithAuthFlow;

    if (typeof original === "function") {
      sel.renderAssetSelectorWithAuthFlow = function (el, props) {
        props = props || {};
        props.aemTierType = "author";
        props.hideTreeNav = false;
        props.imsOrg = IMS_ORG;

        console.log("[Content Advisor] Opening Author repository:", {
          repositoryId: props.repositoryId,
          aemTierType: props.aemTierType,
          hideTreeNav: props.hideTreeNav
        });

        return original.call(this, el, props);
      };

      sel.__authorTierPatched = true;
    }

    return sel;
  }

  var current = window.PureJSSelectors;

  Object.defineProperty(window, "PureJSSelectors", {
    configurable: true,
    get: function () {
      return current;
    },
    set: function (value) {
      current = patch(value);
    }
  });

  if (current) patch(current);
})();
