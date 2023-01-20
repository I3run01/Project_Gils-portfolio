import { ExperienceStyled } from './styled'
import { Jobs } from './Classes/classExperience'

export const Experince = () => {

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
                                            {item.workinformation[index].end.endYear}
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