import { Component} from "@angular/core";
import { CompileNgModuleMetadata } from "@angular/compiler";
@Component({
    template: `<h2 >This is Component Word-Created by {{name}}</h2>
    <button type="button" class="btn btn-primary">Primary <span class="badge">7</span></button>`,
    selector: 'app-word'
})
export class WordWrapComponent{
    name='Duc';
}