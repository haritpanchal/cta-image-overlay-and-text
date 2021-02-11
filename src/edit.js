/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, InspectorControls, ColorPalette, MediaUpload, BlockControls, AlignmentToolbar, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, IconButton, RangeControl, FontSizePicker  } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {attributes, setAttributes}) {
	
	return (
		<>
			<InspectorControls>
				<PanelBody title="Background Image Settings" initialOpen= { true }>
					<div class="media-container" style={{marginTop:'10px', marginBottom:'10px'} }>
						<MediaUpload
							onSelect = { (newImage) => setAttributes( {  backgroundImage: newImage.sizes.full.url } ) }
							type = 'image'
							value = { attributes.backgroundImage }
							render={ ( { open } ) => (
								<IconButton 
									onClick={ open } 
									icon="upload"
									className= "components-button editor-post-publish-button editor-post-publish-button__button is-primary" >
									Add
								</IconButton>
							) }
						/>
						<IconButton 
							onClick={ () => setAttributes({backgroundImage : null}) } 
							icon="trash"
							className= "components-button editor-post-publish-button editor-post-publish-button__button is-primary" >
							Remove
						</IconButton>
					</div>
					
					<div style={{marginTop:'20px', marginBottom:'20px'}}>
						<p><strong>Overlay Color</strong></p>
						<ColorPalette 
							value= { attributes.overlayColor } 
							onChange= { (overlayColor) => setAttributes( { overlayColor } ) } />
					</div>
					
					<p><strong>Overlay Opacity</strong></p>
					<RangeControl
						value= { attributes.overlayOpacity }
						onChange = { (overlayOpacity) => setAttributes( { overlayOpacity } ) }
						min = { 0 }
						max = { 1 }
						step = { 0.01 }
					/> 
				</PanelBody>

				<PanelBody title={ 'Title Settings' }  initialOpen= { false }>
					<p><strong>Font Size</strong></p>
					<RangeControl
						value= { attributes.titleFontSize }
						onChange = { (titleFontSize) => setAttributes( { titleFontSize } ) }
						min = { 0 }
						max = { 100 }
						step = { 2 }
					/>
                    <p><strong>Color</strong></p>
                    <ColorPalette 
						value= { attributes.titleColor } 
                        onChange= { (titleColor) => setAttributes( { titleColor } )} />
                </PanelBody>

				<PanelBody title={ 'Body Settings' }  initialOpen= { false }>
					<p><strong>Body Font Size</strong></p>
					<RangeControl
						value= { attributes.descriptionFontSize }
						onChange = { (descriptionFontSize) => setAttributes( { descriptionFontSize } ) }
						min = { 0 }
						max = { 100 }
						step = { 2 }
					/>
                    <p><strong>Body Color</strong></p>
                    <ColorPalette
                        value= { attributes.descriptionColor } 
                        onChange= { (descriptionColor) => setAttributes( { descriptionColor } )} />
                </PanelBody>
			</InspectorControls>
		
		 {/* <p { ...useBlockProps() }> */}
		
			<div className='cta-container' style= {{
					backgroundImage : `url( ${ attributes.backgroundImage ? attributes.backgroundImage : '' } )`,
					backgroundSize : 'cover',
					backgroundPosition : 'center',
					backgroundRepeat : 'no-repeat',
				}}  >
				<div class="cta-overlay" style= {{background: attributes.overlayColor, opacity: attributes.overlayOpacity}}></div>
				<BlockControls>
					<AlignmentToolbar onChange = { (textAlign) => setAttributes({textAlign}) } value={ attributes.textAlign } />
				</BlockControls>
				<RichText
					tagName = 'h2'
					placeholder = 'Enter Title'
					value = { attributes.title }
					onChange = { (title) => setAttributes( { title } ) }
					style = {{ color: attributes.titleColor, textAlign: attributes.textAlign, fontSize: attributes.titleFontSize }}
				/>
				<RichText
					tagName = 'p'
					placeholder = 'Enter Description'
					value = { attributes.description }
					onChange = { (description) => setAttributes( { description } ) }
					style = {{ color: attributes.descriptionColor, textAlign: attributes.textAlign, fontSize: attributes.descriptionFontSize }}
				/>
			</div>
		{/* </p> */}
	</>
	);
}
