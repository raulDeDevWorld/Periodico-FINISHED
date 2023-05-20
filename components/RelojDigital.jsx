import style from '../styles/RelojDigital.module.css'
import cargarReloj from '../utils/Reloj'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Time() {

    const [time, setTime] = useState(null);

    useEffect(() => {
        setInterval(() => {
            const newTime = cargarReloj()
            setTime(newTime)
        }, 1000)
    }, [time]);

    return (
        <div className={style.container}>
            <Script type="text/javascript" src="https://www.tutiempo.net/s-widget/l_yiyAbxYxYI2rdcrA7fzDDsfbgtlALAhlbtkdEcCoq1j"/>

            <span className={style.time}>{time}</span>

            
            <div className={style.clima}>
            <div id="TT_yiyAbxYxYI2rdcrA7fzDDsfbgtlALAhlbtkdEcCoq1j"></div>

            </div>
        </div>




    )
}