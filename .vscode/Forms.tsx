import { ChangeEvent, useRef, useState } from "react";

const FormField = (props: {
	type?: string;
	name: string;
	required?: boolean;
	placeholder: string;
	options?: string[];
	value?: string;
}) => {
	const { type, name, required, placeholder, options, value } = props;
	const [textareaStyles, setTextareaStyles] = useState({});

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const textareaValue = event.target.value;
		if (!textDiv.current) {
			return;
		}
		const textareaStyles = {
			width: `${textDiv.current.offsetWidth}px`,
			height: `${textDiv.current.offsetHeight}px`,
		};
		setTextareaStyles(textareaStyles);
	};

	const textDiv = useRef(null);
	if ((type === "radio" && options) || (type === "checkbox" && options)) {
		return (
			<div>
				<input
					type="text"
					name={name}
					required={required}
					placeholder={placeholder}
				/>
				{options.map((option) => (
					<label key={option}>
						<input type={type} name={name} value={option} />
						{option}
					</label>
				))}
			</div>
		);
	}

	if (type === "textarea") {
		<div>
			<div
				ref={textDiv}
				style={{
					visibility: "hidden",
				}}
			>
				{props.value}
			</div>
			<textarea onChange={handleChange} style={textareaStyles} />
		</div>;
	}

	if (type === "select" && options) {
		<select name={name} required={required}>
			<option value="">Please select</option>
			{options.map((option) => (
				<option value={option} key={option}>
					{option}
				</option>
			))}
		</select>;
	}

	if (type === "number") {
		return (
			<input
				type={type}
				name={name}
				required={required}
				placeholder={placeholder}
				pattern="/^[0-9]*$/"
			/>
		);
	}

	return (
		<input
			type={type}
			name={name}
			required={required}
			placeholder={placeholder}
		/>
	);
};

export default FormField;
