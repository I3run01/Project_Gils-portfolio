import { ExperienceStyled } from './styled'
import { Jobs } from './Classes/classExperience'

export const Experince = () => {

    function getCurrentYear() {
        return new Date().getFullYear();
    }

    function getCurrentMonth() {
        return new Date().getMonth();
    }

    function dateDiff(month1:number, year1:number, month2:number, year2:number) {
        let diff = (year2 - year1) * 12 + (month2 - month1);
        return diff;
    }

    function convertMonths(months: number) {
        var years = Math.floor(months / 12);
        var remainingMonths = months % 12;
        return `${years} years and ${remainingMonths} months`;
    }
      
 
    return (
        <ExperienceStyled>
            <h1>Experiência</h1>
            
            {
                Jobs.map((item, index)=>{
                    return (
                        <div id='container'>
                            <div className='subcontainer' >
                                <div className='business'>
                                    <div className='photo'>
                                        <img src={item.imageFile} alt="" />
                                    </div>
                                    <div className='text'>
                                        <h2>{item.businessName}</h2>
                                        <h3>{item.workinformation[index].job}</h3>
                                        <h3>
                                            {item.workinformation[index].start.startMonth}/
                                            {item.workinformation[index].start.startYear} -  
                                            {
                                                item.workinformation[index].end.endMonth === 'atualmente' ?
                                                ' ':
                                                ' ' + item.workinformation[index].end.endMonth + '/'
                                            }
                                            {item.workinformation[index].end.endYear} ·  {' '}
                                            {
                                                item.workinformation[index].end.endMonth === 'atualmente' ?
                                                (dateDiff(
                                                    item.workinformation[index].start.startMonth,
                                                    item.workinformation[index].start.startYear,
                                                    getCurrentMonth()+1,
                                                    getCurrentYear()
                                                ))
                                                :
                                                (dateDiff(
                                                    item.workinformation[index].start.startMonth,
                                                    item.workinformation[index].start.startYear,
                                                    item.workinformation[index].end.endMonth as number,
                                                    item.workinformation[index].end.endYear as number
                                                ))
                                            }
                                        </h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    )
                })
            }
            
        </ExperienceStyled>
    )
}