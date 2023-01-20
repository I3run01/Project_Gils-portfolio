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
        
        var years = Math.floor(diff / 12);
        var remainingMonths = diff % 12;
        return `${years}a e ${remainingMonths}m`;

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
                                        <h3>{item.businessName}</h3>
                                        <h4>{item.workinformation[0].job}</h4>
                                        <h4>
                                            {item.workinformation[item.workinformation.length-1].start.startMonth}/
                                            {item.workinformation[item.workinformation.length-1].start.startYear} -  
                                            {
                                                item.workinformation[index].end.endMonth === 'atualmente' ?
                                                ' ':
                                                ' ' + item.workinformation[index].end.endMonth + '/'
                                            }
                                            {item.workinformation[index].end.endYear} ·  {' '}
                                            {
                                                item.workinformation[index].end.endMonth === 'atualmente' ?
                                                dateDiff(
                                                    item.workinformation[item.workinformation.length-1].start.startMonth,
                                                    item.workinformation[item.workinformation.length-1].start.startYear,
                                                    getCurrentMonth()+1,
                                                    getCurrentYear()
                                                )
                                                :
                                                dateDiff(
                                                    item.workinformation[item.workinformation.length-1].start.startMonth,
                                                    item.workinformation[item.workinformation.length-1].start.startYear,
                                                    item.workinformation[index].end.endMonth as number,
                                                    item.workinformation[index].end.endYear as number
                                                )
                                            }
                                        </h4>
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