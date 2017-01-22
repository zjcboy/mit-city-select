import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'MitCitySelectPipe'
})
export class MitCitySelectPipe implements PipeTransform {

  transform( arr: any, parent?: any ): any {
    if ( !parent ) {
      return arr.filter( this.isProvince );
    } else if ( parent ) {
      return this.isChild( arr, parent );
    }
    return [];
  }

  isProvince( e ) {
    return !e.parent;
  }

  isChild( arr, parent ) {
    const _arr = [];
    arr.forEach(( item ) => {
      if ( item.parent === parent ) {
        _arr.push( item );
      };
    });
    return _arr;
  }
}
