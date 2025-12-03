"use client"

import { useState } from "react"
import { CitySelect, CountrySelect, StateSelect } from "react-country-state-city"
import "react-country-state-city/dist/react-country-state-city.css"
import { Input } from "../ui/input"
import { City, Country, State } from "@/types/address"
import { Field, FieldLabel } from "../ui/field"

type CountryProps = {
	userCountry?: string
	userState?: string
	userCity?: string
	labelCountry?: string
	labelState?: string
	labelCity?: string
}

export default function CountryInput({
	userCity,
	userState,
	userCountry,
	labelCity = "City",
	labelCountry = "Country",
	labelState = "State",
}: CountryProps) {
	/* -------------------------------- useState -------------------------------- */
	const [country, setCountry] = useState<Country>(userCountry ?? "")
	const [state, setState] = useState<State>(userState ?? "")
	const [city, setCity] = useState<City>(userCity ?? "")

	return (
		<>
			<Input type="hidden" name="country" value={country?.name ?? country} />
			<Input type="hidden" name="state" value={state?.name ?? state} />
			<Input type="hidden" name="city" value={city?.name ?? city} />

			{/* --------------------------------- Country -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={labelCountry}>{labelCountry}</FieldLabel>
				<CountrySelect
					inputClassName={` bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`}
					onChange={(_country) => {
						setCountry(_country)
					}}
					defaultValue={country ?? ""}
					placeHolder={country ?? ""}
				/>
			</Field>

			{/* ---------------------------------- State --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={labelState}>{labelState}</FieldLabel>
				<StateSelect
					inputClassName="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md"
					countryid={country?.id}
					containerClassName="form-group"
					onChange={(_state) => setState(_state)}
					defaultValue={state ?? ""}
					placeHolder={state ?? ""}
				/>
			</Field>

			{/* ---------------------------------- City ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={labelCity}>{labelCity}</FieldLabel>
				<CitySelect
					inputClassName="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md"
					countryid={country?.id}
					stateid={state?.id}
					onChange={(_city) => setCity(_city)}
					defaultValue={city ?? ""}
					placeHolder={city ?? ""}
				/>
			</Field>
		</>
	)
}
