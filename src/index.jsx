import { h, render } from 'preact'
import { useState, useReducer } from 'preact/hooks'
import { UserProvider, DataProvider } from 'util/context'

import 'mini.css/dist/mini-dark.min.css'
import 'style.css'
import styled from 'styled-components'

import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { StatusChip } from 'components/StatusChip'
import ActionBar from 'components/ActionBar'

const sleep = ms => new Promise(r => setTimeout(r, ms))

const Grid = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100%;
`

const Sections = ({children}) => {
	return (
		<div className="container" style="height: inherit;">
			<div class="row" style="height: inherit;">
				<Grid className="col-sm-12 col-md-8 col-lg-6 col-md-offset-2 col-lg-offset-3">
					{children}
				</Grid>
			</div>
		</div>
	)
}

const App = () => {
	// The app has 3 main sections, labeled below
	const [help, toggleHelp] = useReducer(x=>!x, false)
	return(
		<Sections>
			<Header toggleHelp={toggleHelp}/>  {/* 1 */}
			<UserProvider>
				<DataProvider>
					<Content /> {/* 2 */}
				</DataProvider>
				<StatusChip /> {/* 3 */}
			</UserProvider>
		</Sections>
	)
}



render(<App />, document.body);