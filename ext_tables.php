<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'weather');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
	mod.wizards.newContentElement.wizardItems.plugins.elements {
		cdg_weather {
			icon = gfx/c_wiz/regular_text.gif
			title = Météo
			description = Plugin météo simpliste qui affiche les températures et le temps
			tt_content_defValues.CType = cdg_weather
		}
	}
	show = addToList(cdg_weather)
');

$TCA['tt_content']['columns']['CType']['config']['items'][] =
    array(
        'Custom Content Elements',
        '--div--'
    );

$TCA['tt_content']['columns']['CType']['config']['items'][] =
    array(
        'Météo',
        'cdg_weather',
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'ext_icon.gif'
    );

$TCA['tt_content']['types']['cdg_weather']['showitem'] = '
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.header;header,
    --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
';

?>
