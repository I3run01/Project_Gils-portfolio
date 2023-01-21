import { ExperienceStyled } from './styled'
import { Jobs } from './Classes/classExperience'
import { useEffect, useState } from 'react';

export const Experince = () => {

    const [diffBusinessdata, setdiffBusinessdata] = useState<string[]>([])
    const [startBusinessdata, setStartBusinessdata] = useState<string[]>([])

    useEffect(() => {
        startSmallestIndex()
    }, [])

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

    function convertMonthsToYears(months: number): { years: number, months: number } {
        let years = Math.floor(months / 12);
        let remainingMonths = months % 12;
        return { years, months: remainingMonths };
    }
    
    function startSmallestIndex() {

        let arrayDiff:string[] = []
        let arraySmallestData:string[] = []
        
        for( let i of Jobs) {
            
            const startArray = []
            const endArray = []

            for( let c of i.workinformation){
                let startMonths = c.start.startMonth + c.start.startYear*12
                let endMonths = c.end.endMonth === 'atualmente' || c.end.endYear === 'atualmente' ? getCurrentMonth() + getCurrentYear() * 12 : c.end.endMonth + c.end.endYear * 12
 
                startArray.push(startMonths)
                endArray.push(endMonths)
            }

            let smallestValue = Math.min(...startArray);
            let biggestValue = Math.max(...endArray)

            let responseDiff = convertMonthsToYears(biggestValue - smallestValue)
            let responseSmallestStart = convertMonthsToYears(smallestValue)

            arrayDiff.push(`${responseDiff.years}a e ${responseDiff.months}m`)
            arraySmallestData.push(`${responseSmallestStart.months}/${responseSmallestStart.years}`)
        }

        setdiffBusinessdata(arrayDiff)
        setStartBusinessdata(arraySmallestData)
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
                                            {startBusinessdata[index]} -  
                                            {
                                                item.workinformation[0].end.endMonth === 'atualmente' ?
                                                ' ':
                                                ' ' + item.workinformation[0].end.endMonth + '/'
                                            }
                                            {item.workinformation[0].end.endYear} ·  {diffBusinessdata[index]}
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