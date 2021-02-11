/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/cta-image-overlay-and-text', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'CTA Image Overlay And Text', 'cta-image-overlay-and-text' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Call to Action image block with various settings.',
		'cta-image-overlay-and-text'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: 'common',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'awards',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
		title : {
			type : 'string',
			source : 'html',
			selector : 'h2',
		},
		description : {
			type : 'string',
			source : 'html',
			selector : 'p',
		},
		titleColor : {
			type : 'string',
			default : '#333',
		},
		descriptionColor : {
			type : 'string',
			default : '#333',
		},
		backgroundImage : {
			type : 'string',
			default : null,
		},
		removeBackgroundImage : {
			type : 'string',
			default : null,
		},
		overlayColor : {
            type : 'string',
            default : '#333', 
		},
		overlayOpacity : {
            type : 'number',
            default : 0.3,
        },
		textAlign : {
			type : 'string',
			default : 'left',
		},
		titleFontSize : {
			type : 'number',
			default : 26 
		},
		descriptionFontSize : {
			type : 'number',
			default : 14 
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
