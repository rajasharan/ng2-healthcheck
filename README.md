# ng2-healthcheck
angular2 health check ping module using svg animations

## Demo gif
![](./demo.gif)

## Prerequisite
Setup a working angular-2 project using one of the following:
* [angular-cli](https://github.com/angular/angular-cli)
* [angular2 quickstart](https://angular.io/docs/ts/latest/quickstart.html)

## Install `ng2-healthcheck `
```sh
$ npm install ng2-healthcheck --save
```

## Usage
Import `HealthCheckModule` in app module
```ts
import { HealthCheckModule } from 'ng2-healthcheck';

@NgModule({
  imports: [
    HealthCheckModule,
    ...
  ]
})
export class AppModule { }
```

Use `health-check` selector inside app template
```html
<health-check 
    title="Main Site" 
    pingIntervalMilli="3000" 
    pingUrl="/index.html">
</health-check>
```

This will ping `/index.html` every 3 secs and report the status

### [License](/LICENSE)
The MIT License (MIT)