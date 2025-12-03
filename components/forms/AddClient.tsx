"use client"

import { addClientAction } from "@/actions/clientAction"
import Form from "next/form"
import { useActionState } from "react"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "../ui/input"
import SubmitButton from "../shared/SubmitButton"
import CountryInput from "../shared/CountryInput"
import Phone from "../shared/Phone"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadOneImageDropZone } from "../shared/UploadImagesDropZone"
import ClientSchema from "@/schemas/ClientSchema"
import ClientStatusSchema from "@/generated/inputTypeSchemas/ClientStatusSchema"

export default function AddClient() {
	const [lastResult, action] = useActionState(addClientAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ClientSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})

	return (
		<Form id={form.id} action={action} onSubmit={form.onSubmit} className="space-y-6">
			{/* ------------------------------- fullName ------------------------------ */}
			<Field>
				<FieldLabel htmlFor={fields.fullName.name}>{fields.fullName.name}</FieldLabel>
				<Input
					type="text"
					key={fields.fullName.key}
					name={fields.fullName.name}
					defaultValue={fields.fullName.initialValue}
					placeholder="Ahmed Mohamed"
				/>
				<FieldError>{fields.fullName.errors}</FieldError>
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

			{/* --------------------------------- phone ---------------------------------- */}
			<Phone
				key={fields.phone.key}
				name={fields.phone.name}
				defaultValue={fields.phone.defaultValue}
				errors={fields.phone.errors}
			/>

			{/* ---------------------------------- status ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.status.name}>{fields.status.name}</FieldLabel>
				<Select key={fields.status.key} name={fields.status.name} defaultValue={fields.status.initialValue}>
					<SelectTrigger>
						<SelectValue placeholder="status" />
					</SelectTrigger>
					<SelectContent>
						{Object.values(ClientStatusSchema.Enum).map((status) => (
							<SelectItem key={status} value={status}>
								{status}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.status.errors}</FieldError>
			</Field>

			<Field>
				<FieldLabel htmlFor={fields.companyName.name}>{fields.companyName.name}</FieldLabel>
				<Input
					type="text"
					key={fields.companyName.key}
					name={fields.companyName.name}
					defaultValue={fields.companyName.initialValue}
					placeholder="Awesome Company LLC"
				/>
				<FieldError>{fields.companyName.errors}</FieldError>
			</Field>

			{/* ------------------------------ CountryInput ------------------------------ */}
			<Field>
				<CountryInput />
			</Field>

			{/* ------------------------------- companyLogo ------------------------------ */}
			<UploadOneImageDropZone
				imageKey={fields.companyLogo.key}
				imageName={fields.companyLogo.name}
				label={fields.companyLogo.name}
				errors={fields.companyLogo.errors}
			/>

			<SubmitButton text={"add client"} />
		</Form>
	)
}
