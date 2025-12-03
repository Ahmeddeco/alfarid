"use client"

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"

type SubmitButtonProps = {
	text: string
	size?: "default" | "sm" | "lg" | "icon" | "full"
}

export default function SubmitButton({
	text,
	size = "full",
}: SubmitButtonProps) {
	const { pending } = useFormStatus()

	return (
		<>
			{pending ? (
				<Button disabled size={size}>
					<Spinner /> Please wait
				</Button>
			) : (
				<Button type="submit" size={size}>
					{text}
				</Button>
			)}
		</>
	)
}
