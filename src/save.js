/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const {
		attributes: { price, connectivity, inputs, outputs, midi, whereToBuy, pros, cons },
	} = props;

	return (
		<div {...useBlockProps.save()}>
			<div className="product-spotlight-features">
				<div className="product-spotlight-row">
					<div className="product-spotlight-column-left">SPECIFICATIONS</div>
					<div className="product-spotlight-column-right">
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">PRICE</h6>
							<RichText.Content
								value={price}
								tagName="div"
								className="product-spotlight-column"
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">CONNECTIVITY</h6>
							<RichText.Content
								value={connectivity}
								tagName="div"
								className="product-spotlight-column"
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">ANALOG INPUTS</h6>
							<RichText.Content
								value={inputs}
								tagName="div"
								className="product-spotlight-column"
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">ANALOG OUTPUTS</h6>
							<RichText.Content
								value={outputs}
								tagName="div"
								className="product-spotlight-column"
							/>
						</div>
						<div className="product-spotlight-row">
							<h6 className="product-spotlight-column">MIDI</h6>
							<RichText.Content
								value={midi}
								tagName="div"
								className="product-spotlight-column"
							/>
						</div>
					</div>
				</div>

				<div className="product-spotlight-row">
					<h6 className="product-spotlight-column-left">WHERE TO BUY</h6>
					<RichText.Content
						value={whereToBuy}
						tagName="div"
						className="product-spotlight-column-right"
					/>
				</div>

				<div className="product-spotlight-row">
					<h6 className="product-spotlight-column-left">PROS</h6>
					<RichText.Content
						value={pros}
						tagName="div"
						className="product-spotlight-column-right"
					/>
				</div>

				<div className="product-spotlight-row">
					<h6 className="product-spotlight-column-left">CONS</h6>
					<RichText.Content
						value={cons}
						tagName="div"
						className="product-spotlight-column-right"
					/>
				</div>
			</div>
		</div>
	);
};
