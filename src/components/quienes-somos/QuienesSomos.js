import React,{Component} from 'react';
import './QuienesSomos.css';

class QuienesSomos extends  Component{
    render() {
        const altura = window.innerHeight - 64;
        const tamanoFuente = altura - (altura*0.96);
        const alturaForGM = altura - (altura*0.93)
        const alturaForDiv = altura - (altura*0.40);
        return(
            <div className="mainContainer">
                <div id='upperSide' style={{height:altura +'px'}}>
                    <div id='upperSide1'>
                        <p className="parrafo" style={{'font-size':tamanoFuente}}>
                            Somos un grupo de emprendedores enfocados al servicio de cafetería.<br></br>
                            Nuestro local cuenta con un ambiente agradable donde cualquiera puede llegar<br></br>
                            y ordenar cualquiera de los productos que ofrecemos.
                        </p>
                    </div>
                    <div id='upperSide2'>
                        <div id='img1'></div>
                        <div id='img2'></div>                                  
                        <div id='img3'></div>
                    </div>
                </div>
                <div id='bottomSide' style={{height:(altura+64) +'px'}}>
                    <div id='bottomFondo'>
                    </div>
                    <div id='bottomSide1'>
                        <p className='parrafo' style={{'font-size':tamanoFuente}}>
                            En Las Carmelitas Café te ofrecemos bebidas a base de café gourmet de marca<br></br>
                            Carmelitas Coffee, tostado y procesado por nuestra empresa procesadora , también<br></br> 
                            puedes encontrar smoothies, paninis y otros productos elaborados por pequeñas<br></br> 
                            empresas, pero sobre todo, te brindamos excelente atención. Visitanos,  será un<br></br> 
                            placer atenderte.<br></br>
                            ;)
                        </p>
                    </div>
                    <div id='bottomSide2' style={{'padding-top':alturaForGM+'px', 'margin-top':alturaForDiv+'px'}}>
                        <a id='logoGM' href="https://www.google.com/maps/search/carmelitas+coffee+shop/@12.1293181,-86.2804735,14z/data=!3m1!4b1" target="_blank">>
                        </a>
                        <p>Buscanos en Google Maps</p>
                    </div>
                </div>
            </div>
        )
    };
}
export default QuienesSomos;