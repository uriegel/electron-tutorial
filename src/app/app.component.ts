import { Component } from '@angular/core'

declare var process

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {


        console.log(process.cwd())

        if ((<any>window).require) {
            try {
                this.edge = (<any>window).require("electron-edge-js")

                this.test = this.edge.func({
                    assemblyFile: 'Library.dll',
                    typeName: 'Library.Demo',
                    methodName: 'Test' 
                });
                
            } catch (error) {
                throw error
            }
        } else 
            console.warn("Could not load electron ipc");             
    }

    async callFs() {
        const result = await this.callTest("Calling from Electron")
        alert(result)
    }

    async callTest(text: string) {
        return new Promise<string>((res, rej) => {
            this.test(text, function(error, result) {
                if (error) rej(error)
                res(result)
            })
        })
    } 

    private edge: any
    private test: any 
}
