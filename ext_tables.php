<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'weather');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
	mod.wizards.newContentElement.wizardItems.common.elements {
		cce_teaser {
			icon = gfx/c_wiz/regular_text.gif
			title = Teaser
			description = Teaser (Custom Content Elements)
			tt_content_defValues.CType = cce_teaser
		}
	}
	mod.wizards.newContentElement.wizardItems.common.show := addToList(cce_teaser)
');

$TCA['tt_content']['columns']['CType']['config']['items'][] =
    array(
        'Custom Content Elements',
        '--div--'
    );

$TCA['tt_content']['columns']['CType']['config']['items'][] =
    array(
        'Teaser (Custom Content Elements)',
        'cce_teaser',
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'ext_icon.gif'
    );

$TCA['tt_content']['types']['cce_teaser']['showitem'] = '
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.header;header,
    --div--;Text,
    bodytext;Text;;richtext:rte_transform[flag=rte_enabled|mode=ts_css], rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,
    --div--;Bilder,
    image,
    --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
';

?>