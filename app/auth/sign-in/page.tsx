import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaXTwitter } from "react-icons/fa6"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Logo from "@/components/layout/Logo"
import { signIn } from "@/auth"
import Form from "next/form"

export default function SignInPage() {
	const signinWithGoogle = async () => {
		"use server"
		await signIn("google", { redirectTo: "/" })
	}
	const signinWithTwitter = async () => {
		"use server"
		await signIn("twitter", { redirectTo: "/" })
	}

	return (
		<div className="flex items-center justify-center min-h-dvh ">
			<Card className="flex items-center justify-center w-md py-12 ">
				<CardHeader className="w-full">
					<CardTitle>
						<Logo />
					</CardTitle>
					<CardDescription>
						Sign in to your account to continue.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4 w-full">
					<Form action={signinWithGoogle}>
						<Button size={"full"} type="submit" onClick={signinWithGoogle} variant={"outline"}>
							<FcGoogle /> sign in with google
						</Button>
					</Form>
					<Form action={signinWithTwitter}>
						<Button size={"full"} type="submit" onClick={signinWithTwitter} variant={"outline"}>
							<FaXTwitter /> sign in with twitter
						</Button>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
