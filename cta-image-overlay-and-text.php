<?php
/**
 * Plugin Name:     Call to Action Image Overlay and Text
 * Description:     Call to Action image block with various settings created with ESNext and JSX content.
 * Version:         1.0.0
 * Author:          <a href="https://profiles.wordpress.org/haritpanchal/">Harit Panchal</a>
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     cta-image-overlay-and-text
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_cta_image_overlay_and_text_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/cta-image-overlay-and-text" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-cta-image-overlay-and-text-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'create-block-cta-image-overlay-and-text-block-editor', 'cta-image-overlay-and-text' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-cta-image-overlay-and-text-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-cta-image-overlay-and-text-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'create-block/cta-image-overlay-and-text',
		array(
			'editor_script' => 'create-block-cta-image-overlay-and-text-block-editor',
			'editor_style'  => 'create-block-cta-image-overlay-and-text-block-editor',
			'style'         => 'create-block-cta-image-overlay-and-text-block',
		)
	);
}
add_action( 'init', 'create_block_cta_image_overlay_and_text_block_init' );
