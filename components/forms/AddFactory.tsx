"use client"

import { addFactoryAction } from "@/actions/factoryAction"
import FactorySchema from "@/schemas/FactorySchema"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Form from "next/form"
import { useActionState } from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import Phone from "../shared/Phone"
import CountryInput from "../shared/CountryInput"
import { UploadOneImagesDropZone } from "../shared/UploadImagesDropZone"
import SubmitButton from "../shared/SubmitButton"

export default function AddFactory() {
	const [lastResult, action] = useActionState(addFactoryAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: FactorySchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})
	return (
		<Form id={form.id} action={action} onSubmit={form.onSubmit} className="space-y-6">
			{/* ---------------------------------- name ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.name.name}>{fields.name.name}</FieldLabel>
				<Input
					type="text"
					key={fields.name.key}
					name={fields.name.name}
					defaultValue={fields.name.initialValue}
					placeholder="Arkan"
				/>
				<FieldError>{fields.name.errors}</FieldError>
			</Field>

			{/* ---------------------------------- email --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.email.name}>{fields.email.name}</FieldLabel>
				<Input
					type="email"
					key={fields.email.key}
					name={fields.email.name}
					defaultValue={fields.email.initialValue}
					placeholder="something@email.com"
				/>
				<FieldError>{fields.email.errors}</FieldError>
			</Field>

			{/* --------------------------------- phone --------------------------------- */}
			<Phone
				key={fields.phone.key}
				name={fields.phone.name}
				defaultValue={fields.phone.defaultValue}
				errors={fields.phone.errors}
			/>

			{/* ------------------------------ CountryInput ------------------------------ */}
			<Field>
				<CountryInput />
			</Field>

			{/* ---------------------------------- logo ---------------------------------- */}
			<UploadOneImagesDropZone
				imageKey={fields.logo.key}
				imageName={fields.logo.name}
				label={fields.logo.name}
				errors={fields.logo.errors}
			/>

			<SubmitButton text={"add factory"} />
		</Form>
	)
}
