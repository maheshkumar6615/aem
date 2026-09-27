I am working on AEM LTS SP2 on-prem and using the AEM Core Image Component v3 with Remote Assets / Content Advisor.

The existing Image v3 Remote Asset picker already works with the Dynamic Media remote asset integration. I now need to customize the picker so authors can browse the AEM Assets as a Cloud Service AUTHOR repository and see its DAM folder hierarchy.

Requirements:

1. Do not modify AEM Core Components or /libs.
2. Implement this as a custom AEM authoring clientlib.
3. Use the existing window.PureJSSelectors API.
4. The existing Image v3 integration calls:
   renderAssetSelectorWithAuthFlow(element, props)

5. Intercept/wrap renderAssetSelectorWithAuthFlow without breaking the existing Image v3 functionality.

6. Preserve existing properties supplied by AEM, including:
   - repositoryId
   - apiKey
   - orgName
   - env
   - filterSchema
   - acvConfig
   - intl

7. Override only the properties needed for the Author tier:
   props.aemTierType = "author";
   props.hideTreeNav = false;
   props.imsOrg = "<IMS_ORG>";

8. Register Adobe IMS authentication using:
   PureJSSelectors.registerAssetsSelectorsAuthService()

9. The IMS authentication configuration must use:
   imsClientId = "<ADOBE_PROVIDED_IMS_CLIENT_ID>"
   imsScope = "<ADOBE_PROVIDED_IMS_SCOPE>"
   redirectUrl = "<ADOBE_PROVIDED_REDIRECT_URL>"
   modalMode = true

10. Do not include or expose an IMS client secret.

11. Handle these IMS callbacks:
   - onImsServiceInitialized
   - onAccessTokenReceived
   - onAccessTokenExpired
   - onErrorReceived

12. Do not log access tokens.

13. The existing repositoryId is already an Author repository such as:
   author-pXXXXX-eXXXXX.adobeaemcloud.com
   Do not hard-code or replace repositoryId.

14. PureJSSelectors may load before or after my custom clientlib, so the solution must handle both loading orders.

15. Prevent both the IMS service and renderAssetSelectorWithAuthFlow wrapper from being registered more than once.

16. Keep the JavaScript simple and readable. Avoid unnecessary abstractions, excessive comments, or large amounts of whitespace.

Please:
- generate the complete JavaScript file;
- explain briefly where it should be added in an AEM clientlib;
- identify any assumptions you made;
- flag anything that relies on an undocumented/private Core Component implementation rather than an official Adobe extension point.
