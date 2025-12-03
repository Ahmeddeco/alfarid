"use client"

import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Form from "next/form"
import { useActionState } from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import SubmitButton from "../shared/SubmitButton"
import { addColorAction, editColorAction } from "@/actions/colorAction"
import ColorSchema from "@/schemas/ColorSchema"
import { Color } from "@/generated/modelSchema/ColorSchema"

type Props = {
	data: Color
}

export default function EditColor({ data }: Props) {
	const [lastResult, action] = useActionState(editColorAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ColorSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})
	return (
		<Form id={form.id} action={action} onSubmit={form.onSubmit} className="space-y-6">
			<Input type="hidden" name="id" value={data.id} />

			{/* ---------------------------------- title --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.title.name}>{fields.title.name}</FieldLabel>
				<Input
					type="text"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={data.title ?? ""}
					placeholder="Red"
				/>
				<FieldError>{fields.title.errors}</FieldError>
			</Field>

			{/* ------------------------------ colorCode ------------------------------ */}
			<Field>
				<FieldLabel htmlFor={fields.colorCode.name}>{fields.colorCode.name}</FieldLabel>
				<Input
					type="text"
					key={fields.colorCode.key}
					name={fields.colorCode.name}
					defaultValue={data.colorCode ?? ""}
					placeholder="#dc2626"
				/>
				<FieldError>{fields.colorCode.errors}</FieldError>
			</Field>

			<SubmitButton text={"edit color"} />
		</Form>
	)
}
