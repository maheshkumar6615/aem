

- **Content Advisor properties — most important technical reference.** Covers `aemTierType`, `hideTreeNav`, IMS authentication properties, HTTPS requirements, and `registerAssetsSelectorsAuthService`.   
  [Adobe — Content Advisor installation and properties](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/content-advisor/content-advisor-properties?utm_source=chatgpt.com)

- **Author repository + folder structure — strongest reference for your requirement.** Adobe explicitly says to select an **Author repository** and states that the Delivery repository has no folder/collection organization and displays content as a flat structure.   
  [Adobe — Content Advisor in Adobe and non-Adobe applications](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/content-advisor/integrate-adobe-non-adobe-applications?utm_source=chatgpt.com)

- **IMS credentials / authentication provisioning.** Covers obtaining `imsClientId`, `imsScope`, allowlisted `redirectUrl`, HTTPS, and using those values with `registerAssetsSelectorsAuthService`.   
  [Adobe — Request authentication credentials for Content Advisor](https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-41829?utm_source=chatgpt.com)

- **Non-Adobe application integration setup.** Useful for documenting the requirement to configure the IMS client, whitelist domains/redirect URLs, and use HTTPS.   
  [Adobe — Enable Content Advisor integration for non-Adobe applications](https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-42228?utm_source=chatgpt.com)

- **Core Components Remote Assets support.** This is the main reference for your **Image v3/Core Component → Remote → Pick** setup. It documents the OSGi configuration (`imsClient`, `imsOrg`, `repositoryId`), HTTPS requirement, authentication, and Remote asset selection.   
  [Adobe — Core Components Remote Assets support](https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/remote-assets?utm_source=chatgpt.com)

- **Image Component v3 documentation.** Confirms that Image v3 supports Remote Assets and that Remote Assets support was added in Core Components 2.23.2.   
  [Adobe — Image Component v3](https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/wcm-components/image?utm_source=chatgpt.com)

- **AEM Sites + Remote Assets integration.** Particularly useful because Adobe explicitly states that remote assets are available out of the box in **Image Core Component v3 and Teaser Core Component v2**, while other/custom components require Asset Selector customization.   
  [Adobe — Integrate remote AEM Assets with AEM Sites](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/dynamicmedia/dynamic-media-open-apis/integrate-remote-approved-assets-with-sites?utm_source=chatgpt.com)

- **Author repository + Dynamic Media.** Important if you want to browse the folder hierarchy from Author but still use Dynamic Media for delivery. Adobe explicitly states that this Content Advisor/Dynamic Media integration is available when connected to an **`author` repository rather than `delivery`**.   
  [Adobe — Content Advisor integration with Dynamic Media](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/content-advisor/integration-with-dynamic-media?utm_source=chatgpt.com)

- **Delivery tier / flat structure comparison.** Adobe documents `aemTierType: ["delivery"]` and explains that this shows approved assets **without folders, as a flat structure**. This is useful for explaining why you're switching to Author.   
  [Adobe — Content Advisor with Dynamic Media OpenAPI](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/content-advisor/integrate-dynamic-media-openapi?utm_source=chatgpt.com)

