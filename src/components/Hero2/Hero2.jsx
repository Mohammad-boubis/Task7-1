import './Hero2.css'
import heropic from './../../assets/images/breadcrumb.webp'
import heropicleft from './../../assets/images/element.webp'
import heropicright from './../../assets/images/line-element.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Hero2({title,h5}) {
    return (
        <div className='Hero2'>
            <img src={heropic} alt="" />
            <img className='img-left' src={heropicleft} alt="" />
            <img className='img-right' src={heropicright} alt="" />
            <div className='hero2-desc'>
                <h2>{title} </h2>
                <h5>Home <FontAwesomeIcon icon={faChevronRight} /> {h5}  </h5>
            </div>
        </div>
    )
}
