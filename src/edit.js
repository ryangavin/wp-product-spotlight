/**
 * Main editor component for user content
 */
import { RichText } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

import { useBlockProps } from '@wordpress/block-editor';
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
export default function Edit(props) {
	const {
		attributes: { price, connectivity, inputs, outputs, midi, whereToBuy, pros, cons },
		setAttributes,
	} = props;

	return (
		<div {...useBlockProps()}>
			<div className="product-spotlight-features">
				<div className="product-spotlight-row">
					<h6 className="product-spotlight-column-left">SPECIFICATIONS</h6>
					<div className="product-spotlight-column-right">
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">PRICE</h6>
							<RichText
								value={price}
								tagName="div"
								className="product-spotlight-column"
								onChange={(price)=>{setAttributes({price})}}
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">CONNECTIVITY</h6>
							<RichText
								value={connectivity}
								tagName="div"
								className="product-spotlight-column"
								onChange={(connectivity)=>{setAttributes({connectivity})}}
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">ANALOG INPUTS</h6>
							<RichText
								value={inputs}
								tagName="div"
								className="product-spotlight-column"
								onChange={(inputs)=>{setAttributes({inputs})}}
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">ANALOG OUTPUTS</h6>
							<RichText
								value={outputs}
								tagName="div"
								className="product-spotlight-column"
								onChange={(outputs)=>{setAttributes({outputs})}}
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">MIDI</h6>
							<RichText
								value={midi}
								tagName="div"
								className="product-spotlight-column"
								onChange={(midi)=>{setAttributes({midi})}}
							/>
						</div>
					</div>
				</div>

				<div className="product-spotlight-row">
					<h6 className="product-spotlight-column-left">WHERE TO BUY</h6>
					<RichText
						value={whereToBuy}
						tagName="div"
						className="product-spotlight-column-right"
						onChange={(whereToBuy)=>{setAttributes({whereToBuy})}}
					/>
				</div>

				<div className="product-spotlight-row">
					<h6 className="product-spotlight-column-left">PROS</h6>
					<RichText
						value={pros}
						tagName="div"
						className="product-spotlight-column-right"
						onChange={(pros)=>{setAttributes({pros})}}
					/>
				</div>

				<div className="product-spotlight-row">
					<h6 className="product-spotlight-column-left">CONS</h6>
					<RichText
						value={cons}
						tagName="div"
						className="product-spotlight-column-right"
						onChange={(cons)=>{setAttributes({cons})}}
					/>
				</div>
			</div>
		</div>
	);
}
