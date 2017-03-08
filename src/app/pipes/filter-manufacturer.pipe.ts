import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterManufacturer'
})
@Injectable()
export class FilterManufacturerPipe implements PipeTransform {

    transform(items: any[], args: any[]): any {
        if (!args){
            return items;
        }
        return items.filter(item => item.manufacturer.indexOf(args) !== -1);
    }

}
