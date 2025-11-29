"use client"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { useState } from "react"
import { Input } from "../ui/input"
import { Field, FieldError, FieldLabel } from "../ui/field"

type Props = {
	key: string | undefined
	name: string | undefined
	defaultValue: string | undefined
	errors: string[] | undefined
}

export default function Phone({ defaultValue, key, name, errors }: Props) {
	const [value, setValue] = useState<string | undefined>(defaultValue ?? "")

	return (
		<>
			<Field>
				<FieldLabel htmlFor={name}>{name}</FieldLabel>
				<Input type="hidden" key={key} name={name} value={value} />
				<PhoneInput
					placeholder="phone number"
					value={value}
					onChange={setValue}
					defaultCountry="EG"
					inputComponent={Input}
					focusInputOnCountrySelection
				/>
				<FieldError>{errors}</FieldError>
			</Field>
		</>
	)
}
