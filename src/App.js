import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMagnifyingGlass, faPhone, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png'
import './App.css';

function App() {
	return (
		<div className='w-screen h-screen'>
			{/* Header Div */}
			<div className='w-full h-8 bg-darkbg grid grid-cols-3 grid-flow-col gap-24 text-white font-light py-1'>
				<div className='flex items-center justify-left pl-16 gap-2'>
					<FontAwesomeIcon icon={faPhone} size="xs"/>
					<p>+(203) 313 412</p>
				</div>
				<div className='flex items-center justify-center'>
					<p>Get 50% off on Selected Items &ensp;&ensp; | &ensp;&ensp; Shop Now</p>
				</div>
				<div className='flex items-center justify-center gap-4'>
					<div className='flex items-center justify-center gap-2'>
						<p>Eng</p>
						<FontAwesomeIcon icon={faChevronDown} size="xs" />
					</div>
					<div className='flex items-center justify-center gap-2'>
						<p>Location</p>
						<FontAwesomeIcon icon={faChevronDown} size="xs" />
					</div>
				</div>
			</div>


			{/* Main Page */}
			<div className='w-full'>
				<div className='h-24 flex items-center justify-center gap-8 pl-12'>
					<div>
						<img src={logo} />
						<div className='font-bold text-lg pr-8'>Shopcart</div>
					</div>
					
					<div className='flex flex-row gap-8 items-center justify-center'>
						<div className='flex items-center justify-center gap-2'>
							<p>Categories</p>
							<FontAwesomeIcon icon={faChevronDown} size="xs" />
						</div>
						<div>Deals</div>
						<div>What's New</div>
						<div>Delivery</div>
					</div>
					<div className='relative bg-gray-200 gap-4 px-4 py-2 rounded-3xl w-1/5'>
						<span className='text-gray-500'>Search Product</span>
						<FontAwesomeIcon className='text-gray-700 absolute right-0 mr-4 mt-1' icon={faMagnifyingGlass} size="md" />
					</div>
					<div className='flex items-center justify-center gap-8'>
						<div className='flex items-center justify-center gap-2'>
							<FontAwesomeIcon icon={faUserCircle} size="lg" />
							<p>Account</p>
						</div>
						<div className='flex items-center justify-center gap-2'>
							<FontAwesomeIcon icon={faShoppingCart} size="lg" />
							<p>Cart</p>
						</div>
					</div>
				</div>
			</div>

		</div>
  	);
}

export default App;
