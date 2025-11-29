/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Input } from "../ui/input"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import { Button } from "../ui/button"
import { X } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { UploadDropzone } from "@/utils/uploadthing"
import { Field, FieldError, FieldLabel } from "../ui/field"

type Props = {
	dbImages?: string[]
	dbImage?: string
	label?: string
	imageName?: string
	imagesName?: string
	imageKey?: string | undefined
	errors: string[] | undefined
}

/* ------------------------ UploadManyImagesDropZone ------------------------ */
export function UploadManyImagesDropZone({ dbImages, label = "images", imagesName = "images", errors }: Props) {
	const splittedImages = (images: string) => {
		const imagesArray = images.split(",").map((image) => image.trim())
		return imagesArray
	}
	const dbSplittedImages = dbImages ? splittedImages(dbImages?.toString()) : []

	const [images, setImages] = useState<string[]>(dbSplittedImages)

	const handleDeleteManyImages = (index: number) => {
		setImages(images.filter((_, i) => i !== index))
	}

	return (
		<Field>
			<FieldLabel>{label}</FieldLabel>
			<Card className="w-full">
				<CardContent className="flex flex-col gap-3 w-full">
					<Input type="hidden" name={imagesName} value={images} />
					{images.length > 0 ? (
						<div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
							{images.map((image, index) => (
								<div key={index} className="relative aspect-square w-full ">
									<Image
										src={image}
										alt="Product Image"
										fill
										className="w-full h-full object-contain rounded-lg border border-foreground p-2"
									/>

									<Button
										variant={"destructive"}
										size={"icon"}
										onClick={() => handleDeleteManyImages(index)}
										type="button"
										className="absolute -top-3 -right-3 rounded-full"
									>
										<X />
									</Button>
								</div>
							))}
						</div>
					) : (
						<UploadDropzone
							config={{ cn: twMerge }}
							className="ut-button:bg-primary ut-button:cursor-pointer ut-button:text-primary-foreground ut-button:px-8 ut-button:py-4 ut-ready:p-12 ut-readying:p-12 ut-uploading:p-12 ut-label:text-foreground ut-upload-icon:size-12 ut-upload-icon:text-foreground "
							endpoint={"manyImagesUploader"}
							onClientUploadComplete={(res: any) => {
								setImages(res.map((r: any) => r.ufsUrl))
								toast.success("Images uploaded successfully")
							}}
							onUploadError={(e: any) => {
								toast.error(`Something went wrong: ${e}`)
							}}
						/>
					)}
				</CardContent>
			</Card>
			<FieldError>{errors}</FieldError>
		</Field>
	)
}

/* ------------------------- UploadOneImagesDropZone ------------------------ */
export function UploadOneImagesDropZone({ dbImage, label = "image", imageName = "image", imageKey, errors }: Props) {
	const [image, setImage] = useState<string>(dbImage || "")
	const handleDeleteOneImages = () => {
		setImage("")
	}

	return (
		<Field>
			<FieldLabel>{label}</FieldLabel>
			<Card className="w-full">
				<CardContent className="flex flex-col gap-3 w-full">
					<Input type="hidden" name={imageName} value={image} key={imageKey} />
					{image.length > 0 ? (
						<div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
							<div className="relative aspect-square w-full ">
								<Image
									src={image}
									alt="Product Image"
									fill
									className="w-full h-full object-contain rounded-lg border border-foreground p-2"
								/>

								<Button
									variant={"destructive"}
									size={"icon"}
									onClick={() => handleDeleteOneImages()}
									type="button"
									className="absolute -top-3 -right-3 rounded-full"
								>
									<X />
								</Button>
							</div>
						</div>
					) : (
						<UploadDropzone
							config={{ cn: twMerge }}
							className="ut-button:bg-primary ut-button:text-primary-foreground ut-button:cursor-pointer ut-button:px-8 ut-button:py-4 ut-ready:p-12 ut-readying:p-12 ut-uploading:p-12 ut-label:text-foreground ut-upload-icon:size-12 ut-upload-icon:text-foreground "
							endpoint={"oneImageUploader"}
							onClientUploadComplete={(res: any) => {
								setImage(res[0].ufsUrl)
								toast.success("Image uploaded successfully")
							}}
							onUploadError={(e: any) => {
								toast.error(`Something went wrong: ${e}`)
							}}
						/>
					)}
				</CardContent>
			</Card>
			<FieldError>{errors}</FieldError>
		</Field>
	)
}
