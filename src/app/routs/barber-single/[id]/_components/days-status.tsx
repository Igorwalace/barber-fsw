//page
import { DaysStatus } from "@/app/_constants/_days-status-constant";

const DaysStatusPage = () => {
    return (
        <>
            {
                DaysStatus.map((day) => (
                    <div key={day.day} className='text-sm flex items-center justify-between' >
                        <h1 className='text-[#838896]' >{day.day}</h1>
                        <h1 className='' >{day.status}</h1>
                    </div>
                ))
            }
        </>
    );
}

export default DaysStatusPage;