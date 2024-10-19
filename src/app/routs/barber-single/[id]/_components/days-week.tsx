import { DaysWeek } from "@/app/_constants/_days-weeks";

const DaysWeekPage = () => {
    return (
        <>
            {
                DaysWeek.map((day) => (
                    <div key={day.day} className='flex items-center justify-between' >
                        <h1 className='text-[#838896] text-sm' >{day.day}</h1>
                        <h1 className='text-sm' >{day.status}</h1>
                    </div>
                ))
            }
        </>
    );
}

export default DaysWeekPage;