import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterTitle'
})
@Injectable()
export class FilterTitlePipe implements PipeTransform {

    transform(items: any[], args: any[]): any {
        if (!args){
            return items;
        }
        return items.filter(item => item.title.indexOf(args) !== -1);
    }

}
