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
import { Style } from "@/generated/modelSchema/StyleSchema"
import { editStyleAction } from "@/actions/styleAction"

type data = {
	data: Style
}

export default function EditStyle(data: data) {
	const [lastResult, action] = useActionState(editStyleAction, undefined)
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
			<Input type="hidden" name="id" value={data.data.id} />

			{/* ---------------------------------- title ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.title.name}>{fields.title.name}</FieldLabel>
				<Input
					type="text"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={data.data.title ?? ""}
					placeholder="Modern"
				/>
				<FieldError>{fields.title.errors}</FieldError>
			</Field>

			{/* ------------------------------ description ------------------------------ */}
			<Field>
				<FieldLabel htmlFor={fields.description.name}>{fields.description.name}</FieldLabel>
				<Textarea
					key={fields.description.key}
					name={fields.description.name}
					defaultValue={data.data.description ?? ""}
				/>
				<FieldError>{fields.description.errors}</FieldError>
			</Field>

			<SubmitButton text={"edit style"} />
		</Form>
	)
}
