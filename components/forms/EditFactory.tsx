"use client"

import { editFactoryAction } from "@/actions/factoryAction"
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
import { Factory } from "@/generated/modelSchema/FactorySchema"

type data = {
	data: Factory
}

export default function EditFactory(data: data) {
	const [lastResult, action] = useActionState(editFactoryAction, undefined)
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
			<Input type="hidden" name="id" value={data.data.id} />

			{/* ---------------------------------- name ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.name.name}>{fields.name.name}</FieldLabel>
				<Input
					type="text"
					key={fields.name.key}
					name={fields.name.name}
					defaultValue={data.data.name ?? ""}
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
					defaultValue={data.data.email ?? ""}
					placeholder="something@email.com"
				/>
				<FieldError>{fields.name.errors}</FieldError>
			</Field>

			{/* --------------------------------- phone --------------------------------- */}
			<Phone
				key={fields.phone.key}
				name={fields.phone.name}
				defaultValue={data.data.phone ?? ""}
				errors={fields.phone.errors}
			/>

			{/* ------------------------------ CountryInput ------------------------------ */}
			<Field>
				<CountryInput
					userCity={data.data.city ?? ""}
					userState={data.data.state ?? ""}
					userCountry={data.data.country ?? ""}
				/>
			</Field>

			{/* ---------------------------------- logo ---------------------------------- */}
			<UploadOneImagesDropZone
				imageKey={fields.logo.key}
				imageName={fields.logo.name}
				label={fields.logo.name}
				errors={fields.logo.errors}
				dbImage={data.data.logo ?? ""}
			/>

			<SubmitButton text={"edit factory"} />
		</Form>
	)
}
