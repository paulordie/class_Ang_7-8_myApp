import { Component } from '@angular/core';

@Component({
    // selector: 'myfirst', transformar o selector em diretiva e retirar a tag myfirst por <div myfirst></div> no app.component.html
    selector: '[myfirst]',
    // template: `
    //     <h1>Paulo</h1>
    //     <h2>paulo</h2>
    // `
    templateUrl: './myfirst.component.html',
    //os estilos ṕodem ser injetados inline no html ou no .css styleUrls: [nome.css]
    styles:[`
    .box{
        width: 200px;
        height: 100px;
        background: chartreuse;
        box-shadow: 5px 10px #CCCCCC;
        }
    `]
})
export class MyFirstComponent {

}