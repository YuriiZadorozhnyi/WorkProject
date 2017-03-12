import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterManufacturer'
})
@Injectable()
export class FilterManufacturerPipe implements PipeTransform {

    transform(items: any[], args: any[]): any {

        let argsLowerCase : any[] = [];

        for (var i = 0; i < args.length; i ++) { argsLowerCase = args[i].toLowerCase(); };

        return !args ? items : items.filter(item => item.manufacturer.toLowerCase().indexOf(argsLowerCase) !== -1);

    }

}
