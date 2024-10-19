//pages
import Title from '../_components-g/title'
import Button_Arrow from '../_components-g/butto-arrow'
import BarberShopMoreVisits from './components/barbershop-more-visits'

const More_Visits = () => {
    return (
        <>
            <main className='py-5 lg:px-10 px-5 relative' >
                <Title title={`Mais Visitados`} />
                <div className='flex gap-3 justify-between items-center pt-3 overflow-x-scroll scrollbar-none' >
                    <BarberShopMoreVisits />
                    <Button_Arrow />
                </div>
            </main>
        </>
    )
}

export default More_Visits