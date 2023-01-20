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

    function findSmallestIndex(arr:number[]) {
        let smallest = arr[0];
        let smallestIndex = 0;
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
          }
        }
        return smallestIndex;
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
                                                item.workinformation[0].end.endMonth === 'atualmente' ?
                                                ' ':
                                                ' ' + item.workinformation[0].end.endMonth + '/'
                                            }
                                            {item.workinformation[0].end.endYear} ·  {' '}
                                            {
                                                item.workinformation[0].end.endMonth === 'atualmente' ?
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
                                                    item.workinformation[0].end.endMonth as number,
                                                    item.workinformation[0].end.endYear as number
                                                )
                                            }
                                        </h4>
                                    </div>
                                </div>

                                 {item.workinformation.map((subItem, index) => {
                                    return (
                                        <div>
                                            <h2>{subItem.job}</h2>
                                            <h2>
                                                {subItem.start.startMonth}/{subItem.start.startYear + '- '}
                                                {subItem.end.endMonth}{subItem.end.endYear === 'atualmente' ? '': '/ ' + subItem.end.endYear}
                                                {
                                                    ' · ' +
                                                    dateDiff(
                                                        subItem.start.startMonth,subItem.start.startYear,
                                                        subItem.end.endMonth === 'atualmente' ? getCurrentMonth() : subItem.end.endMonth as number,subItem.end.endYear === 'atualmente' ? getCurrentYear() : subItem.end.endYear as number,
                                                    )
                                                }

                                                
                                            </h2>
                                        </div>
                                    )
                                 })}
                            </div> 
                        </div>
                    )
                })
            }
            
        </ExperienceStyled>
    )
}