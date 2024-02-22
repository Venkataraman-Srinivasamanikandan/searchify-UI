import { Box, Input, InputAdornment } from '@mui/material'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { store } from '../../state/slice/countrySlice';
import { get } from '../../api/utils'
import styles from './home.module.css'

interface searchOptions {
	_id: string,
	name: string,
	country_code: string,
	description: string,
}

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState<String>("")
	const [searchOptions, setSearchOptions] = useState<searchOptions[]>([])

	const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const search = e.target.value
			setSearchValue(search)
			const searchResult = await get(`country/search/${search}`)
			setSearchOptions(searchResult)
		}
		catch (e: any) {
			if (e.status === 404) {
				setSearchOptions([])
			}
			console.log(e)
		}
	}
	const onSearchSelect = (id: string) => {
		dispatch(store(id))
		navigate("/details")
	}

	const showResult = () => {
		if (searchValue) {
			if (searchOptions.length === 0) {
				return (
					<div className={[styles.searchResultContainer, styles.noDataContainer].join(' ')}>
						<div className={styles.noData}>No Data Found</div>
					</div>
				)
			}
			return (
				<div className={styles.searchResultContainer}>
					{
						searchOptions.map((option) => {
							return <div className={styles.options} key={option["_id"]} onClick={() => onSearchSelect(option["_id"])}>{option.name}</div>
						})
					}
				</div>
			)
		}
		else {
			return <></>
		}
	}

	return (
		<div className={styles.container}>
			<Box>
				<Input
					data-testid="searchTextBox"
					sx={{ input: { color: '#fff' } }}
					className={styles.inputbox}
					startAdornment={
						<InputAdornment position='start' sx={{ color: "#fff" }}>
							<SearchIcon />
						</InputAdornment>
					}
					endAdornment={
						<InputAdornment position='start' sx={{ color: "#fff" }}>
							<ListIcon />
						</InputAdornment>
					}
					disableUnderline={true}
					onChange={onSearch}
				/>
				<div>
					{showResult()}
				</div>
			</Box>
		</div>
	)
}

export default Home