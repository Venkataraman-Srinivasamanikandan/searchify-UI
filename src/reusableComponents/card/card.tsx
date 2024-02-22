import { Grid } from "@mui/material"
import styles from "./card.module.css"
import { FunctionComponent } from "react"
import { SearchResults } from "../../interface/cardInterface"

const Card: FunctionComponent<{ result: SearchResults }> = ({ result }) => {
	return (
		<Grid item xs={3} key={result._id}>
			<div>
				<img className={styles.image} src={result.image} alt={result.title} />
				<div className={styles.cardContent}>
					<h3 className={styles.cardTitle}>{result.title}</h3>
					<div>{result.description}</div>
				</div>
			</div>
		</Grid>
	)
}

export default Card