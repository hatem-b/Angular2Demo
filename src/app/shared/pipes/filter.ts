import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "filter"
})

export class FilterPipe implements PipeTransform {

    transform(value: any, args: string[]): any {

       let filter = args[0].toLocaleLowerCase();

       var result = (filter && value) ? value.filter(element => JSON.stringify(element).toLocaleLowerCase().indexOf(filter) != -1) : value;

       return result;

    }
}