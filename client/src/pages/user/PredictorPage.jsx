import React, { useState } from 'react'
import axios from 'axios'
import Dropdown from '../../components/Dropdown'
import Model from '../../components/Modal'

const PREDICTOR_URL = 'https://vahann-value-predictor.vercel.app'

const PredictorPage = () => {

	const [carCompany, setCarCompany] = useState('')
	const [carModel, setCarModel] = useState('')
	const [yearOfPurchase, setYearOfPurchase] = useState('')
	const [fuelType, setFuelType] = useState('')
	const [KMsDriven, setKMsDriven] = useState('')

	const [showOutput, setshowOutput] = useState(false)
	const [carValue, setCarValue] = useState('')

	const carCompanyValues = ['Audi', 'BMW', 'Chevrolet', 'Datsun', 'Fiat', 'Force', 'Ford', 'Hindustan', 'Honda', 'Hyundai', 'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Land', 'MG', 'Mahindra', 'Maruti', 'Mercedes', 'Mini', 'Mitsubishi', 'Nissan', 'Renault', 'Skoda', 'Tata', 'Toyota', 'Volkswagen', 'Volvo']

	const carModelValues =
		[
			'Audi A3 Cabriolet', 'Audi A4 1.8',
			'Audi A4 2.0',
			'Audi A6 2.0',
			'Audi A8',
			'Audi Q3 2.0',
			'Audi Q5 2.0',
			'Audi Q7',
			'BMW 3 Series',
			'BMW 5 Series',
			'BMW 7 Series',
			'BMW X1',
			'BMW X1 sDrive20d',
			'BMW X1 xDrive20d',
			'BMW X4',
			'Chevrolet Beat',
			'Chevrolet Beat Diesel',
			'Chevrolet Beat LS',
			'Chevrolet Beat LT',
			'Chevrolet Beat PS',
			'Chevrolet Cruze LTZ',
			'Chevrolet Enjoy',
			'Chevrolet Enjoy 1.4',
			'Chevrolet Sail 1.2',
			'Chevrolet Sail UVA',
			'Chevrolet Spark',
			'Chevrolet Spark 1.0',
			'Chevrolet Spark LS',
			'Chevrolet Spark LT',
			'Chevrolet Tavera LS',
			'Chevrolet Tavera Neo',
			'Datsun Go Plus',
			'Datsun GO T',
			'Datsun Redi GO',
			'Fiat Linea Emotion',
			'Fiat Petra ELX',
			'Fiat Punto Emotion',
			'Force Motors Force',
			'Force Motors One',
			'Ford EcoSport',
			'Ford EcoSport Ambiente',
			'Ford EcoSport Titanium',
			'Ford EcoSport Trend',
			'Ford Endeavor 4x4',
			'Ford Fiesta',
			'Ford Fiesta SXi',
			'Ford Figo',
			'Ford Figo Diesel',
			'Ford Figo Duratorq',
			'Ford Figo Petrol',
			'Ford Fusion 1.4',
			'Ford Ikon 1.3',
			'Ford Ikon 1.6',
			'Hindustan Motors Ambassador',
			'Honda Accord',
			'Honda Amaze',
			'Honda Amaze 1.2',
			'Honda Amaze 1.5',
			'Honda Brio',
			'Honda Brio V',
			'Honda Brio VX',
			'Honda City',
			'Honda City 1.5',
			'Honda City SV',
			'Honda City VX',
			'Honda City ZX',
			'Honda Civic',
			'Honda Jazz S',
			'Honda Jazz VX',
			'Honda Mobilio',
			'Honda Mobilio S',
			'Honda WR V',
			'Hyundai Accent',
			'Hyundai Accent Executive',
			'Hyundai Accent GLE',
			'Hyundai Accent GLX',
			'Hyundai Creta',
			'Hyundai Creta 1.6',
			'Hyundai Elantra',
			'Hyundai Elantra 1.8',
			'Hyundai Elantra SX',
			'Hyundai Elite i20',
			'Hyundai Eon',
			'Hyundai Eon D',
			'Hyundai Eon Era',
			'Hyundai Eon Magna',
			'Hyundai Eon Sportz',
			'Hyundai Fluidic Verna',
			'Hyundai Getz',
			'Hyundai Getz GLE',
			'Hyundai Getz Prime',
			'Hyundai Grand i10',
			'Hyundai i10',
			'Hyundai i10 Era',
			'Hyundai i10 Magna',
			'Hyundai i10 Sportz',
			'Hyundai i20',
			'Hyundai i20 Active',
			'Hyundai i20 Asta',
			'Hyundai i20 Magna',
			'Hyundai i20 Select',
			'Hyundai i20 Sportz',
			'Hyundai Santro',
			'Hyundai Santro AE',
			'Hyundai Santro Xing',
			'Hyundai Sonata Transform',
			'Hyundai Tucson',
			'Hyundai Venue',
			'Hyundai Verna',
			'Hyundai Verna 1.4',
			'Hyundai Verna 1.6',
			'Hyundai Verna Fluidic',
			'Hyundai Verna Transform',
			'Hyundai Verna VGT',
			'Hyundai Xcent Base',
			'Hyundai Xcent SX',
			'Isuzu V-Cross',
			'Jaguar XE XE',
			'Jaguar XF 2.2',
			'Jeep Compass',
			'Jeep Wrangler Unlimited',
			'Kia Seltos',
			'Kia Sonet',
			'Land Rover Freelander',
			'Mahindra Bolero DI',
			'Mahindra Bolero Power',
			'Mahindra Bolero SLE',
			'Mahindra Jeep CL550',
			'Mahindra Jeep MM',
			'Mahindra KUV100',
			'Mahindra KUV100 K8',
			'Mahindra Logan',
			'Mahindra Logan Diesel',
			'Mahindra Quanto C4',
			'Mahindra Quanto C8',
			'Mahindra Scorpio',
			'Mahindra Scorpio 2.6',
			'Mahindra Scorpio LX',
			'Mahindra Scorpio S10',
			'Mahindra Scorpio S4',
			'Mahindra Scorpio SLE',
			'Mahindra Scorpio SLX',
			'Mahindra Scorpio VLX',
			'Mahindra Scorpio W',
			'Mahindra Thar CRDe',
			'Mahindra TUV300 T4',
			'Mahindra TUV300 T8',
			'Mahindra XUV300',
			'Mahindra XUV500',
			'Mahindra XUV500 W10',
			'Mahindra XUV500 W6',
			'Mahindra XUV500 W8',
			'Mahindra Xylo D2',
			'Mahindra Xylo E4',
			'Mahindra Xylo E8',
			'Maruti Ignis',
			'Maruti Suzuki 800',
			'Maruti Suzuki A',
			'Maruti Suzuki Alto',
			'Maruti Suzuki Baleno',
			'Maruti Suzuki Celerio',
			'Maruti Suzuki Ciaz',
			'Maruti Suzuki Dzire',
			'Maruti Suzuki Eeco',
			'Maruti Suzuki Ertiga',
			'Maruti Suzuki Esteem',
			'Maruti Suzuki Estilo',
			'Maruti Suzuki Maruti',
			'Maruti Suzuki Omni',
			'Maruti Suzuki Ritz',
			'Maruti Suzuki S',
			'Maruti Suzuki Stingray',
			'Maruti Suzuki Swift',
			'Maruti Suzuki SX4',
			'Maruti Suzuki Versa',
			'Maruti Suzuki Vitara',
			'Maruti Suzuki Wagon',
			'Maruti Suzuki WagonR',
			'Maruti Suzuki Zen',
			'Maruti Swift Dzire',
			'Maruti XL6',
			'Mercedes Benz A',
			'Mercedes Benz B',
			'Mercedes Benz C',
			'Mercedes Benz GLA',
			'MG Hector',
			'MG Hector Plus',
			'Mini Cooper S',
			'Mitsubishi Lancer 1.8',
			'Mitsubishi Pajero Sport',
			'Nissan Kicks',
			'Nissan Magnite',
			'Nissan Micra XL',
			'Nissan Micra XV',
			'Nissan Sunny',
			'Nissan Sunny XL',
			'Nissan Terrano XL',
			'Nissan X Trail',
			'Renault Duster',
			'Renault Duster 110',
			'Renault Duster 110PS',
			'Renault Duster 85',
			'Renault Duster 85PS',
			'Renault Duster RxL',
			'Renault Kwid',
			'Renault Kwid 1.0',
			'Renault Kwid RXT',
			'Renault Lodgy 85',
			'Renault Scala RxL',
			'Skoda Fabia',
			'Skoda Fabia 1.2L',
			'Skoda Fabia Classic',
			'Skoda Kuraq',
			'Skoda Laura',
			'Skoda Octavia Classic',
			'Skoda Rapid Elegance',
			'Skoda Superb 1.8',
			'Skoda Yeti Ambition',
			'Tata Altroz',
			'Tata Aria Pleasure',
			'Tata Bolt XM',
			'Tata Harrier',
			'Tata Indica',
			'Tata Indica eV2',
			'Tata Indica V2',
			'Tata Indigo CS',
			'Tata Indigo eCS',
			'Tata Indigo LS',
			'Tata Indigo LX',
			'Tata Indigo Marina',
			'Tata Manza',
			'Tata Manza Aqua',
			'Tata Manza Aura',
			'Tata Manza ELAN',
			'Tata Nano',
			'Tata Nano Cx',
			'Tata Nano GenX',
			'Tata Nano Lx',
			'Tata Nexon',
			'Tata Punch',
			'Tata Sumo Gold',
			'Tata Sumo Grande',
			'Tata Sumo Victa',
			'Tata Tiago',
			'Tata Tiago Revotorq',
			'Tata Tiago Revotron',
			'Tata Tigor Revotron',
			'Tata Venture EX',
			'Tata Vista Quadrajet',
			'Tata Zest Quadrajet',
			'Tata Zest XE',
			'Tata Zest XM',
			'Toyota Corolla',
			'Toyota Corolla Altis',
			'Toyota Corolla H2',
			'Toyota Etios',
			'Toyota Etios G',
			'Toyota Etios GD',
			'Toyota Etios Liva',
			'Toyota Fortuner',
			'Toyota Fortuner 3.0',
			'Toyota Innova 2.0',
			'Toyota Innova 2.5',
			'Toyota Innova Crysta',
			'Toyota Qualis',
			'Volkswagen Jetta Comfortline',
			'Volkswagen Jetta Highline',
			'Volkswagen Passat Diesel',
			'Volkswagen Polo',
			'Volkswagen Polo Comfortline',
			'Volkswagen Polo Highline',
			'Volkswagen Polo Highline1.2L',
			'Volkswagen Polo Trendline',
			'Volkswagen Vento Comfortline',
			'Volkswagen Vento Highline',
			'Volkswagen Vento Konekt',
			'Volvo S80 Summum',
		]

	const yearOfPurchaseValues = [...Array(30).keys()].map(x => x + 1995).reverse()
	const fuelTypeValues = ['Petrol', 'Diesel', 'CNG']

	const onSubmit = async (e) => {
		e.preventDefault()

		try {
			const result = await axios.post(`${PREDICTOR_URL}/fetch-cars`, {
				carCompany,
				carModel,
				yearOfPurchase,
				fuelType,
				KMsDriven
			},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true
				})

			console.log(result)

			if (result.status === 200) {
				setCarValue(result.data)
				setshowOutput(true)
			}
		}
		catch (err) {
			// console.log(err.message)
			setCarValue(err.message)
			setshowOutput(true)
		}
	}

	const onCancelClick = () => {
		setshowOutput(false)
		setCarValue('')

		onReset()
	}

	const onReset = () => {
		setCarCompany('')
		setCarCompany('')
		setCarModel('')
		setYearOfPurchase('')
		setFuelType('')
		setKMsDriven('')
	}

	return (
		<div id='servicesContainer'>
			<h1 id="title">Vahann Value.</h1>

			<div id="infoContainer">
				<form onSubmit={onSubmit} className='userSelectNone infoForm'>
					<Dropdown id={'carCompany'} company={''} values={carCompanyValues} placeholder={'-- Select Car Company --'} onChange={e => setCarCompany(e.target.value)} type={carCompany} name={'Car Company'} />

					<Dropdown id={'noOfSeats'} company={carCompany} values={carModelValues} placeholder={'-- Select Car Model --'} onChange={e => setCarModel(e.target.value)} type={carModel} name={'Car Model'} />

					<Dropdown id={'yearOfPurchase'} company={''} values={yearOfPurchaseValues} placeholder={'-- Select Year of Purchase --'} onChange={e => setYearOfPurchase(e.target.value)} type={yearOfPurchase} name={'Year of Purchase'} />

					<Dropdown id={'fuelType'} company={''} values={fuelTypeValues} placeholder={'-- Select Fuel Type --'} onChange={e => setFuelType(e.target.value)} type={fuelType} name={'Fuel Type'} />

					<div id={`KMsDrivenContainer`}>
						<label htmlFor={'KMsDriven'}>{'Kilometers Driven'}</label>
						<input type="number" id='KMsDriven' placeholder='Enter KMs Driven' onInput={e => setKMsDriven(e.target.value)} name='Kilometers Driven' value={KMsDriven} required />
					</div>


					<div className='formBtns'>
						<button onClick={onReset} id="resetBtn">Reset</button>
						<button type="submit" id="submitBtn">Submit</button>
					</div>
				</form>
			</div>

			{showOutput ? <Model data={carValue} onCancelClick={onCancelClick} onPredictOtherClick={onCancelClick} /> : ''}
		</div>
	)
}

export default PredictorPage