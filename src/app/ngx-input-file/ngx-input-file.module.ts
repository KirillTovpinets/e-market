import { NgModule } from '@angular/core';
import { InputFileModule, InputFileOptions, InputFileRepository } from 'ngx-input-file';
 
const options: InputFileOptions = new InputFileOptions(
    'auth-token-value',
    'Authorization'
);
 
@NgModule({
    imports: [ InputFileModule ],
    exports: [ InputFileModule ]
})
 
export class NgxInputFileModule {
    constructor(private repository: InputFileRepository) {
        repository.setOptions(options);
    }
}