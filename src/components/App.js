import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='Ywee test React' className='ytr-logo' />
				<h1 className='ytr-title'>Ywee Test React</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
		</div>
	)
}

export default App
