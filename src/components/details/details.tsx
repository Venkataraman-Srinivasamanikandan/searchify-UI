import { useEffect, useState } from "react"
import { Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import styles from "./details.module.css"
import { RootState } from "../../state/store"
import { get } from "../../api/utils"
import { SearchResults } from "../../interface/cardInterface"
import Card from "../../reusableComponents/card/card"

const Details = () => {
	const { country_id } = useSelector((state: RootState) => state.country);
	const navigate = useNavigate()
	const [searchResults, setSearchResults] = useState<SearchResults[]>([])

	useEffect(() => {
		if (country_id === "") return navigate("/")
		get(`attraction/${country_id}`).then((data) => {
			setSearchResults(data)
		}).catch((e: any) => {
			if (e.status === 404) {
				setSearchResults([])
			}
			else {
				navigate("/")
			}
		})
	}, [])

	const getCards = () => {
		if (searchResults.length === 0) {
			return (
				<div className={styles.noData}>
					<h2>No Data Found</h2>
				</div>
			)
		}
		return (
			<Grid container spacing={4}>
				{
					searchResults.map((result) => (
						<Card result={result} />
					))
				}
			</Grid>
		)

	}
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Search results</h1>
			{getCards()}
		</div>
	)
}

export default Details