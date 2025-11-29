import Link from "next/link"
import Image from "next/image"

export default function Logo() {
	return (
		<Link href="/" className="flex items-end gap-2">
			<Image src={"/logo.webp"} alt={"logo"} width={28} height={28} />
			<h3 className="tracking-wider leading-none ">Alfarid</h3>
		</Link>
	)
}
