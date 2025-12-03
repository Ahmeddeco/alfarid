import Form from "next/form"
import { Button } from "../ui/button"
import { LogIn } from "lucide-react"
import { signIn } from "@/auth"

export default function SignIn() {
	return (
		<Form
			action={async () => {
				"use server"
				await signIn("google", { redirectTo: "/" })
			}}
		>
			<Button size={"sm"} type="submit">
				<LogIn />
				SignIn
			</Button>
		</Form>
	)
}
