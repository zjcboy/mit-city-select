# mit-city-select
基于angular2的省市区三级联动组件

![gif](https://cloud.githubusercontent.com/assets/8294751/22183022/afbdcdee-e0ee-11e6-8e6b-ac6a7c2b1da3.gif)

## 使用方式

### 1. Intstall
```bash
    npm install mit-city-select
```    


### 2. Import 
```
    import MitSelectModule form 'mit-city-select';
    @NgModule({
        declarations: [],
        imports: [
            MitBaiduMapModule
    ]
    })
    export class BusinessModule { };
```

### 3. Use
```
    <app-mit-city-select [selected]="'默认值(可为空)'" (result)="citySelect($event)"></app-mit-city-select>
```

### 4. Over
```
    citySelect(e){
          // 结果
        console.log(e)
    }
```
 

## Environment
```
angular-cli: 1.0.0-beta.25.5
node: 7.2.1
os: darwin x64

```