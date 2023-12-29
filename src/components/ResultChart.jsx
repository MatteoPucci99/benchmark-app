
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";


const ResultChart=(props)=>{

    const [dati,setDati] = useState()
    useEffect(()=>{
        setDati({
            series: [props.correctAnswer, props.wrongAnswer],
            options: {
              chart: {
                type: 'donut',
              },
              dataLabels: {
                enabled: false, // Disabilita le percentuali
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 400
                  },
                  legend: {
                    
                    position: 'bottom'
                  }
                }
              }],
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: false, // Nascondi le etichette delle fette
                    },
                  size:'70%'
                  },
                },
              },
              legend: {
                show: false, // Nascondi la legenda
              },
              stroke: {
                show: false, // Nascondi il contorno del grafico
              },
              tooltip: {
                enabled: false, // Disabilita il tooltip
              },
              colors: ["#00FFFF", "#D20094"],
            },
          
          
          });
      },[])


    return (
        <div style={{position:"relative"}}>
            {dati && (
                <ReactApexChart options={dati.options} series={dati.series} type="donut" height={390} />
  
            )}
            <div id="resultAlert">
                {props.correctAnswer > 50 ? <p className="mb-0"><span className="fw-bold">Congratulations</span><br/><span className="fw-bold" style={{color:'#00FFFF'}}>You pass the exam.</span><br/><span style={{fontSize:'0.85em', color:'#D0D0D0'}}>We'll send the certificate in few minutes. Check your emails including promotions / spam folder</span></p> : <p>Oh no! You failed the exam, try again !</p>}    
            </div> 
        </div>
    )
}

export default ResultChart