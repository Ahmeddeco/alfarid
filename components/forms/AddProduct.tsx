"use client"

import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Form from "next/form"
import { useActionState } from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { UploadManyImagesDropZone, UploadOneImagesDropZone } from "../shared/UploadImagesDropZone"
import SubmitButton from "../shared/SubmitButton"
import { addProductAction } from "@/actions/productAction"
import ProductSchema from "@/schemas/ProductSchema"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CategorySchema from "@/generated/inputTypeSchemas/CategorySchema"

type Props = {
	factories:
		| {
				id: string
				name: string
		  }[]
		| undefined
	users:
		| {
				id: string | null
				name: string | null
		  }[]
		| undefined
	styles:
		| {
				id: string
				title: string
		  }[]
		| undefined
}

export default function AddProduct({ factories, users, styles }: Props) {
	const [lastResult, action] = useActionState(addProductAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProductSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})
	return (
		<Form id={form.id} action={action} onSubmit={form.onSubmit} className="space-y-6">
			{/* ---------------------------------- title --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.title.name}>{fields.title.name}</FieldLabel>
				<Input
					type="text"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={fields.title.initialValue}
					placeholder="Modern Sofa"
				/>
				<FieldError>{fields.title.errors}</FieldError>
			</Field>

			{/* ----------------------------- description ----------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.description.name}>{fields.description.name}</FieldLabel>
				<Textarea
					key={fields.description.key}
					name={fields.description.name}
					defaultValue={fields.description.initialValue}
				/>
				<FieldError>{fields.description.errors}</FieldError>
			</Field>

			{/* -------------------------------- category -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.category.name}>category</FieldLabel>
				<Select key={fields.category.key} name={fields.category.name} defaultValue={fields.category.initialValue}>
					<SelectTrigger>
						<SelectValue placeholder={CategorySchema.Enum.living} />
					</SelectTrigger>
					<SelectContent>
						{Object.values(CategorySchema.Enum).map((category, index) => (
							<SelectItem value={category} key={index}>
								{category}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.category.errors}</FieldError>
			</Field>

			{/* ---------------------------------- price --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.price.name}>{fields.price.name} $</FieldLabel>
				<Input
					type="number"
					key={fields.price.key}
					name={fields.price.name}
					defaultValue={fields.price.initialValue}
					placeholder="24 USD"
				/>
				<FieldError>{fields.price.errors}</FieldError>
			</Field>

			{/* ------------------------------- discount ------------------------------ */}
			<Field>
				<FieldLabel htmlFor={fields.discount.name}>{fields.discount.name} %</FieldLabel>
				<Input
					type="number"
					key={fields.discount.key}
					name={fields.discount.name}
					defaultValue={fields.discount.initialValue}
					placeholder="15"
				/>
				<FieldError>{fields.discount.errors}</FieldError>
			</Field>

			{/* ------------------------------- quantity ------------------------------ */}
			<Field>
				<FieldLabel htmlFor={fields.quantity.name}>{fields.quantity.name}</FieldLabel>
				<Input
					type="number"
					key={fields.quantity.key}
					name={fields.quantity.name}
					defaultValue={fields.quantity.initialValue}
					placeholder="162"
				/>
				<FieldError>{fields.quantity.errors}</FieldError>
			</Field>

			{/* -------------------------------- style -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.styleId.name}>style</FieldLabel>
				<Select key={fields.styleId.key} name={fields.styleId.name} defaultValue={fields.styleId.initialValue}>
					<SelectTrigger>
						<SelectValue placeholder="Kanaba" />
					</SelectTrigger>
					<SelectContent>
						{styles?.map(({ id, title }) => (
							<SelectItem value={id} key={id}>
								{title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.styleId.errors}</FieldError>
			</Field>
			
			
		

			{/* --------------------------------- factory -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.factoryId.name}>factory</FieldLabel>
				<Select key={fields.factoryId.key} name={fields.factoryId.name} defaultValue={fields.factoryId.initialValue}>
					<SelectTrigger>
						<SelectValue placeholder="Kanaba" />
					</SelectTrigger>
					<SelectContent>
						{factories?.map(({ id, name }) => (
							<SelectItem value={id} key={id}>
								{name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.factoryId.errors}</FieldError>
			</Field>

			{/* -------------------------------- seller -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.userId.name}>seller</FieldLabel>
				<Select key={fields.userId.key} name={fields.userId.name} defaultValue={fields.userId.initialValue}>
					<SelectTrigger>
						<SelectValue placeholder="Ahmed" />
					</SelectTrigger>
					<SelectContent>
						{users?.map(({ id, name }) => (
							<SelectItem value={id!} key={id}>
								{name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.userId.errors}</FieldError>
			</Field>

			{/* ------------------------------- mainImage ------------------------------ */}
			<UploadOneImagesDropZone
				imageKey={fields.mainImage.key}
				imageName={fields.mainImage.name}
				label={fields.mainImage.name}
				errors={fields.mainImage.errors}
			/>

			{/* --------------------------------- images --------------------------------- */}
			<UploadManyImagesDropZone
				imageKey={fields.images.key}
				imageName={fields.images.name}
				label={fields.images.name}
				errors={fields.images.errors}
			/>

			<SubmitButton text={"add product"} />
		</Form>
	)
}
