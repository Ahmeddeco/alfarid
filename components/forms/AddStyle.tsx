"use client"

import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Form from "next/form"
import { useActionState } from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import SubmitButton from "../shared/SubmitButton"
import StyleSchema from "@/schemas/StyleSchema"
import { Textarea } from "../ui/textarea"
import { addStyleAction } from "@/actions/styleAction"

export default function AddStyle() {
	const [lastResult, action] = useActionState(addStyleAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: StyleSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})
	return (
		<Form id={form.id} action={action} onSubmit={form.onSubmit} className="space-y-6">
			{/* ---------------------------------- name ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.title.name}>{fields.title.name}</FieldLabel>
				<Input
					type="text"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={fields.title.initialValue}
					placeholder="Modern"
				/>
				<FieldError>{fields.title.errors}</FieldError>
			</Field>

			{/* ---------------------------------- email --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.description.name}>{fields.description.name}</FieldLabel>
				<Textarea
					key={fields.description.key}
					name={fields.description.name}
					defaultValue={fields.description.initialValue}
				/>
				<FieldError>{fields.description.errors}</FieldError>
			</Field>

			<SubmitButton text={"add style"} />
		</Form>
	)
}
