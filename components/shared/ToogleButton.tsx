"use client"

import { useTransition } from "react"
import { Button } from "../ui/button"
import { toggleLike } from "@/actions/likeAction"
import { toggleFavorite } from "@/actions/favoriteAction"
import { Heart,  ThumbsUp } from "lucide-react"

/* ------------------------------- LikeButton ------------------------------- */
export function LikeButton({ productId, liked }: { productId: string; liked: boolean }) {
	const [isPending, startTransition] = useTransition()

	return (
		<Button
			type="button"
			size={"icon-sm"}
			variant={"ghost"}
			onClick={() =>
				startTransition(() => {
					void toggleLike(productId)
				})
			}
			disabled={isPending}
		>
			{/* {liked ? <Heart fill="red" color="red" /> : <Heart color="red" />} */}
			{liked ? <ThumbsUp fill="gold" color="gold" /> : <ThumbsUp />}
		</Button>
	)
}

/* ----------------------------- FavoriteButton ----------------------------- */
export function FavoriteButton({ productId, favorited }: { productId: string; favorited: boolean }) {
	const [isPending, startTransition] = useTransition()

	return (
		<Button
			type="button"
			size={"icon-sm"}
			variant={"ghost"}
			onClick={() =>
				startTransition(() => {
					void toggleFavorite(productId)
				})
			}
			disabled={isPending}
		>
			{favorited ? <Heart fill="red" color="red" /> : <Heart />}
		</Button>
	)
}
