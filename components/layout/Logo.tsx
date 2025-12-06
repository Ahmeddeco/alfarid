import Link from "next/link"
import Image from "next/image"

export default function Logo() {
	return (
		<Link href="/" className="flex items-end lg:justify-start justify-center gap-2  ">
			<Image src={"/home/logo.webp"} alt={"logo"} width={28} height={28} />
			<h3 className="tracking-wider leading-none ">ALFARiD</h3>
		</Link>
	)
}
